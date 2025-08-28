import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "M.A. (Entertainment, Media & Advertising)",
      institution: "Mumbai University",
      period: "2023 – 2025",
      status: "In Progress",
      type: "Master's Degree"
    },
    {
      degree: "B.Voc. in Graphics & Multimedia",
      institution: "Tata Institute of Social Sciences (TISS)",
      period: "2019 – 2022",
      status: "Completed",
      type: "Bachelor's Degree"
    },
    {
      degree: "Intermediate",
      institution: "Higher Secondary Education",
      period: "2018 – 2019",
      status: "Completed",
      type: "Higher Secondary"
    },
    {
      degree: "High School",
      institution: "Secondary Education",
      period: "2014 – 2015",
      status: "Completed",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Academic foundation supporting creative excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className={`portfolio-card bg-gradient-card border-0 animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-foreground leading-tight">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-secondary/10 text-secondary' 
                          : 'bg-success/10 text-success'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      
                      <div className="inline-block px-2 py-1 bg-primary/5 text-primary text-xs rounded-lg font-medium">
                        {edu.type}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;