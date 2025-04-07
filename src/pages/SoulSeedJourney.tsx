
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, MapPin, Star, Users, Calendar } from "lucide-react";

const SoulSeedJourney = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-genesis-growth/10 text-genesis-growth text-sm font-medium">
                Your Personal Growth Path
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">SoulSeed Journey</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover your unique path to personal growth and ecological impact through our AI-powered learning journey.
            </p>
          </div>
          
          <Tabs defaultValue="path" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="path">Your Path</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="path" className="space-y-6">
              <Card className="border-2 border-genesis-growth/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-5 w-5 mr-2 text-genesis-growth" />
                    <h3 className="text-xl font-medium">Your Growth Journey</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-genesis-growth/20"></div>
                    
                    {/* Journey Steps */}
                    {['Discovery', 'Foundation', 'Practice', 'Integration', 'Mastery'].map((step, index) => (
                      <div key={step} className="relative pl-10 pb-8 last:pb-0">
                        <div className={`absolute left-4 -translate-x-1/2 w-6 h-6 rounded-full border-2 ${index === 0 ? 'bg-genesis-growth border-genesis-growth' : 'bg-white border-genesis-growth/50'}`}></div>
                        <div className={`${index === 0 ? 'text-genesis-growth font-medium' : 'text-foreground/70'}`}>
                          <h4 className="text-lg font-medium">{step}</h4>
                          <p className="mt-1 text-sm">
                            {index === 0 ? 'Currently exploring your personal values and ecological interests.' : 'Upcoming stage in your SoulSeed journey.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <Star className="h-5 w-5 mr-2 text-genesis-energy" />
                      <h3 className="font-medium">Recommended</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Permaculture Basics</h4>
                    <p className="text-sm text-foreground/70 mb-4">Learn the fundamental principles of working with natural systems.</p>
                    <Button className="w-full" variant="outline">Start Lesson</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 mr-2 text-genesis-spirit" />
                      <h3 className="font-medium">Daily Practice</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Mindful Observation</h4>
                    <p className="text-sm text-foreground/70 mb-4">5-minute practice to connect with natural rhythms around you.</p>
                    <Button className="w-full" variant="outline">Begin Practice</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 mr-2 text-genesis-water" />
                      <h3 className="font-medium">Local Action</h3>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Community Garden</h4>
                    <p className="text-sm text-foreground/70 mb-4">Join a nearby initiative to learn hands-on gardening skills.</p>
                    <Button className="w-full" variant="outline">Find Locations</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Your Learning Progress</h3>
                  <p className="text-foreground/70 mb-6">Track your journey and achievements as you grow.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Discovery Phase</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-genesis-growth h-2.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Ecological Knowledge</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-genesis-water h-2.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Spiritual Practices</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-genesis-spirit h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Community Engagement</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-genesis-energy h-2.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="community">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Connect & Collaborate</h3>
                  </div>
                  
                  <p className="text-foreground/70 mb-6">
                    Learn alongside others on similar paths and join collaborative projects.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Regenerative Agriculture Circle</h4>
                        <p className="text-sm text-foreground/70 mb-4">15 members discussing soil regeneration techniques.</p>
                        <Button className="w-full" variant="outline">Join Group</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Mindfulness Practice Circle</h4>
                        <p className="text-sm text-foreground/70 mb-4">28 members sharing daily meditation practices.</p>
                        <Button className="w-full" variant="outline">Join Group</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SoulSeedJourney;
