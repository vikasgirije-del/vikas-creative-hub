import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen grain-texture bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg border-l-4 border-primary pl-4">
                — Hello There!
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                I'm <span className="text-primary">Vikas Giri</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Graphic Designer & Video Editor
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate creator specializing in visual storytelling through innovative design 
              and compelling video content. Bringing brands to life with creative excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-strong"
                asChild
              >
                <a 
                  href="https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Portfolio
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Profile Circle */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-primary relative overflow-hidden">
                <div className="absolute inset-8 rounded-full bg-background flex items-center justify-center">
                  <div className="text-6xl font-bold text-foreground">VG</div>
                </div>
              </div>
              
              {/* Circular Badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-foreground text-background rounded-full flex items-center justify-center transform hover:rotate-45 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-xs font-bold leading-none">HIRE</div>
                  <div className="text-xs font-bold leading-none">ME</div>
                  <ArrowRight className="w-4 h-4 mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="absolute top-4 right-0 space-y-2 hidden lg:block">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-delay-100 animate-fade-in">
                Branding
              </div>
              <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-delay-200 animate-fade-in">
                UI/UX Design
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-delay-300 animate-fade-in">
                Video Editing
              </div>
              <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-delay-400 animate-fade-in">
                Print Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;