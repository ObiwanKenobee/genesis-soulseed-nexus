
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import FeatureCard from "@/components/FeatureCard";
import { Leaf, CreditCard, Brain, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "SoulSeed Journey",
    description: "Begin your personalized learning path to sustainable growth and personal transformation.",
    icon: Leaf,
    color: "bg-genesis-growth",
    gradient: "bg-gradient-growth",
    to: "/soulseed",
  },
  {
    title: "Life Credits",
    description: "Track your ecological and social contributions, turning positive actions into tangible rewards.",
    icon: CreditCard,
    color: "bg-genesis-energy",
    gradient: "bg-gradient-energy",
    to: "/lifecredits",
  },
  {
    title: "Wisdom Stream",
    description: "Receive daily insights and practices to nurture your spiritual and ecological awareness.",
    icon: Brain,
    color: "bg-genesis-spirit",
    gradient: "bg-gradient-spirit",
    to: "/wisdom",
  },
  {
    title: "HoloGarden",
    description: "Visualize regenerative actions through augmented reality overlays in your environment.",
    icon: Layers,
    color: "bg-genesis-water",
    gradient: "bg-gradient-cosmic",
    to: "/hologarden",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-pulse-gentle">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Harmony of Technology & Nature
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-genesis-spirit via-genesis-water to-genesis-growth bg-clip-text text-transparent">
            The GENESIS SYSTEM
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            A decentralized platform uniting ecological wisdom, spiritual growth, and technological innovation to create a regenerative future for all life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Grid Section */}
      <section className="py-16 px-4 sm:px-6 relative bg-genesis-pattern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Explore the Components of Genesis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Vision Behind Genesis
              </h2>
              <p className="text-foreground/80 mb-6">
                GENESIS is more than a platform—it's a living ecosystem that connects human potential, technological innovation, and planetary healing into a unified system for conscious evolution.
              </p>
              <p className="text-foreground/80 mb-6">
                By combining AI guidance, blockchain verification, and augmented reality visualization, we empower users to take meaningful actions that benefit both personal growth and ecological restoration.
              </p>
              <p className="text-foreground/80">
                Our decentralized approach ensures that the wisdom, credits, and impact generated are owned by the community, creating a self-sustaining system of abundance.
              </p>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 relative animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-genesis-spirit to-genesis-water opacity-20 blur-xl" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-genesis-spirit to-genesis-water opacity-20 animate-pulse-gentle" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-genesis-spirit to-genesis-water opacity-30 animate-rotate-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-spirit flex items-center justify-center mr-2">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="font-semibold">GENESIS SYSTEM</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/70 hover:text-primary">About</a>
            <a href="#" className="text-foreground/70 hover:text-primary">Privacy</a>
            <a href="#" className="text-foreground/70 hover:text-primary">Terms</a>
            <a href="#" className="text-foreground/70 hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
