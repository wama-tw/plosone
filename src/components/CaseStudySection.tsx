import { Quote } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Proven in the Field
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Real results from healthcare institutions using our AI-powered fracture detection platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-strong">
            <div className="flex items-start gap-6">
              <Quote className="w-12 h-12 text-primary flex-shrink-0 mt-2" />
              <div>
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "In a 12-month deployment, our tool identified 32% more fractures than traditional 
                  reporting—directly improving patient treatment outcomes and reducing missed diagnoses."
                </blockquote>
                
                <div className="grid md:grid-cols-1 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">32%</div>
                    <div className="text-muted-foreground">More fractures detected</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Harvard Medical School</strong> — 
                    Student i-lab research collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;