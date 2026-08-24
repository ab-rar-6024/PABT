"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    pathway: "Nature",
    interest: "CSR Partnership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const pathways = ["Nature", "Circularity", "Clean Energy", "Responsible Business (ESG)", "Community"];
  const interests = ["CSR Partnership", "Volunteer Opportunities", "Government Collaboration", "School Eco-Club Program", "Other Inquiry"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    // Simulate API request
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

  return (
    <div className="relative pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          Partner With PABT
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Request a Collaboration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Are you a corporation looking to structure a CSR project, a municipal officer coordinating water restoration, or a school principal aiming to set up an eco-club? Get in touch with us.
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
              className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider rounded-xl transition-colors"
            >
              SEND ANOTHER MESSAGE
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
                  placeholder="e.g. Rakesh Kumar"
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
                  placeholder="e.g. rakesh@company.com"
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="org" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pathway" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Pathway of Interest
                </label>
                <select
                  id="pathway"
                  name="pathway"
                  value={formData.pathway}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white outline-none transition-all"
                >
                  {pathways.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                  Domain of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white outline-none transition-all"
                >
                  {interests.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                Your Message <span className="text-green-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Details of your desired program, location, or goals..."
                className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-green-500/10 disabled:opacity-50"
            >
              {status === "submitting" ? "SUBMITTING..." : "SUBMIT COLLABORATION REQUEST"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
