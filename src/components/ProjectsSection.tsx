import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, and payment integration using Stripe. Includes admin dashboard for product management.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time social media analytics dashboard with data visualization, user authentication, and scheduled posting features.",
    image: "📊",
    technologies: ["Next.js", "Express", "PostgreSQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop kanban boards, real-time updates, and team collaboration features.",
    image: "📋",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation platform using OpenAI API for blog posts, social media content, and marketing copy.",
    image: "🤖",
    technologies: ["React", "Express", "OpenAI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent dashboard.",
    image: "🏠",
    technologies: ["Next.js", "Node.js", "MongoDB", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Personal fitness companion with workout tracking, meal planning, progress charts, and social challenges.",
    image: "💪",
    technologies: ["React", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "React", "Next.js", "Node.js", "MongoDB"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.technologies.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
