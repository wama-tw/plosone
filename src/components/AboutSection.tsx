import teamImage from "@/assets/medical-team.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Medical AI team of clinicians and engineers"
              className="rounded-2xl shadow-strong w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built by <span className="text-primary">Clinicians</span> and 
              <span className="text-secondary"> AI Experts</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're a team of medical imaging specialists, AI engineers, and clinical advisors 
              committed to reducing osteoporosis-related suffering through earlier, smarter detection.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clinical Expertise</h3>
                  <p className="text-muted-foreground">Founded by board-certified radiologists with 20+ years in musculoskeletal imaging</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Innovation</h3>
                  <p className="text-muted-foreground">Led by machine learning researchers from top universities and tech companies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Healthcare Focus</h3>
                  <p className="text-muted-foreground">Advised by practicing clinicians ensuring real-world applicability and workflow integration</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-background/50 rounded-xl border border-border/50">
              <p className="text-foreground font-medium mb-2">Our Mission</p>
              <p className="text-muted-foreground">
                To democratize advanced medical imaging AI, making world-class fracture detection 
                accessible to healthcare providers everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;