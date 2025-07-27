import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="hero-gradient">Ganesh P</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-2">
            Pursuing B.Tech in Information Technology
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chennai, India • B.Tech IT @ SSN College of Engineering
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" size="lg" className="hover-scale" asChild>
            <a href="tel:+918778746811" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 8778746811
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover-scale" asChild>
            <a href="mailto:ganesh2310683@ssn.edu.in" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover-scale" asChild>
            <a href="https://www.linkedin.com/in/ganesh0724" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover-scale" asChild>
            <a href="https://github.com/Ganesh0611" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="hover-scale glow-effect" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" className="hover-scale" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;