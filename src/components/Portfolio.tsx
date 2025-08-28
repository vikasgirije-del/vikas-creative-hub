import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  // Placeholder portfolio items - these would typically link to actual Behance projects
  const portfolioItems = [
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    },
    {
      title: "Social Media Campaign",
      category: "Digital Design",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    },
    {
      title: "Packaging Design",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    },
    {
      title: "Video Production",
      category: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    },
    {
      title: "Print Campaign",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1606103836293-aa633db98c80?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    },
    {
      title: "Corporate Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Portfolio Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my creative work spanning branding, digital design, and multimedia production
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-glow transform hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-strong rounded-xl"
            asChild
          >
            <a 
              href="https://www.behance.net/gallery/197985085/Portfolio-2025-Graphic-Design" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Full Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className={`portfolio-card border-0 overflow-hidden animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="portfolio-card-overlay">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button 
                        className="bg-white/90 text-primary hover:bg-white border-0 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                        asChild
                      >
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground animated-underline">
                    {item.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;