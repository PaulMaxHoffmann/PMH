// CoursesSection.jsx
import { useState } from "react";
import { cn } from "@/lib/utils";
// Importing icons from lucide-react
import { Zap, Database, Code, Cpu, Download, FileText, Calendar } from "lucide-react"; 

// Helper function to assign an icon based on the course name/subject
const getCourseIcon = (courseName) => {
  const name = courseName.toLowerCase();
  if (name.includes("ai") || name.includes("cloud")) {
    return <Zap size={20} />; // For AI and Cloud Computing
  }
  if (name.includes("data science") || name.includes("data")) {
    return <Database size={20} />; // For Data Science courses
  }
  if (name.includes("web") || name.includes("mobile") || name.includes("computer science")) {
    return <Code size={20} />; // For Web, Mobile, and general CS courses
  }
  if (name.includes("assembly") || name.includes("circuit")) {
    return <Cpu size={20} />; // For Assembly and Digital Circuits
  }
  return <Calendar size={20} />; // Default icon
};

// Define the course data structure with your specific courses
const courses = [
  // Current Courses (Spring 2026)
  {
    name: "AI 101 Critical Thinking and Artificial Intelligence",
    year: "Spring 2026",
    category: "current",
    folder: "AI101",
    resources: [
      { name: "Syllabus", file: "ai_101_hoffmann_01_spring_2026.pdf" }
    ],
  },
  {
    name: "CS 446 Cloud Computing",
    year: "Spring 2026",
    category: "current",
    folder: "CS446",
    resources: [
      { name: "Syllabus", file: "cs_446_hoffmann_01_spring_2026.pdf" }
    ],
  },
  {
    name: "CS 322 Data Science in practice",
    year: "Spring 2026",
    category: "current",
    folder: "CS322",
    resources: [
      { name: "Syllabus", file: "cs_322_hoffmann_01_spring_2026.pdf" }
    ],
  },
  {
    name: "CIS 444 - Web Programming",
    year: "Spring 2026",
    category: "current",
    folder: "CIS444",
    resources: [
      { name: "Syllabus", file: "cis_444_hoffmann_spring_2026.pdf" }
    ],
  },

  // Past Courses (Fall 2025)
  {
    name: "CS 446 Cloud Computing",
    year: "Fall 2025",
    category: "past",
    resources: [
    ],
  },
  {
    name: "CS 320 Introduction to Data Science",
    year: "Fall 2025",
    category: "past",
    resources: [
    ],
  },
  {
    name: "CS 110 Fundations of Data Science",
    year: "Fall 2025",
    category: "past",
    resources: [
    ],
  },
  {
    name: "CS 231 Assembly Language and Digital Circuits",
    year: "Fall 2025",
    category: "past",
    resources: [
    ],
  },
  {
    name: "CS 481 Introduction to Mobile Programming",
    year: "Fall 2025",
    category: "past",
    resources: [
    ],
  },
  
  // Past Courses (Summer 2025)
  {
    name: "CS 211 Computer Science 2",
    year: "Summer 2025",
    category: "past",
    resources: [
    ],
  },
  
  // Past Courses (Spring 2025)
  {
    name: "CS 111 Computer Science 1",
    year: "Spring 2025",
    category: "past",
    resources: [
    ],
  },
];

const categories = ["all", "current", "past"];

// Function to handle the actual file opening/download
const handleDownload = (fileName, courseFolder) => {
  // Use the course-specific folder instead of hardcoding cs111
  const filePath = `./Classes/${courseFolder}/${fileName}`; 
  window.open(filePath, '_blank'); 
};

export const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = courses.filter(
    (course) => activeCategory === "all" || course.category === activeCategory
  );
  
  return (
    <section id="courses" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Courses</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category} courses
            </button>
          ))}
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {filteredCourses.map((course, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xl border border-border/50"
            >
              {/* Course Title (Static DIV) */}
              <div className="flex items-center space-x-3 mb-4">
                {getCourseIcon(course.name)} {/* Dynamic Icon */}
                <h3 className="font-bold text-xl text-foreground">
                  {course.name} <span className="text-muted-foreground ml-2">({course.year})</span>
                </h3>
              </div>

              {/* Resources Buttons */}
              {course.resources.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4 ml-8 border-l-2 border-primary/50 pl-4">
                  {course.resources.map((resource, resKey) => (
                    <button
                      key={resKey}
                      onClick={() => handleDownload(resource.file, course.folder)}
                      className="flex items-center space-x-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
                    >
                      {resource.name.toLowerCase().includes("syllabus") || resource.name.toLowerCase().includes("notes") ? (
                        <FileText size={16} />
                      ) : (
                        <Download size={16} />
                      )}
                      <span>{resource.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};