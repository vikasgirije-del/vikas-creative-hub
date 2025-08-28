import { 
  Palette, Type, Package, Share2, Signpost, Printer,
  Camera, Layers, Video, Play, Zap, Image
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const designSkills = [
    { name: "Branding", icon: Palette },
    { name: "Typography", icon: Type },
    { name: "Packaging", icon: Package },
    { name: "Social Media", icon: Share2 },
    { name: "Signage", icon: Signpost },
    { name: "Print Design", icon: Printer },
  ];

  const softwareSkills = [
    { name: "Photoshop", icon: Image },
    { name: "Illustrator", icon: Layers },
    { name: "After Effects", icon: Zap },
    { name: "Premiere Pro", icon: Video },
    { name: "Artcam", icon: Package },
    { name: "Lightroom", icon: Camera },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning creative design and professional software mastery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Design Skills */}
          <Card className="portfolio-card bg-gradient-card border-0 animate-slide-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-primary">Design Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`skill-icon text-center group animate-scale-in animate-delay-${(index + 1) * 100}`}
                  >
                    <skill.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors duration-300" />
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Software Skills */}
          <Card className="portfolio-card bg-gradient-card border-0 animate-slide-up animate-delay-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-secondary">Software Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {softwareSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`skill-icon text-center group animate-scale-in animate-delay-${(index + 1) * 100}`}
                  >
                    <skill.icon className="w-8 h-8 mx-auto mb-2 text-secondary group-hover:text-primary transition-colors duration-300" />
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;