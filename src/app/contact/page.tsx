"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Sparkles, Building2 } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    pathway: "Nature",
    interest: "CSR Partnership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "pending" | "success" | "error">("idle");

  const pathways = ["Nature", "Circularity", "Clean Energy", "Responsible Business (ESG)", "Community"];
  const interests = ["CSR Partnership", "Volunteer Opportunities", "Government Collaboration", "School Eco-Club Program", "Other Inquiry"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("pending");
      setTimeout(() => {
        setStatus("success");
      }, 3500);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=No.60,+1st+Floor,+Joseph+Centre,+Officers+Colony,+3rd+St,+Metha+Nagar,+Aminjikarai,+Chennai+-+600029";

  return (
    <div className="relative pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          PARTNER WITH PABT
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Request a Collaboration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Are you a corporation looking to structure a CSR project, a municipal officer coordinating water restoration, or a school principal aiming to set up an eco-club? Get in touch with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Form Container */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl relative bg-white/70 dark:bg-zinc-900/70">
          {status === "pending" ? (
            <div className="text-center py-12 space-y-6">
              {/* Animated clock / hourglass icon */}
              <div className="relative w-16 h-16 mx-auto">
                <div className="w-16 h-16 rounded-full border-4 border-amber-200 dark:border-amber-900 border-t-amber-500 dark:border-t-amber-400 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-700/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  In Progress
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white pt-1">We&apos;re Processing Your Request</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Your collaboration request is being queued. This may take a moment — feel free to come back later or check your inbox shortly.
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ) : status === "success" ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-950 border border-green-500 rounded-full flex items-center justify-center mx-auto text-green-700 dark:text-green-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Submitted!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-gray-900 dark:text-white font-bold">{formData.name}</span>. A member of our partnership team will contact you at <span className="text-gray-900 dark:text-white font-bold">{formData.email}</span> within 24 hours.
                </p>
              </div>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", org: "", pathway: "Nature", interest: "CSR Partnership", message: "" });
                }}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Full Name <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rakesh Kumar"
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Email Address <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. rakesh@company.com"
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="org" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Organisation / Institution
                </label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  value={formData.org}
                  onChange={handleChange}
                  placeholder="e.g. Tata Group or Green Public School"
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CustomSelect
                  label="Pathway of Interest"
                  options={pathways}
                  value={formData.pathway}
                  onChange={(val) => setFormData((prev) => ({ ...prev, pathway: val }))}
                />
                <CustomSelect
                  label="Domain of Interest"
                  options={interests}
                  value={formData.interest}
                  onChange={(val) => setFormData((prev) => ({ ...prev, interest: val }))}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Your Message <span className="text-green-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Details of your desired program, location, or goals..."
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-green-500/10 disabled:opacity-50 cursor-pointer"
              >
                {status === "submitting" ? "SUBMITTING..." : "SUBMIT COLLABORATION REQUEST"}
              </button>
            </form>
          )}
        </div>

        {/* Map & Office Address Container */}
        <div className="lg:col-span-6 space-y-6">
          {/* Head Office Address Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200 dark:border-gray-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                <Building2 className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-green-600 dark:text-green-400 block">
                  PABT FOUNDATION HEAD OFFICE
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Chennai Headquarters</h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
              No.60, 1st Floor, Joseph Centre, Officers Colony, 3rd St, Metha Nagar, Aminjikarai, Chennai – 600029.
            </p>

            <div className="pt-2 border-t border-gray-200/80 dark:border-gray-800/80 flex flex-wrap gap-4 text-xs font-medium">
              <a href="mailto:trees@pabt.in" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-mono">
                <Mail className="w-3.5 h-3.5 text-green-500" />
                <span>trees@pabt.in</span>
              </a>
              <a href="tel:+919500666668" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-mono">
                <Phone className="w-3.5 h-3.5 text-green-500" />
                <span>+91 95006 66668</span>
              </a>
            </div>

            <div className="pt-1">
              <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Regional Offices
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Bangalore &bull; Hyderabad &bull; Karur &bull; Trichy
              </p>
            </div>
          </div>

          {/* Embedded Google Map Frame with Floating "Open in Maps ↗" Button */}
          <div className="relative w-full h-[340px] sm:h-[380px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-gray-900 group">
            {/* Floating "Open in Maps" Overlay Button (Top Left Corner) */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-blue-600 font-bold text-xs sm:text-sm shadow-md hover:bg-gray-50 border border-gray-200 transition-all hover:scale-105"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>

            <iframe
              title="PABT Head Office Map Location"
              src="https://maps.google.com/maps?q=No.60%201st%20Floor%20Joseph%20Centre%20Officers%20Colony%203rd%20St%20Metha%20Nagar%20Aminjikarai%20Chennai%20600029&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
