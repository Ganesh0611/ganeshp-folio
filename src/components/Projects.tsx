import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GoMent: Mentor-Mentee System",
      period: "Feb. 2024 – Jun. 2024",
      description: "A comprehensive mentoring platform where users register and create detailed profiles with their expertise, interests, and goals. Features secure MySQL database storage for efficient matching between mentors and mentees.",
      techStack: ["Python", "HTML", "CSS", "MySQL"],
      features: [
        "User registration with detailed profiles",
        "Secure MySQL database for efficient matching",
        "Messaging and session scheduling system",
        "Skill-based filtering for mentors and mentees"
      ],
      githubLink: "https://github.com/Ganesh0611/Goment"
    },
    {
      title: "Hostel Outpass Management System",
      period: "Jul. 2024 – Dec. 2024",
      description: "Digital outpass request system eliminating queue waiting and optimizing time management for both students and staff. Features dual-approval process and smart routing based on day types.",
      techStack: ["Python", "HTML", "CSS", "Oracle DB"],
      features: [
        "Digital outpass submission system",
        "Dual-approval process (mentor + warden)",
        "Smart routing for leave vs working days",
        "Enhanced operational efficiency"
      ],
      githubLink: "https://github.com/Ganesh0611/Hostal-Outpass-Management"
    },
    {
      title: "Department Library Management System",
      period: "Jan. 2025 – May. 2025",
      description: "Modern library management system with dynamic web interface built using Handlebars.js. Enables real-time book tracking and request handling while eliminating manual processes.",
      techStack: ["JavaScript", "HTML (Handlebars)", "MongoDB"],
      features: [
        "Online book request and tracking system",
        "Dynamic web interface with Handlebars.js",
        "Real-time inventory management",
        "Elimination of manual logbook processes"
      ],
      githubLink: "https://github.com/Ganesh0611/Department-Library-Management-System"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient">Projects</h2>
          <p className="text-xl text-muted-foreground">
            Here are some of my recent projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {project.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-primary">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Button size="sm" className="w-full" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;