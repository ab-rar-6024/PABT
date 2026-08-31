"use client";

import { useState } from "react";
import CustomSelect from "@/components/CustomSelect";

export default function ShareStoryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    pathway: "Nature",
    role: "Volunteer",
    content: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const pathways = ["Nature", "Circularity", "Clean Energy", "Responsible Business (ESG)", "Community"];
  const roles = ["Volunteer", "Farmer", "Student", "Teacher", "Enterprise Representative", "Other Citizen"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.content) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  return (
    <div className="relative pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 overflow-hidden">
      {/* Faint background watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-16 left-1/2 -translate-x-1/2 text-[22vw] sm:text-[16vw] font-black tracking-tight text-gray-900/[0.04] dark:text-white/[0.09] whitespace-nowrap -z-10"
      >
        VOICES
      </span>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "var(--foreground)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          Voices of the Movement
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Share Your PABT Story
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Are you a farmer who witnessed lake rejuvenation, a volunteer planting Miyawaki trees, or a student organizing a school sorting hub? Share your impact testimony and images.
        </p>
      </div>

      <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl relative">
        {status === "success" ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-950 border border-green-500 rounded-full flex items-center justify-center mx-auto text-green-700 dark:text-green-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Story Received!</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                Thank you for contributing, <span className="text-gray-900 dark:text-white font-bold">{formData.name}</span>! Our editorial team will review your story &ldquo;<span className="text-gray-900 dark:text-white">{formData.title}</span>&rdquo;. Once verified, it will be published in our annual disclosures and the homepage Voices section.
              </p>
            </div>
            <button
              onClick={() => {
                setStatus("idle");
                setSelectedFile(null);
                setFormData({ name: "", email: "", title: "", pathway: "Nature", role: "Volunteer", content: "" });
              }}
              className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider rounded-xl transition-colors"
            >
              SUBMIT ANOTHER STORY
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Full Name <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Meena Devi"
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Email Address <span className="text-green-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. meena@gmail.com"
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomSelect
                label="Related Pathway"
                options={pathways}
                value={formData.pathway}
                onChange={(val) => setFormData((prev) => ({ ...prev, pathway: val }))}
              />
              <CustomSelect
                label="Your Role"
                options={roles}
                value={formData.role}
                onChange={(val) => setFormData((prev) => ({ ...prev, role: val }))}
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                Story Title <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g. Rejuvenating local wells in Rajasthan"
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                Your Testimony / Story Content <span className="text-green-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Write your story in detail. How did the PABT project impact your life, community, or school?"
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all resize-none"
              />
            </div>

            {/* Photo Upload styling */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                Upload Headshot or Project Photo (Optional, max 6MB)
              </label>
              <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-200 dark:border-gray-800 border-dashed rounded-xl hover:border-green-500/50 transition-colors cursor-pointer relative bg-gray-50 dark:bg-gray-950">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <span className="relative cursor-pointer bg-transparent rounded-md font-semibold text-green-700 dark:text-green-400 hover:text-green-300">
                      Upload a file
                      <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} className="sr-only" accept="image/*" />
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG up to 6MB</p>
                  {selectedFile && (
                    <p className="text-sm text-green-700 dark:text-green-400 font-bold mt-2">
                      Selected: {selectedFile}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-green-500/10 disabled:opacity-50"
            >
              {status === "submitting" ? "SUBMITTING..." : "SUBMIT YOUR STORY"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
