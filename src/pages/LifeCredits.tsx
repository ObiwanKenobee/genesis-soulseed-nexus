
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, BarChart2, Leaf, ArrowUp, ArrowDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LifeCredits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-genesis-energy/10 text-genesis-energy text-sm font-medium">
                GaiaXchange Dashboard
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Life Credits</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Track your positive ecological and social impact, earning credits for regenerative actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-genesis-energy/10 to-background">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">Available Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">245</div>
                    <div className="text-xs text-foreground/60">Life Credits</div>
                  </div>
                  <CreditCard className="h-8 w-8 text-genesis-energy/70" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">Total Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">367</div>
                    <div className="text-xs text-foreground/60">All-time Credits</div>
                  </div>
                  <BarChart2 className="h-8 w-8 text-primary/70" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">42 kg</div>
                    <div className="text-xs text-foreground/60">CO₂ Reduction</div>
                  </div>
                  <Leaf className="h-8 w-8 text-genesis-growth/70" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="transactions" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <ArrowUp className="h-5 w-5 text-genesis-growth" />
                        </div>
                        <div>
                          <div className="font-medium">Volunteer Hours</div>
                          <div className="text-sm text-foreground/60">Community Garden</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-genesis-growth">+25 LC</div>
                        <div className="text-xs text-foreground/60">Yesterday</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <ArrowUp className="h-5 w-5 text-genesis-growth" />
                        </div>
                        <div>
                          <div className="font-medium">Recycling</div>
                          <div className="text-sm text-foreground/60">Plastic and Paper</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-genesis-growth">+15 LC</div>
                        <div className="text-xs text-foreground/60">3 days ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                          <ArrowDown className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <div className="font-medium">Reward Redemption</div>
                          <div className="text-sm text-foreground/60">Eco-friendly Products</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-red-500">-50 LC</div>
                        <div className="text-xs text-foreground/60">1 week ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <ArrowUp className="h-5 w-5 text-genesis-growth" />
                        </div>
                        <div>
                          <div className="font-medium">Public Transport</div>
                          <div className="text-sm text-foreground/60">Weekly Usage</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-genesis-growth">+30 LC</div>
                        <div className="text-xs text-foreground/60">2 weeks ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="actions">
              <Card>
                <CardHeader>
                  <CardTitle>Available Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Local Beach Cleanup</h4>
                        <p className="text-sm text-foreground/70 mb-2">Join community effort to clean local beaches.</p>
                        <div className="flex justify-between mb-3">
                          <span className="text-xs text-foreground/60">When: This Weekend</span>
                          <span className="text-xs font-medium text-genesis-growth">+45 LC</span>
                        </div>
                        <Button className="w-full" variant="outline">Register</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Plant a Tree</h4>
                        <p className="text-sm text-foreground/70 mb-2">Plant and care for a native tree in your area.</p>
                        <div className="flex justify-between mb-3">
                          <span className="text-xs text-foreground/60">Ongoing</span>
                          <span className="text-xs font-medium text-genesis-growth">+30 LC</span>
                        </div>
                        <Button className="w-full" variant="outline">Log Action</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Reduce Water Usage</h4>
                        <p className="text-sm text-foreground/70 mb-2">Challenge: Reduce household water by 10% this month.</p>
                        <div className="flex justify-between mb-3">
                          <span className="text-xs text-foreground/60">Monthly Challenge</span>
                          <span className="text-xs font-medium text-genesis-growth">+25 LC</span>
                        </div>
                        <Button className="w-full" variant="outline">Start Challenge</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Suggest New Action</h4>
                        <p className="text-sm text-foreground/70 mb-4">Have ideas for impactful ecological actions?</p>
                        <Button className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Suggest Action
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rewards">
              <Card>
                <CardHeader>
                  <CardTitle>Available Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Bamboo Utensil Set</h4>
                        <p className="text-sm text-foreground/70 mb-3">Sustainable bamboo travel utensils.</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-genesis-energy">75 LC</span>
                          <Button variant="outline" size="sm">Redeem</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Tree Planting Donation</h4>
                        <p className="text-sm text-foreground/70 mb-3">Sponsor 5 trees in reforestation projects.</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-genesis-energy">100 LC</span>
                          <Button variant="outline" size="sm">Redeem</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">Advanced Course Access</h4>
                        <p className="text-sm text-foreground/70 mb-3">Unlock premium SoulSeed learning content.</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-genesis-energy">200 LC</span>
                          <Button variant="outline" size="sm">Redeem</Button>
                        </div>
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

export default LifeCredits;
