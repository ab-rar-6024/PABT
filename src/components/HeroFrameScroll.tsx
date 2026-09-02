"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { RotateCcw, ChevronDown, ChevronUp, SkipForward } from "lucide-react";

// Frame count the checkpoint indices below are expressed in (matches the original
// frame-sequence export) — used only to convert checkpoints into fractions of the
// video's real duration, e.g. CHECKPOINTS[1] = 70 means "70/263 of the way through".
const TOTAL_FRAMES = 264;

// Predefined frame index checkpoints matching landing sections
const CHECKPOINTS = [0, 70, 160, 263] as const;
const CHECKPOINT_FRACTIONS = CHECKPOINTS.map((f) => f / (TOTAL_FRAMES - 1));

type Phase = "earth" | "playing";

// Section content details with alternating alignment (Right -> Left -> Right)
// Section 1: "right" -> leaves sapling & hands on left uncovered!
// Section 2: "left"  -> leaves solar leaf on right uncovered!
// Section 3: "right" -> alternates layout cleanly!
const CHECKPOINT_CONTENT = [
  null, // Section 0 is Interactive Earth
  {
    tag: "PABT Nature",
    tagColor: "#4ade80",
    tagBorder: "rgba(74,222,128,0.3)",
    tagBg: "rgba(20,83,45,0.25)",
    title: "Plant A Billion Trees",
    desc: "Restoring native forests, rejuvenating regional water bodies, and shielding biodiversity through community afforestation across degraded ecosystems.",
    href: "/nature",
    accentLine: "#16a34a",
    align: "right" as const,
  },
  {
    tag: "PABT Future",
    tagColor: "#22d3ee",
    tagBorder: "rgba(34,211,238,0.3)",
    tagBg: "rgba(8,51,68,0.25)",
    title: "Clean Energy for All",
    desc: "Deploying solar micro-grids, EV charging hubs, and climate-tech pilots in off-grid rural communities.",
    href: "/future",
    accentLine: "#06b6d4",
    align: "left" as const,
  },
  {
    tag: "PABT Circular",
    tagColor: "#fbbf24",
    tagBorder: "rgba(251,191,36,0.3)",
    tagBg: "rgba(92,45,0,0.25)",
    title: "Waste Diversion & Circularity",
    desc: "Diverting plastics, paper, and metals from landfills — building zero-waste recycling clusters and circular supply networks.",
    href: "/circular",
    accentLine: "#f59e0b",
    align: "right" as const,
  },
] as const;

// All 5 pathways, shown as a short-description grid once the cinematic sequence finishes —
// the video itself only animates through 3 of the 5 (Nature, Future, Circular), so this is
// where ESG and Community get their moment before the visitor scrolls into the rest of the site.
const MISSIONS = [
  {
    tag: "PABT Nature",
    title: "Plant A Billion Trees",
    desc: "Restoring forests, water bodies, biodiversity and natural ecosystems.",
    href: "/nature",
    color: "#4ade80",
  },
  {
    tag: "PABT Future",
    title: "Powering A Brighter Tomorrow",
    desc: "Advancing clean energy, green mobility and climate innovation.",
    href: "/future",
    color: "#22d3ee",
  },
  {
    tag: "PABT Circular",
    title: "Preserve All By Transforming",
    desc: "Transforming waste, resources and production into circular models.",
    href: "/circular",
    color: "#fbbf24",
  },
  {
    tag: "PABT ESG",
    title: "Partners Advancing Better Tomorrow",
    desc: "Helping businesses build measurable, responsible operations.",
    href: "/esg",
    color: "#94a3b8",
  },
  {
    tag: "PABT Community",
    title: "People And Businesses Together",
    desc: "Connecting communities, institutions and businesses for inclusive growth.",
    href: "/community",
    color: "#fb923c",
  },
] as const;

// 3D Earth alignment angles matching the video's opening frame
const INITIAL_ROT_Y = -2.55;
const INITIAL_ROT_X = 0.14;
const INITIAL_ROT_Z = -0.10;

export default function HeroFrameScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDurationRef = useRef(0);

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [bufferProgress, setBufferProgress] = useState(0);

  const [phase, setPhase] = useState<Phase>("earth");
  const phaseRef = useRef<Phase>("earth");
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const [currentSection, setCurrentSection] = useState(0);
  const currentSectionRef = useRef(0);
  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  // Animation and locking states
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  // Content visibility scoping: VIDEO MOVING = NO TEXT, VIDEO PAUSED = SHOW TEXT
  const [showContent, setShowContent] = useState(false);

  const [sequenceComplete, setSequenceComplete] = useState(false);
  const sequenceCompleteRef = useRef(false);
  useEffect(() => {
    sequenceCompleteRef.current = sequenceComplete;
  }, [sequenceComplete]);

  const [videoProgress, setVideoProgress] = useState(0);
  // Progress bar fill is updated imperatively via this ref during playback instead of through
  // React state on every frame — driving setState at animation-frame rate forces a full
  // component re-render many times a second, which competes with real work for main-thread
  // time. State is only synced at the start/end of each transition (see finish() below).
  const progressFillRef = useRef<HTMLDivElement>(null);

  const animFrameRef = useRef<number | null>(null);
  const lastWheelTimeRef = useRef<number>(0);
  const lastTouchTimeRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  // Bumped by cancelAnimation() (called at the start of every transition + on reset) so
  // in-flight async callbacks — namely the reverse dip-to-black sequence's setTimeouts,
  // which aren't cancelable the way a rAF handle is — can tell they've been superseded
  // and bail out instead of applying stale state.
  const transitionTokenRef = useRef(0);

  // Dips the video to black to conceal the reverse-seek's latency (see playReverseTo)
  const [isReverseCut, setIsReverseCut] = useState(false);

  // Three.js Earth mesh references for smooth settle animation on handoff
  const earthMeshRef = useRef<any>(null);
  const cloudsMeshRef = useRef<any>(null);

  // Load video metadata/readiness. Real hardware video decode replaces the old approach of
  // stepping through 264 JPEGs on a canvas — no per-frame JS decode or drawImage work at all,
  // which is what was actually causing the stutter/skip-ahead during scroll playback.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      videoDurationRef.current = video.duration;
    };
    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
    };
    const handleProgress = () => {
      if (video.buffered.length && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        setBufferProgress(Math.min(100, Math.round((bufferedEnd / video.duration) * 100)));
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("progress", handleProgress);

    // Handle the case where the browser already had this cached/ready before we attached listeners
    if (video.readyState >= 1) handleLoadedMetadata();
    if (video.readyState >= 4) handleCanPlayThrough();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("progress", handleProgress);
    };
  }, []);

  // Lock document overflow on mount and unlock on unmount.
  // Both html and body must be locked — locking body alone doesn't reliably block
  // the viewport from scrolling (document.scrollingElement is html), which let real
  // page scroll bleed through underneath the hero and fight the sticky section.
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Cancel any running scrub/watch loop and make sure the video isn't left playing underneath it
  const cancelAnimation = useCallback(() => {
    transitionTokenRef.current++;
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    videoRef.current?.pause();
  }, []);

  // Forward transition: let the video play natively (hardware-decoded, natural 1x speed) from
  // wherever it currently is up to the target checkpoint's timestamp, watched by a lightweight
  // rAF loop that only reads currentTime and writes one style property — no decode/draw per tick.
  const playForwardTo = useCallback((targetSection: number) => {
    const video = videoRef.current;
    const duration = videoDurationRef.current;
    if (!video || !duration) return;

    cancelAnimation();
    setShowContent(false); // Immediate fade out content before movement
    setIsAnimating(true);

    if (phaseRef.current === "earth") {
      setPhase("playing");
    }

    const targetFraction = CHECKPOINT_FRACTIONS[targetSection];
    const targetTime = targetFraction * duration;

    const finish = () => {
      video.pause();
      video.currentTime = targetTime;
      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${targetFraction * 100}%`;
      }
      setVideoProgress(targetFraction);
      setCurrentSection(targetSection);
      setIsAnimating(false);

      // VIDEO PAUSED AT CHECKPOINT -> FADE IN CONTENT
      setShowContent(true);

      if (targetSection === CHECKPOINTS.length - 1) {
        setSequenceComplete(true);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };

    if (video.currentTime >= targetTime - 0.01) {
      finish();
      return;
    }

    const watch = () => {
      if (progressFillRef.current && duration) {
        progressFillRef.current.style.width = `${(video.currentTime / duration) * 100}%`;
      }
      if (video.currentTime >= targetTime) {
        finish();
      } else {
        animFrameRef.current = requestAnimationFrame(watch);
      }
    };

    video.playbackRate = 1;
    video.play();
    animFrameRef.current = requestAnimationFrame(watch);
  }, [cancelAnimation]);

  // Reverse transition: browsers can't play video backward, and scrubbing currentTime — even
  // carefully paced — is still bottlenecked by the decoder's real seek latency (finding the
  // nearest keyframe and decoding forward to the target), which is inherent to how compressed
  // video works and can't be fixed by throttling the requests better. So instead of faking a
  // smooth reverse scrub, this does exactly one seek, concealed behind a quick dip-to-black
  // crossfade — the seek's latency just happens while the screen is briefly black.
  const playReverseTo = useCallback((targetSection: number) => {
    const video = videoRef.current;
    const duration = videoDurationRef.current;
    if (!video || !duration) return;

    cancelAnimation();
    const token = transitionTokenRef.current;

    setShowContent(false); // Immediate fade out content before movement
    setIsAnimating(true);

    const targetFraction = CHECKPOINT_FRACTIONS[targetSection];
    const targetTime = targetFraction * duration;

    const finish = () => {
      if (transitionTokenRef.current !== token) return;
      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${targetFraction * 100}%`;
      }
      setVideoProgress(targetFraction);
      setCurrentSection(targetSection);
      setIsAnimating(false);
      setIsReverseCut(false);

      if (targetSection === 0) {
        setPhase("earth");
      }
      // VIDEO PAUSED AT CHECKPOINT -> FADE IN CONTENT
      setShowContent(true);
    };

    if (Math.abs(video.currentTime - targetTime) < 0.01) {
      finish();
      return;
    }

    // If this stretch of the video is already decoded/buffered, the seek is a handful of
    // milliseconds — cheap enough to do directly with no black cover. `preload="auto"` keeps
    // downloading the whole file in the background, so revisiting an earlier checkpoint is
    // usually already buffered; only an unbuffered seek (rare — e.g. jumping back before much
    // has loaded) needs the dip-to-black treatment below to hide real network/decode latency.
    const targetIsBuffered = (() => {
      const { buffered } = video;
      for (let i = 0; i < buffered.length; i++) {
        if (targetTime >= buffered.start(i) - 0.25 && targetTime <= buffered.end(i) + 0.25) {
          return true;
        }
      }
      return false;
    })();

    if (targetIsBuffered) {
      let settled = false;
      const onSeeked = () => {
        if (settled || transitionTokenRef.current !== token) return;
        settled = true;
        video.removeEventListener("seeked", onSeeked);
        finish();
      };
      video.addEventListener("seeked", onSeeked);
      video.currentTime = targetTime;

      // Safety net in case 'seeked' never fires for this browser/file
      window.setTimeout(() => {
        if (settled || transitionTokenRef.current !== token) return;
        settled = true;
        video.removeEventListener("seeked", onSeeked);
        finish();
      }, 300);
      return;
    }

    setIsReverseCut(true); // begin fading to black

    const FADE_MS = 220;
    window.setTimeout(() => {
      if (transitionTokenRef.current !== token) return;

      let settled = false;
      const onSeeked = () => {
        if (settled || transitionTokenRef.current !== token) return;
        settled = true;
        video.removeEventListener("seeked", onSeeked);
        // Brief hold on black so the reveal doesn't overlap the seek's last bit of latency
        window.setTimeout(() => {
          if (transitionTokenRef.current === token) finish();
        }, 80);
      };
      video.addEventListener("seeked", onSeeked);
      video.currentTime = targetTime;

      // Safety net in case 'seeked' never fires for this browser/file
      window.setTimeout(() => {
        if (settled || transitionTokenRef.current !== token) return;
        settled = true;
        video.removeEventListener("seeked", onSeeked);
        finish();
      }, 600);
    }, FADE_MS);
  }, [cancelAnimation]);

  // Navigation actions
  const goToNextSection = useCallback(() => {
    if (isAnimatingRef.current) return;
    const curr = currentSectionRef.current;
    if (curr < CHECKPOINTS.length - 1) {
      playForwardTo(curr + 1);
    }
  }, [playForwardTo]);

  const goToPreviousSection = useCallback(() => {
    if (isAnimatingRef.current) return;
    const curr = currentSectionRef.current;
    if (curr > 0) {
      playReverseTo(curr - 1);
    }
  }, [playReverseTo]);

  // Complete restart handler resetting every state
  const resetLandingExperience = useCallback(() => {
    cancelAnimation();

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    if (progressFillRef.current) {
      progressFillRef.current.style.width = "0%";
    }

    setCurrentSection(0);
    setIsAnimating(false);
    setShowContent(false);
    setSequenceComplete(false);
    setPhase("earth");
    setVideoProgress(0);
    setIsReverseCut(false);

    window.scrollTo({ top: 0, behavior: "instant" });
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, [cancelAnimation]);

  // Skips the whole cinematic sequence outright — jumps straight to the completed state and
  // hands scroll control back to the page, then smoothly scrolls down past the hero to the
  // About section (offsetting for the fixed navbar so its heading isn't tucked underneath it).
  const skipIntro = useCallback(() => {
    cancelAnimation();

    const video = videoRef.current;
    const duration = videoDurationRef.current;
    if (video && duration) {
      video.pause();
      video.currentTime = duration;
    }

    setIsAnimating(false);
    setIsReverseCut(false);
    setPhase("playing");
    setCurrentSection(CHECKPOINTS.length - 1);
    setVideoProgress(1);
    if (progressFillRef.current) {
      progressFillRef.current.style.width = "100%";
    }
    setSequenceComplete(true);
    setShowContent(true);

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    requestAnimationFrame(() => {
      const target = document.getElementById("about-section");
      if (!target) return;
      const NAVBAR_HEIGHT = 80; // matches Navbar.tsx's fixed h-20
      const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [cancelAnimation]);

  // Mouse wheel and touch event interception
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();

      if (sequenceCompleteRef.current && window.scrollY > 10) {
        return;
      }

      if (sequenceCompleteRef.current && window.scrollY <= 10 && e.deltaY < 0) {
        e.preventDefault();
        if (isAnimatingRef.current) return;
        if (now - lastWheelTimeRef.current < 500) return;
        lastWheelTimeRef.current = now;

        setSequenceComplete(false);
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        goToPreviousSection();
        return;
      }

      if (!sequenceCompleteRef.current) {
        e.preventDefault();
        if (isAnimatingRef.current) return;
        if (now - lastWheelTimeRef.current < 500) return;

        if (e.deltaY > 0) {
          lastWheelTimeRef.current = now;
          goToNextSection();
        } else if (e.deltaY < 0) {
          lastWheelTimeRef.current = now;
          goToPreviousSection();
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      lastTouchTimeRef.current = 0; // reset so the next swipe is never blocked by a stale timestamp
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (sequenceCompleteRef.current && window.scrollY > 10) {
        return;
      }

      const deltaY = touchStartYRef.current - e.touches[0].clientY;

      if (sequenceCompleteRef.current && window.scrollY <= 10 && deltaY < -30) {
        e.preventDefault();
        if (isAnimatingRef.current) return;
        const now = Date.now();
        if (now - lastTouchTimeRef.current < 600) return;
        lastTouchTimeRef.current = now;
        touchStartYRef.current = e.touches[0].clientY;
        setSequenceComplete(false);
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        goToPreviousSection();
        return;
      }

      if (!sequenceCompleteRef.current) {
        e.preventDefault();
        if (isAnimatingRef.current) return;

        if (Math.abs(deltaY) > 40) {
          const now = Date.now();
          if (now - lastTouchTimeRef.current < 600) return;
          lastTouchTimeRef.current = now;
          touchStartYRef.current = e.touches[0].clientY;
          if (deltaY > 40) {
            goToNextSection();
          } else if (deltaY < -40) {
            goToPreviousSection();
          }
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [goToNextSection, goToPreviousSection]);

  // Three.js 3D Earth Setup for Section 0 (Brighter & aligned visually with the video's opening frame).
  // Mounted once and kept alive for the component's whole lifetime — the scene/renderer/textures are
  // never torn down and rebuilt on each visit. Previously this effect only ran `if (phase === "earth")`,
  // so returning to section 0 re-triggered the full setup (re-importing three, refetching textures over
  // the network, recreating the WebGL renderer) from scratch every time, which is what caused the black
  // gap before the globe reappeared. Now the container's opacity is just faded like the video (see JSX),
  // and the render loop below skips actual rendering while hidden instead of being destroyed.
  useEffect(() => {
    let active = true;
    let renderer: any;
    let animationFrameId: number;
    let cleanupThree: (() => void) | null = null;

    import("three").then((THREE) => {
      if (!active) return;

      const container = canvasContainerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Touch-primary devices are almost always weaker GPUs than the desktops/laptops this scene
      // was tuned on — at full desktop quality (2x pixel ratio, MSAA, 64-segment spheres, 3500
      // stars) the drag/inertia rotation drops frames and reads as janky rather than smooth.
      // These are pure render-quality knobs; nothing about visibility or interactivity changes.
      const isTouchPrimary =
        typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      // `fov` above is Three.js's *vertical* field of view, so the globe's fit is governed by
      // container height alone and is blind to width — fine on a landscape desktop hero (lots of
      // spare horizontal room), but on a tall mobile viewport (aspect < 1) the same distance lets
      // the sphere overflow past the left/right edges since the horizontal extent shrinks with
      // aspect. Pulling the camera back by 1/aspect on portrait screens restores the same
      // fraction-of-width fit that the desktop framing already gets fraction-of-height for free.
      const baseZ = 5.25; // Exact diameter alignment matching the video's opening frame
      camera.position.z = width < height ? baseZ / (width / height) : baseZ;
      scene.add(camera);

      renderer = new THREE.WebGLRenderer({ antialias: !isTouchPrimary, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouchPrimary ? 1.5 : 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.55; // Increased exposure to match daylight brightness
      container.appendChild(renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.setCrossOrigin("anonymous");

      const dayTexture = textureLoader.load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");
      const bumpMap = textureLoader.load("https://unpkg.com/three-globe/example/img/earth-topology.png");
      const specularMap = textureLoader.load("https://unpkg.com/three-globe/example/img/earth-water.png");
      const cloudsTexture = textureLoader.load("https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earthcloudmaptrans.jpg");

      dayTexture.colorSpace = THREE.SRGBColorSpace;
      cloudsTexture.colorSpace = THREE.SRGBColorSpace;

      const sphereSegments = isTouchPrimary ? 40 : 64;
      const geometry = new THREE.SphereGeometry(1.8, sphereSegments, sphereSegments);
      const earthMaterial = new THREE.MeshStandardMaterial({
        map: dayTexture,
        bumpMap: bumpMap,
        bumpScale: 0.006,
        roughnessMap: specularMap,
        roughness: 0.55,
        metalness: 0.0,
      });

      const earth = new THREE.Mesh(geometry, earthMaterial);
      earth.rotation.y = INITIAL_ROT_Y;
      earth.rotation.x = INITIAL_ROT_X;
      earth.rotation.z = INITIAL_ROT_Z;
      earthMeshRef.current = earth;
      scene.add(earth);

      const cloudsGeometry = new THREE.SphereGeometry(1.815, sphereSegments, sphereSegments);
      const cloudsMaterial = new THREE.MeshStandardMaterial({
        map: cloudsTexture,
        alphaMap: cloudsTexture,
        transparent: true,
        depthWrite: false,
        roughness: 1.0,
        metalness: 0.0,
        opacity: 0.25,
      });
      const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      clouds.rotation.y = INITIAL_ROT_Y;
      clouds.rotation.x = INITIAL_ROT_X;
      clouds.rotation.z = INITIAL_ROT_Z;
      cloudsMeshRef.current = clouds;
      scene.add(clouds);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.45);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 1.15);
      sunLight.position.set(2.2, 3.8, 5.5);
      scene.add(sunLight);

      const fillLight = new THREE.DirectionalLight(0xdce8ff, 0.8);
      fillLight.position.set(3, -3, -2);
      scene.add(fillLight);

      const starsGeometry = new THREE.BufferGeometry();
      const starsCount = isTouchPrimary ? 1500 : 3500;
      const starsPositions = new Float32Array(starsCount * 3);
      const starsColors = new Float32Array(starsCount * 3);

      for (let i = 0; i < starsCount * 3; i += 3) {
        const r = 16 + Math.random() * 24;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        starsPositions[i] = r * Math.sin(phi) * Math.cos(theta);
        starsPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        starsPositions[i + 2] = r * Math.cos(phi);

        starsColors[i] = 0.9 + Math.random() * 0.1;
        starsColors[i + 1] = 0.95 + Math.random() * 0.05;
        starsColors[i + 2] = 1.0;
      }

      starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
      starsGeometry.setAttribute("color", new THREE.BufferAttribute(starsColors, 3));
      const starsMaterial = new THREE.PointsMaterial({
        size: 0.045,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        vertexColors: true,
      });
      const starfield = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(starfield);

      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };
      let velocity = { x: 0.0018, y: 0 };
      const friction = 0.94;

      const handlePointerDown = (e: PointerEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const handlePointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        earth.rotation.y += deltaX * 0.004;
        earth.rotation.x += deltaY * 0.004;
        clouds.rotation.y += deltaX * 0.004;
        clouds.rotation.x += deltaY * 0.004;

        earth.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, earth.rotation.x));
        clouds.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, clouds.rotation.x));

        velocity = {
          x: deltaX * 0.004,
          y: deltaY * 0.004,
        };

        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const handlePointerUp = () => {
        isDragging = false;
      };

      container.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.position.z = w < h ? baseZ / (w / h) : baseZ;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      camera.updateMatrixWorld();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Keep the loop alive so it's instantly ready when we return to this phase, but skip the
        // actual rotation/render work while the earth isn't visible to avoid wasting GPU time.
        if (phaseRef.current !== "earth") return;

        if (!isDragging) {
          earth.rotation.y += velocity.x;
          earth.rotation.x += velocity.y;
          clouds.rotation.y += velocity.x * 1.12 + 0.00015;
          clouds.rotation.x += velocity.y;

          velocity.x = velocity.x * friction + 0.001 * (1 - friction);
          velocity.y = velocity.y * friction;
        }

        starfield.rotation.y += 0.00025;
        renderer.render(scene, camera);
      };

      animate();

      cleanupThree = () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("resize", handleResize);

        if (renderer) {
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
        geometry.dispose();
        earthMaterial.dispose();
        dayTexture.dispose();
        bumpMap.dispose();
        specularMap.dispose();

        cloudsGeometry.dispose();
        cloudsMaterial.dispose();
        cloudsTexture.dispose();

        starsGeometry.dispose();
        starsMaterial.dispose();
      };
    });

    return () => {
      active = false;
      if (cleanupThree) {
        cleanupThree();
      }
    };
  }, []);

  const activeContent = CHECKPOINT_CONTENT[currentSection];

  return (
    <section
      ref={containerRef}
      className="hero-viewport-height sticky top-0 w-full overflow-hidden bg-[#000000] select-none z-0"
    >
      {/* ── Hero Video Surface ── */}
      <video
        ref={videoRef}
        src="/videos/hero-video.mp4"
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          phase === "earth" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Subtle Radial Scrim Overlay */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Reverse Dip-to-Black Crossfade — conceals the one-time seek's latency (see playReverseTo) ── */}
      <div
        className="absolute inset-0 z-[7] bg-black pointer-events-none transition-opacity duration-200 ease-in-out"
        style={{ opacity: isReverseCut ? 1 : 0 }}
      />

      {/* ── Alternating Translucent Floating Glass Checkpoint Section Content ── */}
      {phase === "playing" && activeContent && !sequenceComplete && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            bottom: "clamp(80px, 14vh, 150px)",
            left: activeContent.align === "left" ? "clamp(24px, 6vw, 80px)" : undefined,
            right: activeContent.align === "right" ? "clamp(24px, 6vw, 80px)" : undefined,
            maxWidth: "min(520px, 90vw)",
            opacity: showContent && !isAnimating ? 1 : 0,
            transform: showContent && !isAnimating ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
            transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Translucent Glass-Style Container (85%+ background visibility) */}
          <div
            className="relative p-7 sm:p-9 rounded-3xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{
              background: "rgba(6, 16, 12, 0.14)",
              backdropFilter: "blur(8px) saturate(110%)",
              WebkitBackdropFilter: "blur(8px) saturate(110%)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* Left Accent Bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "20px",
                bottom: "20px",
                width: "4px",
                borderRadius: "4px",
                background: activeContent.accentLine,
                boxShadow: `0 0 12px ${activeContent.accentLine}`,
              }}
            />

            <div className="pl-4">
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: activeContent.tagColor,
                  border: `1px solid ${activeContent.tagBorder}`,
                  background: activeContent.tagBg,
                  borderRadius: "100px",
                  padding: "5px 16px",
                  marginBottom: "14px",
                }}
              >
                {activeContent.tag}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.08] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] mb-3">
                {activeContent.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed drop-shadow-md mb-6 font-medium">
                {activeContent.desc}
              </p>
              <Link
                href={activeContent.href}
                className="pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{
                  background: activeContent.accentLine,
                  boxShadow: `0 4px 18px ${activeContent.accentLine}55`,
                }}
              >
                <span>Explore Pathway</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Sequence Complete: All 5 Missions, Short-Description Grid ──
          The video itself only animates through 3 of the 5 pathways (Nature, Future, Circular) — this
          is where ESG and Community get shown too, once the cinematic sequence has finished. */}
      {sequenceComplete && (
        <div
          className="absolute inset-x-0 top-[8%] sm:top-[12%] z-10 flex justify-center px-3 sm:px-10 pointer-events-none"
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Mobile: 5-column compact pill grid — all missions visible at once, no scroll */}
          <div className="sm:hidden w-full pointer-events-auto">
            {/* Top row: 3 cards */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              {MISSIONS.slice(0, 3).map((mission) => (
                <Link
                  key={mission.href}
                  href={mission.href}
                  className="group flex flex-col p-2.5 rounded-xl transition-all duration-300 active:scale-95"
                  style={{
                    background: "rgba(6, 16, 12, 0.50)",
                    backdropFilter: "blur(12px) saturate(130%)",
                    WebkitBackdropFilter: "blur(12px) saturate(130%)",
                    border: `1px solid ${mission.color}30`,
                    borderLeft: `3px solid ${mission.color}`,
                  }}
                >
                  <span
                    className="text-[8px] font-black uppercase tracking-wider mb-1 truncate"
                    style={{ color: mission.color }}
                  >
                    {mission.tag}
                  </span>
                  <h3 className="text-white font-bold text-[10px] leading-tight mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    {mission.title}
                  </h3>
                  <p className="text-gray-400 text-[9px] leading-relaxed line-clamp-2">{mission.desc}</p>
                  <span
                    className="mt-1.5 text-[9px] font-bold uppercase tracking-wide flex items-center gap-0.5"
                    style={{ color: mission.color }}
                  >
                    Explore
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
            {/* Bottom row: 2 cards, centered */}
            <div className="grid grid-cols-2 gap-2">
              {MISSIONS.slice(3).map((mission) => (
                <Link
                  key={mission.href}
                  href={mission.href}
                  className="group flex flex-col p-2.5 rounded-xl transition-all duration-300 active:scale-95"
                  style={{
                    background: "rgba(6, 16, 12, 0.50)",
                    backdropFilter: "blur(12px) saturate(130%)",
                    WebkitBackdropFilter: "blur(12px) saturate(130%)",
                    border: `1px solid ${mission.color}30`,
                    borderLeft: `3px solid ${mission.color}`,
                  }}
                >
                  <span
                    className="text-[8px] font-black uppercase tracking-wider mb-1 truncate"
                    style={{ color: mission.color }}
                  >
                    {mission.tag}
                  </span>
                  <h3 className="text-white font-bold text-[10px] leading-tight mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    {mission.title}
                  </h3>
                  <p className="text-gray-400 text-[9px] leading-relaxed line-clamp-2">{mission.desc}</p>
                  <span
                    className="mt-1.5 text-[9px] font-bold uppercase tracking-wide flex items-center gap-0.5"
                    style={{ color: mission.color }}
                  >
                    Explore
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* sm+: original responsive grid */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl pointer-events-auto">
            {MISSIONS.map((mission) => (
              <Link
                key={mission.href}
                href={mission.href}
                className="group flex flex-col p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(6, 16, 12, 0.35)",
                  backdropFilter: "blur(10px) saturate(120%)",
                  WebkitBackdropFilter: "blur(10px) saturate(120%)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <span
                  className="inline-block w-fit text-[10px] font-extrabold uppercase tracking-widest rounded-full px-2.5 py-1 mb-3"
                  style={{
                    color: mission.color,
                    border: `1px solid ${mission.color}55`,
                    background: `${mission.color}1A`,
                  }}
                >
                  {mission.tag}
                </span>
                <h3 className="text-white font-bold text-base leading-snug mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {mission.title}
                </h3>
                <p className="text-gray-300/90 text-xs leading-relaxed flex-grow">{mission.desc}</p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ color: mission.color }}
                >
                  Explore
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Section 0: Interactive Earth Stage (with Smooth Fade In/Out) ──
          Always mounted (see the Three.js setup effect) so the crossfade with the video is instant —
          no black gap while a fresh WebGL scene spins up — it's just an opacity transition now. */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${
          phase === "earth" ? "opacity-100" : "opacity-0"
        }`}
      >
          <div
            ref={canvasContainerRef}
            className={`absolute inset-0 z-0 cursor-grab active:cursor-grabbing transition-opacity duration-500 ${
              phase === "earth" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          />

          {!isVideoReady && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-500 pointer-events-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[3px] border-green-500/20" />
                  <div className="absolute inset-0 rounded-full border-[3px] border-t-green-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-white.png" alt="PABT Foundation" className="h-7 w-auto" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-bold tracking-widest text-green-400 uppercase animate-pulse">
                    Loading Cinematic Video...
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {bufferProgress}% Loaded
                  </span>
                </div>
              </div>
            </div>
          )}

          <div
            className={`absolute top-12 sm:top-16 z-20 flex flex-col items-center text-center px-4 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
              phase === "earth" && !isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-green-950/60 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              Planting a Billion Trees & Beyond
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              Orbiting One Goal: <br />
              <span className="bg-gradient-to-r from-green-400 via-green-200 to-green-500 bg-clip-text text-transparent">
                5 Connected Pathways to Sustainability
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Drag Earth to explore &bull; Click Next or Scroll down to enter
            </p>
          </div>
        </div>

      {/* ── Final Checkpoint Scroll Prompt ── */}
      {sequenceComplete && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce pointer-events-none">
          <span className="text-[11px] font-bold tracking-widest text-green-400 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Scroll Down to Explore Website
          </span>
          <ChevronDown className="w-4 h-4 text-green-400" />
        </div>
      )}

      {/* ── Cinematic Progress Bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          opacity: phase === "playing" ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "3px",
            background: "rgba(255,255,255,0.12)",
            overflow: "hidden",
          }}
        >
          <div
            ref={progressFillRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${videoProgress * 100}%`,
              background: "linear-gradient(to right, #16a34a, #06b6d4, #f59e0b)",
              transition: isAnimating ? "none" : "width 0.2s ease-out",
              boxShadow: "0 0 8px rgba(255,255,255,0.3)",
            }}
          />
        </div>
      </div>

      {/* ── Dedicated Navigation Controls Bar ──
          Labels collapse to icon-only below sm: at ~375px wide, five full-text pill buttons plus
          the checkpoint dots would overflow the viewport (the bar sits inside an overflow-hidden
          section, so anything wider than the screen gets clipped rather than scrolling). */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-3 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/80 border border-white/20 backdrop-blur-md shadow-2xl pointer-events-auto max-w-[calc(100vw-1.5rem)]">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPreviousSection}
          disabled={currentSection === 0 || isAnimating}
          aria-label="Previous checkpoint"
          className={`flex items-center gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            currentSection === 0
              ? "opacity-30 cursor-not-allowed text-gray-500"
              : "opacity-100 text-white bg-white/10 hover:bg-white/20 active:scale-95 cursor-pointer"
          }`}
        >
          <ChevronUp className="w-3.5 h-3.5 -rotate-90" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Checkpoint Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-1 sm:px-2 border-x border-white/15">
          {CHECKPOINTS.map((_, idx) => {
            const isPast = currentSection > idx;
            const isCurrent = currentSection === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (isAnimating) return;
                  if (idx > currentSection) playForwardTo(idx);
                  else if (idx < currentSection) playReverseTo(idx);
                }}
                disabled={isAnimating}
                aria-label={`Go to section ${idx}`}
                className="group relative flex items-center justify-center p-1 cursor-pointer"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "w-6 h-2 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                      : isPast
                      ? "w-2 h-2 bg-green-600/70"
                      : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={goToNextSection}
          disabled={currentSection === CHECKPOINTS.length - 1 || isAnimating}
          aria-label="Next checkpoint"
          className={`flex items-center gap-1.5 px-2 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            currentSection === CHECKPOINTS.length - 1
              ? "opacity-30 cursor-not-allowed text-gray-500"
              : "opacity-100 text-white bg-green-600 hover:bg-green-500 active:scale-95 shadow-md shadow-green-600/30 cursor-pointer"
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
        </button>

        {/* Restart Button */}
        <button
          type="button"
          onClick={resetLandingExperience}
          aria-label="Restart landing experience"
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all duration-300 cursor-pointer active:scale-95 sm:ml-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Restart</span>
        </button>

        {/* Skip Button */}
        <button
          type="button"
          onClick={skipIntro}
          aria-label="Skip intro and scroll to About section"
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all duration-300 cursor-pointer active:scale-95"
        >
          <SkipForward className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Skip</span>
        </button>
      </div>

      <style>{`
        @keyframes livePulse {
          0%   { box-shadow: 0 0 0 0   rgba(74,222,128,0.55); }
          60%  { box-shadow: 0 0 0 7px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0   rgba(74,222,128,0); }
        }
      `}</style>
    </section>
  );
}
