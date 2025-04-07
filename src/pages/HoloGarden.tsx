
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Layers, Camera, MapPin, Info, Compass, AlertTriangle } from "lucide-react";

const HoloGarden = () => {
  const [cameraAccess, setCameraAccess] = useState(false);

  const requestCameraAccess = () => {
    // Simulating camera access request
    setCameraAccess(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-genesis-water/10 text-genesis-water text-sm font-medium">
                AR Visualization
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">HoloGarden</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Visualize regenerative actions and ecological data through augmented reality overlays.
            </p>
          </div>
          
          {!cameraAccess ? (
            <Card className="max-w-xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-genesis-water/10 flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-genesis-water" />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">Camera Access Required</h3>
                  <p className="text-foreground/70 mb-6">
                    HoloGarden needs access to your camera to display augmented reality overlays on your environment.
                  </p>
                  
                  <Button onClick={requestCameraAccess} className="w-full sm:w-auto">
                    Enable AR Experience
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="relative aspect-[4/3] max-w-3xl mx-auto bg-black rounded-xl overflow-hidden mb-8">
                {/* Simulated AR View */}
                <div className="absolute inset-0 bg-gradient-cosmic opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Layers className="h-20 w-20 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-medium">AR Simulation View</p>
                    <p className="text-sm opacity-70">
                      On a real device, this would show your camera feed with AR overlays.
                    </p>
                  </div>
                </div>
                
                {/* AR Interface Elements */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                  <Button variant="outline" size="icon" className="bg-black/40 border-white/20 text-white rounded-full h-10 w-10">
                    <MapPin className="h-5 w-5" />
                  </Button>
                  
                  <Button variant="outline" className="bg-black/40 border-white/20 text-white rounded-full px-4">
                    <Camera className="h-5 w-5 mr-2" />
                    <span>Scan Area</span>
                  </Button>
                  
                  <Button variant="outline" size="icon" className="bg-black/40 border-white/20 text-white rounded-full h-10 w-10">
                    <Layers className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Info Overlay */}
                <div className="absolute top-5 right-5">
                  <div className="bg-black/40 border border-white/20 text-white rounded-lg p-3 text-sm max-w-xs backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                      <span>Plant Identification Active</span>
                    </div>
                    <div className="text-xs text-white/70">
                      Point camera at plants to identify species and learn about them
                    </div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="visualize" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                  <TabsTrigger value="visualize">Visualize</TabsTrigger>
                  <TabsTrigger value="data">Ecological Data</TabsTrigger>
                  <TabsTrigger value="projects">AR Projects</TabsTrigger>
                </TabsList>
                
                <TabsContent value="visualize">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Plant Identification</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Identify plant species and learn about their ecological roles.
                        </p>
                        <Button variant="outline" className="w-full">Activate</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Water Quality</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          View water quality data overlaid on lakes, rivers, and oceans.
                        </p>
                        <Button variant="outline" className="w-full">Activate</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Air Quality</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Visualize local air quality metrics in your surrounding area.
                        </p>
                        <Button variant="outline" className="w-full">Activate</Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-genesis-water/10 mr-4">
                          <Info className="h-5 w-5 text-genesis-water" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">About AR Visualization</h4>
                          <p className="text-sm text-foreground/70">
                            HoloGarden uses your device's camera and location to overlay ecological data on your surroundings.
                            Choose a visualization mode above to get started exploring the hidden data in your environment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="data">
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">Local Ecological Data</h3>
                        <div className="flex items-center text-sm text-foreground/60">
                          <Compass className="h-4 w-4 mr-1" />
                          <span>Current Location</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg border">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Air Quality Index</span>
                            <span className="text-sm font-medium text-genesis-growth">Good (42)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-genesis-growth h-2.5 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg border">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Biodiversity Index</span>
                            <span className="text-sm font-medium text-yellow-500">Moderate (63)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '63%' }}></div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg border">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Soil Health</span>
                            <span className="text-sm font-medium text-genesis-energy">Fair (58)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-genesis-energy h-2.5 rounded-full" style={{ width: '58%' }}></div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg border">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Water Quality</span>
                            <span className="text-sm font-medium text-genesis-water">Good (75)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-genesis-water h-2.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-4">Local Plant Species</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-center justify-between p-2 rounded border">
                            <span>Oak Trees (Quercus)</span>
                            <span className="text-xs bg-genesis-growth/10 text-genesis-growth px-2 py-0.5 rounded">Native</span>
                          </li>
                          <li className="flex items-center justify-between p-2 rounded border">
                            <span>California Poppy</span>
                            <span className="text-xs bg-genesis-growth/10 text-genesis-growth px-2 py-0.5 rounded">Native</span>
                          </li>
                          <li className="flex items-center justify-between p-2 rounded border">
                            <span>English Ivy</span>
                            <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded">Invasive</span>
                          </li>
                          <li className="flex items-center justify-between p-2 rounded border">
                            <span>Japanese Maple</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Introduced</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-4">Environmental Alerts</h4>
                        <div className="p-3 rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10 dark:border-yellow-900/30 mb-3">
                          <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
                            <div>
                              <h5 className="font-medium text-yellow-800 dark:text-yellow-300">Drought Conditions</h5>
                              <p className="text-sm text-yellow-700 dark:text-yellow-400/80">
                                Water conservation recommended for local gardens and landscapes.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg border border-genesis-growth/20 bg-genesis-growth/5 mb-3">
                          <div className="flex items-start">
                            <Info className="h-5 w-5 text-genesis-growth mr-2 mt-0.5" />
                            <div>
                              <h5 className="font-medium text-genesis-growth">Pollinator Season</h5>
                              <p className="text-sm text-genesis-growth/80">
                                Local bee and butterfly populations active. Consider planting native flowers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="projects">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-6">AR Garden Projects</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-medium mb-2">Virtual Garden Design</h4>
                            <p className="text-sm text-foreground/70 mb-4">
                              Use AR to plan and visualize your garden before planting.
                            </p>
                            <Button className="w-full">Start Project</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-medium mb-2">Community Forest</h4>
                            <p className="text-sm text-foreground/70 mb-4">
                              Join collaborative AR project to visualize community tree planting.
                            </p>
                            <Button className="w-full">Join Project</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-medium mb-2">Water Conservation</h4>
                            <p className="text-sm text-foreground/70 mb-4">
                              Visualize water usage and discover conservation opportunities.
                            </p>
                            <Button className="w-full">Start Project</Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="pt-6">
                            <h4 className="font-medium mb-2">Pollinator Pathways</h4>
                            <p className="text-sm text-foreground/70 mb-4">
                              Map and visualize corridors for bees and butterflies in your area.
                            </p>
                            <Button className="w-full">Start Project</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoloGarden;
