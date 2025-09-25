import spineImage from "@/assets/spine-ai-detection.jpg";

const ProductOverview = () => {
  return (
    <section id="overview" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Using advanced computer vision models trained on thousands of annotated spinal images, 
              our platform flags subtle and overt vertebral fractures—often missed in routine scans. 
              Seamless integration with radiology workflows makes it easy to adopt.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Upload Medical Images</h3>
                  <p className="text-muted-foreground">Securely upload DICOM files or integrate directly with your PACS system</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">Our deep learning model analyzes vertebrae for fracture patterns and severity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Instant Results</h3>
                  <p className="text-muted-foreground">Get detailed reports with fracture locations, severity scores, and treatment recommendations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={spineImage} 
              alt="AI spine analysis visualization"
              className="rounded-2xl shadow-strong w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;