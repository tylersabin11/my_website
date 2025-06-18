import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white px-6 py-4 flex flex-col">
      
      {/* === Top Navigation Bar === */}
      <header className="flex justify-between items-center max-w-6xl mx-auto w-full pt-6 pb-4">
        <nav className="flex-1 flex justify-center space-x-6 text-sm font-medium">
          {["Home", "Experience", "Projects"].map((label, i) => (
            <Link
              key={i}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="border border-white text-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4 text-lg">
          <a href="https://github.com/tylersabin11" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tyler-sabin-450012212" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
            <FaLinkedin />
          </a>
          <a href="mailto:tyler.sabin64@gmail.com" className="hover:text-zinc-400">
            <FaEnvelope />
          </a>
        </div>
      </header>

      {/* === Projects Content === */}
      <div className="flex-grow flex justify-center items-start pt-35">
        <div className="max-w-4xl w-full space-y-12">
          
          {/* === Professional Projects === */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-center">Professional Projects</h3>
            <div className="space-y-6">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-sm">
                <h4 className="text-lg font-bold text-center">Underwriting Department Metrics</h4>
                <p className="text-sm text-zinc-400 text-center">SQL • Metabase • BigQuery • GitHub</p>
                <p className="mt-2 text-zinc-300 text-center">
                  Surfaced department-level analytics that led to a new SLA of 35 hours for cycle time, introduced KPI ownership per underwriter, stabilized approval rates to 50%, and shaped policy based on denial/cancellation trends.
                </p>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-sm">
                <h4 className="text-lg font-bold text-center">Leasing Funnel Performance Dashboard</h4>
                <p className="text-sm text-zinc-400 text-center">SQL • Metabase • BigQuery • GitHub</p>
                <p className="mt-2 text-zinc-300 text-center">
                  Created a department-level dashboard to track leasing agent productivity, response times, and 
                  conversion rates. Improved executive visibility and led to a 23% improvement in pipeline conversion.
                </p>
              </div>
            </div>
          </section>

          {/* === Personal Projects === */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-center">Personal Projects</h3>
            <div className="space-y-6">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-sm">
                <h4 className="text-lg font-bold text-center">ClipFetch.io</h4>
                <p className="text-sm text-zinc-400 text-center">React • Node.js • MongoDB • Stripe • Render • Vercel</p>
                <p className="mt-2 text-zinc-300 text-center">
                  Full-stack tool for downloading videos from YouTube, TikTok, and Instagram. 
                  Supports authentication, tiered plans, and multiple video quality options.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
