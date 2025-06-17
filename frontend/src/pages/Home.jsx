import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white px-6 py-4 flex flex-col">
      
      {/* === Centered Top Navigation Bar === */}
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

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4 text-lg">
          <a
            href="https://github.com/tylersabin11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tyler-sabin-450012212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tyler.sabin64@gmail.com"
            className="hover:text-zinc-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </header>

      {/* === Main Content Centered Vertically === */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* === Left: Image === */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/headshot.png"
              alt="Tyler Sabin"
              className="rounded-xl w-[26rem] h-[26rem] object-cover shadow-lg border border-zinc-800"
            />
          </div>

          {/* === Right: Text Content === */}
          <div className="w-full md:w-2/3 space-y-8 flex flex-col justify-center md:items-start text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                <span className="block text-neutral-400">Tyler Sabin</span>
                <span className="text-white">Data Professional</span>
              </h1>

              <div className="text-zinc-400 text-lg leading-relaxed max-w-2xl mt-6 space-y-6">
                <p>
                  I’m a data professional with a strong foundation in analytics, dashboarding,
                  and data infrastructure. I’ve worked across teams to build tools that make
                  data more accessible, visual, and actionable.
                </p>
                <p>
                  My focus is on helping organizations make smarter decisions through well-structured systems,
                  meaningful metrics, and clear communication. In addition to technical skills rooted in data and analytics,
                  I bring strong cross-functional leadership experience — guiding teams, influencing stakeholders,
                  and translating insights into strategic action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
