import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8778746811",
      link: "tel:+918778746811"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ganesh2310683@ssn.edu.in",
      link: "mailto:ganesh2310683@ssn.edu.in"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Ganesh0611"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ganesh0724"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's connect and discuss opportunities, projects, or just have a conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="project-card text-center">
              <CardHeader>
                <contact.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">{contact.label}</CardTitle>
              </CardHeader>
              <CardContent>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Connect with me</h3>
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="outline" size="lg" className="hover-scale" asChild>
                <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <social.icon className="h-5 w-5" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>
          
          <Card className="project-card max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground mb-4">
                Ready to collaborate on exciting projects or discuss opportunities in technology and software development.
              </p>
              <Button size="lg" className="w-full glow-effect" asChild>
                <a href="mailto:ganesh2310683@ssn.edu.in">
                  Send Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;