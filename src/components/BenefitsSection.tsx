import { CheckCircle, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Clinical-grade accuracy",
    description: "Validated in multi-center studies with sensitivity rates exceeding traditional methods"
  },
  {
    icon: Zap,
    title: "Automated workflows",
    description: "Streamline radiology workflows with intelligent preprocessing and automated flagging"
  },
  {
    icon: Shield,
    title: "HIPAA-compliant platform",
    description: "Enterprise-grade security with cloud-based infrastructure and data encryption"
  },
  {
    icon: BarChart3,
    title: "Real-time reports",
    description: "Comprehensive analytics to assist osteoporosis treatment planning and patient monitoring"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Our Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built specifically for healthcare professionals who demand precision, efficiency, and reliability 
            in medical imaging analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;