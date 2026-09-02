"use client";

import { useState } from "react";
import { Mail, Phone, ExternalLink, Building2, Clock, ArrowLeft } from "lucide-react";
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

  const [status, setStatus] = useState<"idle" | "in-progress">("idle");

  const pathways = ["Nature", "Circularity", "Clean Energy", "Responsible Business (ESG)", "Community"];
  const interests = ["CSR Partnership", "Volunteer Opportunities", "Government Collaboration", "School Eco-Club Program", "Other Inquiry"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("in-progress");
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
          {status === "in-progress" ? (
            <div className="text-center py-10 sm:py-12 space-y-6">
              {/* In Progress Icon */}
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400 shadow-lg shadow-amber-500/10">
                <Clock className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-3 max-w-md mx-auto">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold uppercase tracking-wider border border-amber-300 dark:border-amber-700/50">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  Work In Progress
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Submission Is In Progress
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Online collaboration requests are currently in progress. Please do it later or try again after some time.
                </p>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700/60 text-xs text-gray-600 dark:text-gray-300 text-left space-y-2">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    Need to connect with us immediately?
                  </p>
                  <p>
                    Please reach out directly to our partnerships team via email or phone:
                  </p>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <a
                      href="mailto:trees@pabt.in"
                      className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 font-bold hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      trees@pabt.in
                    </a>
                    <a
                      href="tel:+919500666668"
                      className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 font-bold hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      +91 95006 66668
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rakesh Kumar"
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Details of your desired program, location, or goals..."
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-green-500/10 cursor-pointer"
              >
                SUBMIT COLLABORATION REQUEST
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
