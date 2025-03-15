import React from "react";
import { motion } from "framer-motion";
import { stackList } from "../components/Data";
import mainImg from "../assets/Main-img.jpg";

const About = () => {
    return (
        <section id="about" className="relative bg-[#1A1A2E] text-white  py-20"  style={{ fontFamily: "'Tektur', sans-serif" }}>
            {/* SVG Wave - Top */}
            <div className="absolute top-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full" fill="currentColor">
                    <path
                        fill="#12122B"
                        d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    />
                </svg>
            </div>

            <div className="relative container  mx-auto px-6 text-center">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold text-purple-400 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>

                {/* About Content */}
                <div className="flex flex-col md:flex-row items-center shadow-2xl shadow-white bg-[#23233D] rounded-xl shadow-lg overflow-hidden p-8">
                    {/* Left - Image */}
                    <motion.div
                        className="md:w-1/3 bg-[#2C2C4A] flex justify-center items-center p-6 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img src={mainImg} alt="Profile" className="rounded-lg shadow-md shadow-white max-w-full h-auto" />
                    </motion.div>

                    {/* Right - Text Content */}
                    <motion.div
                        className="md:w-2/3 p-8"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            Hi, I'm{" "}
                            <strong className="text-white text-[1.5rem]">Maheen</strong>, a{" "}
                            <strong className="text-white text-[1.5rem]">Front-End Developer</strong>{" "}
                            specializing in <span className="text-purple-400 font-semibold">React.js</span>,{" "}
                            <span className="text-purple-400 font-semibold">Next.js</span>, and{" "}
                            <span className="text-purple-400 font-semibold">Tailwind CSS</span>. I craft
                            high-performance, responsive web applications with seamless UI/UX.
                            Passionate about clean code and modern web technologies, I’m constantly innovating
                            to build scalable, user-friendly digital experiences. Currently exploring{" "}
                            <span className="text-purple-300 font-semibold">AI-driven web development</span>,
                            I thrive on solving complex challenges and pushing the boundaries of front-end
                            development.
                        </p>

                        {/* Tech Stack */}
                        <h3 className="text-xl font-semibold text-purple-400 mb-3">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {stackList.map((stack, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#2C2C4A] text-white text-sm px-3 py-2 rounded-full shadow-md flex items-center gap-2 border border-purple-500"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <img src={stack.img} alt={stack.name} className="w-6 h-6 rounded" />
                                    <span>{stack.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* SVG Wave - Bottom */}
            <div className="absolute bottom-0 w-full">
                <svg viewBox="0 0 1440 190" className="w-full" fill="currentColor">
                    <path
                        fill="#12122B"
                        d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default About;
