import React from "react";
import { motion } from "framer-motion";
import { ProjectList } from "../components/Data";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#1A1A2E] text-white pb-32 pt-20"  style={{ fontFamily: "'Tektur', sans-serif" }}>
      {/* SVG Wave at the Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full" fill="currentColor">
          <path
            fill="#12122B"
            d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Section Title */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Projects</h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-12  px-[8rem]">
          {ProjectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row shadow-2xl shadow-white items-center bg-[#23233D] rounded-xl shadow-lg overflow-hidden"
            >
              {/* Left Side - Image */}
              <div className="md:w-2/5 bg-[#2C2C4A]  flex justify-center items-center p-6">
                <img
                  src={project.img}
                  alt={project.name}
                  className="rounded-lg shadow-md max-w-full h-auto shadow-md shadow-white"
                />
              </div>

              {/* Right Side - Content */}
              <div className="md:w-3/5 p-8  ">
                <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                <p className="text-gray-200 mt-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech_stack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#2C2C4A] text-white text-sm px-3 py-1 rounded-full shadow-md border border-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#9B59B6]  text-white rounded-lg hover:bg-[#884A79] transition"
                    >
                      <i className="fab fa-github  mr-2"></i> GitHub
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#9B59B6] text-white rounded-lg hover:bg-[#884A79] transition"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 relative z-10">
          <a
            href="/projects"
            className="px-6 py-3 bg-[#9B59B6] shadow-2xl shadow-white text-white text-lg rounded-lg shadow-lg hover:bg-[#884A79] transition"
          >
            View More Projects
          </a>
        </div>
      </div>

      {/* SVG Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full" fill="currentColor">
          <path
            fill="#12122B"
            d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Projects;
