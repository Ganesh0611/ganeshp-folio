import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Core Committee Member",
      organization: "SSN Film Club",
      period: "Sept. 2024 – Present",
      location: "Sri Sivasubramaniya Nadar College of Engineering, Chennai, India",
      responsibilities: [
        "Organized and managed film screenings, discussions, and cultural events",
        "Collaborated on film curation to enhance creative and cultural atmosphere",
        "Ensured engaging club experiences for all members"
      ],
      type: "Leadership"
    },
    {
      title: "NSS Lead Volunteer & Ullas Summit Trainer",
      organization: "National Service Scheme",
      period: "Ongoing",
      location: "Sri Sivasubramaniya Nadar College of Engineering, Chennai, India",
      responsibilities: [
        "Played key role in event management, coordination, and financial oversight",
        "Served as Junior Point of Contact for NSS initiatives",
        "Facilitated communication and coordinated awareness camps",
        "Enhanced student engagement through outreach activities"
      ],
      type: "Volunteer Leadership"
    }
  ];

  const education = [
    {
      degree: "B.Tech. Information Technology",
      institution: "Sri Sivasubramaniya Nadar College of Engineering",
      location: "Chennai, India",
      period: "Aug. 2023 – Present",
      grade: "CGPA: 7.724/10.0"
    },
    {
      degree: "12th Grade",
      institution: "AIM Higher Secondary School",
      location: "Tamil Nadu, India",
      period: "Jun. 2021 – May. 2022",
      grade: "586/600"
    }
  ];

  const certifications = [
    "Programming in Java - IIT Kharagpur",
    "Fuzzy Sets, Logic and Systems & Applications - IIT Kanpur"
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-gradient">Experience & Education</h2>
          <p className="text-xl text-muted-foreground">
            My journey through education, leadership roles, and continuous learning
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-primary">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {edu.institution}
                  </CardDescription>
                  <CardDescription>{edu.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <Badge variant="outline" className="font-semibold">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-primary">Leadership & Extracurricular</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold mb-1">
                        {exp.organization}
                      </CardDescription>
                      <CardDescription className="text-sm">
                        {exp.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        {exp.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-sm text-muted-foreground">
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-primary">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="project-card">
                <CardContent className="pt-6">
                  <p className="font-semibold text-center">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;