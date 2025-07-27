import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Technologies & Frameworks",
      skills: ["Flask", "REST APIs", "GitHub", "MySQL", "Oracle DB", "MongoDB"]
    },
    {
      category: "Course Work",
      skills: ["Data Structures & Algorithms", "Low Level Design", "Object-Oriented Programming", "Database Management"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Critical Thinking", "Leadership", "Teamwork", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="skill-badge text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;