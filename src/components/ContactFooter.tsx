import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-gradient-hero text-primary-foreground">
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Transforming <span className="text-accent">Bone Health</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with us to bring cutting-edge AI technology to your healthcare practice and 
            improve patient outcomes through early fracture detection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Partner with Us
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Invest in the Future
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer Content */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            {/* <div> */}
            <div>
              <h3 className="text-2xl font-bold mb-4">PLOS ONE</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Revolutionizing osteoporosis treatment through AI-powered vertebral fracture detection.
              </p>
              </div>
              <div className="space-y-3 justify-self-center">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">contact@plosone.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground/80">Cambridge, MA</span>
                </div>
              </div>
            {/* </div> */}
            
            {/* Solutions */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Fracture Detection</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">PACS Integration</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Clinical Workflow</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Research Platform</a></li>
              </ul>
            </div> */}
            
            {/* Company */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Clinical Validation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="p-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2025 PLOS ONE. All rights reserved. Transforming healthcare through artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;