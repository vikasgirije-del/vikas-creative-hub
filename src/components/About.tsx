import { Download, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate creative professional with a Master's degree in Entertainment, 
              Media & Advertising from Mumbai University. My journey in design and media production 
              spans over 4 years, where I've honed my skills in creating compelling visual narratives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in transforming ideas into stunning visual experiences through graphic design, 
              video editing, and multimedia production. My work combines technical expertise with 
              creative innovation to deliver impactful results for brands and clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-glow transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-strong rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up animate-delay-200">
            <Card className="portfolio-card bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">Master's in Entertainment, Media & Advertising</p>
              </CardContent>
            </Card>
            
            <Card className="portfolio-card bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">4+ Years in Design & Production</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;