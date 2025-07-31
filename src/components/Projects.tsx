"use client";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import AnimatedBackground from "./AnimatedBackground";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/dorzhavian/repos");
        const data: Repo[] = await res.json();

        const starred = data.filter(repo => repo.stargazers_count > 0);
        setRepos(starred);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="py-28 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      {/* Medium animation for Projects section */}
      <AnimatedBackground intensity="medium" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-purple-500">
          Projects
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8 rounded"></div>
        <p className="text-lg text-gray-400 mb-10">
          A selection of my GitHub work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <Tilt
                key={repo.id}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={400}
                className="rounded-lg shadow-lg"
              >
                <div className="h-64 bg-gray-800 relative group rounded-lg overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center opacity-100 group-hover:bg-black/50 transition-all duration-500 p-4">
                    <img
                      src={repo.owner.avatar_url}
                      alt={repo.name}
                      className="w-16 h-16 rounded-full mb-3"
                    />
                    <h3 className="text-2xl text-white font-bold mb-2">
                      {repo.name}
                    </h3>
                    <p className="text-gray-300 mb-4 px-2 line-clamp-3">
                      {repo.description || "No description available."}
                    </p>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </Tilt>
            ))
          ) : (
            <p className="text-gray-400">No starred repositories found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
