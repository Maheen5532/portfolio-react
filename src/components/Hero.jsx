import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import scrollDownIcon from "../assets/scroll-down.svg";
import mainImg from "../assets/Main-img.jpg"; // Corrected import

const Hero = () => {
    return (
        <main className="relative bg-[#9B59B6] min-h-[120vh] w-full text-white flex flex-col justify-center items-center px-6">
            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center justify-around w-full mt-10 lg:mt-0">
                {/* Left Section */}
                <div className="text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-semibold"style={{ fontFamily: "'Rock Salt', cursive" }}
                    >
                        Hi, I'm Maheen..
                    </motion.h1>

                    <TypeAnimation
                        sequence={[
                            1000, "A Full-Stack Developer.",
                            1500, "A Frontend Developer.",
                            1500, "A problem solver.",
                            1500, "An innovative thinker.",
                            1500, "A.... cool gurl?",
                        ]}
                        speed={50}
                        wrapper="h2"
                        className="mt-7 text-3xl text-white" style={{ fontFamily: "'Tektur', sans-serif" }}
                        repeat={Infinity}
                    />
                </div>

                {/* Right Section - Illustration */}
                <motion.img
                    src={mainImg} // ✅ Corrected variable usage
                    alt="Illustration"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-[24rem] h-[24rem] rounded-full object-cover"

                />
            </div>

            {/* Social Icons */}
<div className="fixed left-6 bottom-50 flex flex-col space-y-4">
    <a href="https://www.linkedin.com/in/maheen-49431b311/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white hover:text-gray-300 text-3xl cursor-pointer transition" />
    </a>
    <a href="https://github.com/Maheen5532" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white hover:text-gray-300 text-3xl cursor-pointer transition" />
    </a>
</div>


            {/* Scroll Down Indicator */}
            <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 flex items-center text-lg text-gray-400 hover:text-white transition"
            >
                Scroll down
                <img src={scrollDownIcon} alt="Scroll Down" className="w-6 ml-2" />
            </motion.a>

            {/* Wavy Transition */}
            <div className="absolute bottom-0 w-full">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#F8F8FC"
                        d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,170.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    />
                </svg>
            </div>
        </main>
    );
};

export default Hero;
