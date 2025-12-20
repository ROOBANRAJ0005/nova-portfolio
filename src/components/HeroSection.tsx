import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import Hero3D from "./Hero3D";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary font-mono text-lg mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-foreground ml-[-3px]">ROOBANRAJ </span>
            {/* <span className="text-primary text-glow">Developer</span> */}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            MERN Stack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-muted-foreground text-lg max-w-xl mb-10"
          >
            Crafting seamless web experiences with MongoDB, Express, React, and Node.js. 
            Passionate about building scalable applications and elegant solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-glow text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
               href="/ResumeQr.pdf"
               download
               className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full max-w-lg h-[400px] lg:h-[500px]"
        >
          <Hero3D />
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
