import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Mega Sign PTE. LTD.",
      position: "Graphic Designer & Production Assistant",
      period: "2024 – Present",
      description: "Leading design projects and production workflows, creating comprehensive visual solutions for diverse client requirements."
    },
    {
      company: "Filling the Blanks",
      position: "Graphic Designer",
      period: "2022 – 2024",
      description: "Developed engaging visual content and brand identities, collaborating with teams to deliver creative solutions."
    },
    {
      company: "IELTSMaterial.com",
      position: "Graphic Design Intern",
      period: "2021 – 2023",
      description: "Created educational materials and digital content, contributing to the platform's visual communication strategy."
    },
    {
      company: "Curie Robotics",
      position: "Graphic Design Intern",
      period: "2020 – 2021",
      description: "Designed marketing materials and visual assets for innovative robotics solutions and technology presentations."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground">
            A journey of creative growth and professional excellence
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item animate-slide-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 ml-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;