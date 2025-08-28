import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-surface to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight gradient-text">
            Vikas Giri
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Graphic Designer & Video Editor
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate creator specializing in visual storytelling through innovative design 
          and compelling video content. Bringing brands to life with creative excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-glow transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-strong rounded-xl px-8 py-6 text-lg font-semibold"
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
            className="border-2 border-border hover:border-primary hover:bg-primary/5 rounded-xl px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;