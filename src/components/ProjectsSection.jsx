import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Ultra-High Vacuum (UHV) System",
    description: "Led the construction of a UHV chamber for mass spectrometry experiments, including AFM-IR instrumentation setup and SEM calibration.",
    image: "/projects/project1.jpeg",
    tags: ["UHV", "AFM-IR", "SEM", "Micro-controllers", "Data Acquisition"],
    githubUrl: null, // No GitHub link
  },
  {
    id: 2,
    title: "Automated Algae Growth System",
    description: "Developed a fully automated algae growth system with PID-controlled heating and sensor integration for real-time monitoring of pH and oxygen.",
    image: "/projects/project2.jpg",
    tags: ["PID Control", "Sensors", "Automation", "Spectrometry", "Hardware"],
    githubUrl: null, // No GitHub link
  },
  {
    id: 3,
    title: "Dating Latin Text",
    description: "Applied advanced deep learning methods to date ancient Latin texts, contributing to the computational understanding of historical language patterns.",
    image: "/projects/project3.png",
    tags: ["Deep Learning", "NLP", "Python", "Research"],
    githubUrl: "https://github.com/Sittch/DLT2",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my work across physics, computer science, and data engineering. 
          From building vacuum chambers to training deep learning models.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border/50 card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-secondary/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold border rounded-full bg-primary/5 text-primary border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center mt-auto pt-4 border-t border-border/50">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground italic">Hardware/Proprietary</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};