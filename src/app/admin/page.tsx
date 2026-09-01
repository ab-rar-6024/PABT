"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TreePine,
  Users,
  BarChart3,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Search,
  Download,
  Plus,
  ArrowUpRight,
  Droplets,
  Zap,
  ShieldCheck,
  Building2,
  UserCheck,
  Filter,
} from "lucide-react";

// Mock data for drives
const DRIVE_DATA = [
  {
    id: "DRV-2026-01",
    name: "Chengalpattu Miyawaki Forest Drive #12",
    location: "Chengalpattu, Tamil Nadu",
    date: "Sep 06, 2026",
    targetSaplings: 5000,
    plantedSaplings: 4200,
    volunteers: 185,
    status: "Upcoming",
    lead: "Siva C",
  },
  {
    id: "DRV-2026-02",
    name: "Madhurantagam Wetland & Native Saplings",
    location: "Madhurantagam",
    date: "Sep 14, 2026",
    targetSaplings: 3000,
    plantedSaplings: 0,
    volunteers: 92,
    status: "Upcoming",
    lead: "Priya R",
  },
  {
    id: "DRV-2026-03",
    name: "ECR Coastal Shelterbelt Plantation",
    location: "Kovalam Beach Road",
    date: "Aug 28, 2026",
    targetSaplings: 2500,
    plantedSaplings: 2500,
    volunteers: 210,
    status: "Completed",
    lead: "Karthik M",
  },
  {
    id: "DRV-2026-04",
    name: "School Eco-Club Urban Micro-Forest",
    location: "Velachery, Chennai",
    date: "Aug 15, 2026",
    targetSaplings: 1200,
    plantedSaplings: 1200,
    volunteers: 140,
    status: "Completed",
    lead: "Anita S",
  },
];

// Mock data for applications
const APPLICATIONS_DATA = [
  {
    id: "APP-901",
    name: "Aravind Kumar",
    role: "On-Ground Volunteer",
    type: "Individual",
    date: "Sep 01, 2026",
    status: "Approved",
  },
  {
    id: "APP-902",
    name: "Sneha Sundaram",
    role: "Ecological Development Intern",
    type: "Internship",
    date: "Aug 31, 2026",
    status: "Under Review",
  },
  {
    id: "APP-903",
    name: "Tech Mahindra ESG Team",
    role: "Corporate Sponsorship",
    type: "CSR Partner",
    date: "Aug 30, 2026",
    status: "Approved",
  },
  {
    id: "APP-904",
    name: "Rohan Varma",
    role: "Tree Tagging Specialist",
    type: "Volunteer",
    date: "Aug 29, 2026",
    status: "Pending",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "drives" | "applications">("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredDrives = DRIVE_DATA.filter((drive) => {
    const matchesSearch =
      drive.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || drive.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-[#0B0F0B] text-gray-900 dark:text-gray-100 px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                PABT Operational Control Center
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Executive Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Live tracking of afforestation drives, volunteer mobilization, and ESG field campaigns.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert("ESG Carbon Audit Report PDF exported successfully!")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-bold transition-all border border-gray-200 dark:border-gray-700"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>Export Report</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
            >
              <span>View Main Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Core Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Total Trees Planted
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <TreePine className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">1,248,500</div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>89.4% Survival Rate</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Active Volunteers
              </span>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">15,420</div>
            <div className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-medium">
              <UserCheck className="w-3.5 h-3.5" />
              <span>+428 this month</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Water Harvested
              </span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                <Droplets className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">450,000 L</div>
            <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>18 Miyawaki Ponds</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Clean Energy Offset
              </span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">120 kW</div>
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>Ladakh & TN Micro-grids</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "overview"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-white dark:bg-[#10150F] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
            }`}
          >
            Campaign Overview
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("drives")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "drives"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-white dark:bg-[#10150F] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
            }`}
          >
            Field Drives & Reforestation
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("applications")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "applications"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-white dark:bg-[#10150F] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
            }`}
          >
            Recent Applications ({APPLICATIONS_DATA.length})
          </button>
        </div>

        {/* TAB 1: Overview */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    2026 Reforestation Milestones
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Quarterly target progress toward 1.5 Million trees in Tamil Nadu.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Q3 Active
                </span>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Miyawaki Native Forests (Chengalpattu)</span>
                    <span className="text-emerald-600 font-mono font-bold">83% (415k / 500k)</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[83%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700 dark:text-gray-300 font-bold">School Eco-Club Sapling Distribution</span>
                    <span className="text-teal-600 font-mono font-bold">92% (184k / 200k)</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-[92%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-700 dark:text-gray-300 font-bold">Coastal Shelterbelt & Agroforestry</span>
                    <span className="text-cyan-600 font-mono font-bold">67% (201k / 300k)</span>
                  </div>
                  <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[67%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                Quick Administrative Actions
              </h3>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("drives")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-emerald-500/10 border border-gray-200/80 dark:border-gray-800 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-emerald-500">
                        Schedule Plantation Drive
                      </span>
                      <p className="text-[11px] text-gray-500">Add location, headcount & date</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => alert("CSV Export complete!")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-cyan-500/10 border border-gray-200/80 dark:border-gray-800 transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-cyan-500">
                        Export Roster CSV
                      </span>
                      <p className="text-[11px] text-gray-500">Volunteer details & contact list</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Field Drives */}
        {activeTab === "drives" && (
          <div className="space-y-4">
            {/* Search and Filters */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search drive name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                {["All", "Upcoming", "Completed"].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      filterStatus === status
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Drives Table */}
            <div className="overflow-x-auto rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="p-4">Drive Code</th>
                    <th className="p-4">Drive Name</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Target Saplings</th>
                    <th className="p-4">Volunteers</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  {filteredDrives.map((drive) => (
                    <tr key={drive.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all">
                      <td className="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">{drive.id}</td>
                      <td className="p-4 font-bold text-gray-900 dark:text-white">{drive.name}</td>
                      <td className="p-4 flex items-center gap-1 text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{drive.location}</span>
                      </td>
                      <td className="p-4">{drive.date}</td>
                      <td className="p-4 font-mono">{drive.targetSaplings.toLocaleString()}</td>
                      <td className="p-4 font-mono">{drive.volunteers}</td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            drive.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {drive.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Applications */}
        {activeTab === "applications" && (
          <div className="overflow-x-auto rounded-2xl bg-white dark:bg-[#10150F] border border-gray-200 dark:border-gray-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="p-4">App ID</th>
                  <th className="p-4">Applicant Name</th>
                  <th className="p-4">Applied Role</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Submission Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                {APPLICATIONS_DATA.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all">
                    <td className="p-4 font-mono font-bold text-cyan-600 dark:text-cyan-400">{app.id}</td>
                    <td className="p-4 font-bold text-gray-900 dark:text-white">{app.name}</td>
                    <td className="p-4">{app.role}</td>
                    <td className="p-4 font-mono">{app.type}</td>
                    <td className="p-4">{app.date}</td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          app.status === "Approved"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                            : app.status === "Under Review"
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                            : "bg-gray-500/10 text-gray-600 dark:text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
