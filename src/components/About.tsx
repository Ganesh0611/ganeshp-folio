import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate Information Technology student with a strong foundation in programming, 
            database management, and web development. Experienced in leadership roles and 
            committed to creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="project-card text-center">
            <CardHeader>
              <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                B.Tech IT Student at SSN College of Engineering with 7.724 CGPA
              </p>
            </CardContent>
          </Card>

          <Card className="project-card text-center">
            <CardHeader>
              <Code className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full-stack development with Java, Python, JavaScript, and database technologies
              </p>
            </CardContent>
          </Card>

          <Card className="project-card text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Core Committee Member at SSN Film Club and NSS Lead Volunteer
              </p>
            </CardContent>
          </Card>

          <Card className="project-card text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Programming in Java (IIT Kharagpur) and Fuzzy Systems (IIT Kanpur)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;