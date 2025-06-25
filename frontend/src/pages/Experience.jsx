import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Experience() {
  const evernestRoles = [
    {
      title: "Director of Underwriting",
      date: "Sept 2023 – Present",
      bullets: [
        "Scaled the team from 2 to 8 underwriters while improving overall performance.",
        "Cut total underwriting cycle time from 100+ hours to under 48 hours.",
        "Increased application approval rates through strategic policy revisions.",
        "Collaborated with C-suite to identify gaps and implement targeted improvements."
      ]
    },
    {
      title: "Data Analyst",
      date: "May 2024 – May 2025",
      bullets: [
        "Published a centralized underwriting data table using BigQuery and GitHub.",
        "Built a full underwriting analytics dashboard in Metabase.",
        "Surfaced insights that led to higher application approval rates.",
        "Overhauled leasing KPIs to reflect updated performance goals.",
        "Identified trends that helped stabilize and improve leasing ops."
      ]
    },
    {
      title: "Property Portfolio Analyst",
      date: "Sept 2022 – Aug 2023",
      bullets: [
        "Managed $300K in renovation budgets and timelines.",
        "Conducted rent and occupancy analysis across portfolios.",
        "Built investor-ready reports for 250+ rental units."
      ]
    },
    {
      title: "Application Underwriter",
      date: "Jul 2021 – Aug 2022",
      bullets: [
        "Led training for 8+ underwriters over time.",
        "Built metrics to track loan outcomes and team efficiency.",
        "Improved compliance with SOP-driven workflows."
      ]
    }
  ];

  const nissanRole = {
    title: "Engineering Intern",
    date: "May 2019 - Aug 2019",
    bullets: [
      "Collaborated with senior engineers to troubleshoot and optimize robotic systems.",
      "Supported automation improvements across production lines using plant robotics.",
      "Assisted in testing and calibrating robotic arms for precision in manufacturing."
    ]
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white px-6 py-4 flex flex-col">
      
      {/* === Top Navigation Bar === */}
      <header className="flex justify-between items-center max-w-6xl mx-auto w-full pt-6 pb-4">
        <nav className="flex-1 flex justify-center space-x-6 text-sm font-medium">
          {["Home", "Experience", "Projects"].map((label) => (
            <Link
              key={label}
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

      {/* === Experience Section === */}
      <div className="flex-grow flex justify-center items-start pt-10">
        <div className="max-w-4xl w-full pb-75">

          {/* === Evernest Section === */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Professional Experience</h2>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="/evernest-logo.png"
              alt="Evernest Logo"
              className="w-10 h-10 rounded-full border border-zinc-600 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">Evernest Property Management</h3>
              <p className="text-sm text-zinc-400">Murfreesboro, TN</p>
            </div>
          </div>

          <div className="relative border-l-2 border-zinc-700 pl-6 space-y-12">
            {evernestRoles.map((role, index) => (
              <div key={index} className="pl-2 relative">
                <p className="text-sm text-zinc-500">{role.date}</p>
                <h4 className="text-lg font-semibold mt-1">{role.title}</h4>
                <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* === Nissan Section === */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/nissan-logo.png"
                alt="Nissan Logo"
                className="w-10 h-10 rounded-full border border-zinc-600 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Nissan Motor Corporation</h3>
                <p className="text-sm text-zinc-400">Smyrna, TN</p>
              </div>
            </div>

            <div className="relative border-l-2 border-zinc-700 pl-6">
              <div className="pl-2 relative">
                <p className="text-sm text-zinc-500">{nissanRole.date}</p>
                <h4 className="text-lg font-semibold mt-1">{nissanRole.title}</h4>
                <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
                  {nissanRole.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
