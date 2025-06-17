import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Experience() {
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

      {/* === Experience Content === */}
      <div className="flex-grow flex justify-center items-start pt-10">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Professional Experience</h2>

          {/* === Evernest Company Heading === */}
          <div className="mb-4">
            <h3 className="text-xl font-bold">Evernest Property Management</h3>
            <p className="text-sm text-zinc-400">Birmingham, AL</p>
          </div>

          {/* === Timeline Container === */}
          <div className="relative border-l-2 border-zinc-700 pl-6 space-y-12">

            {/* === Reusable Position Block === */}
            {[
              {
                title: "Head of Underwriting & Data Analyst",
                date: "Sept 2023 – Present",
                bullets: [
                  "Reduced underwriting cycle time by over 50%, accelerating revenue realization.",
                  "Built a central data warehouse in BigQuery to unify multi-source datasets.",
                  "Designed Metabase dashboards to surface KPIs and improve exec visibility.",
                  "Partnered with leadership to influence strategic planning with analytics."
                ]
              },
              {
                title: "Underwriting Manager",
                date: "Nov 2021 – Sept 2023",
                bullets: [
                  "Managed risk for 7,500+ rental applications annually across 29 markets.",
                  "Led and trained a team of 10 underwriters with performance benchmarks.",
                  "Built AppFolio automations and rule-based decision systems.",
                  "Created SOPs and internal documentation to improve consistency."
                ]
              },
              {
                title: "Property Portfolio Analyst",
                date: "Feb 2021 – Nov 2021",
                bullets: [
                  "Analyzed occupancy, churn, and rent trends across 8,000+ units.",
                  "Produced regional dashboards for leadership and operations teams.",
                  "Supported revenue optimization with portfolio-wide reporting tools."
                ]
              }
            ].map((role, i) => (
              <div
                key={i}
                className="relative before:content-[''] before:absolute before:left-[-1.1rem] before:top-3 before:w-6 before:h-0.5 before:bg-white"
              >
                <p className="text-sm text-zinc-500">{role.date}</p>
                <h4 className="text-lg font-semibold mt-1">{role.title}</h4>
                <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                  {role.bullets.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
}
