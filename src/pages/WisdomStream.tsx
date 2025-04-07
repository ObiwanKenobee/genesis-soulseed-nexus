
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, User, Calendar, ThumbsUp, MessageSquare, Bookmark, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const wisdomItems = [
  {
    id: 1,
    quote: "We don't inherit the earth from our ancestors; we borrow it from our children.",
    source: "Native American Proverb",
    practice: "Take 5 minutes today to notice something in nature you usually overlook.",
    likes: 124,
    comments: 18,
    date: "Today"
  },
  {
    id: 2,
    quote: "The greatest threat to our planet is the belief that someone else will save it.",
    source: "Robert Swan",
    practice: "Choose one single-use plastic item you regularly use and find a sustainable alternative.",
    likes: 98,
    comments: 12,
    date: "Yesterday"
  },
  {
    id: 3,
    quote: "In every deliberation, we must consider the impact on the seventh generation.",
    source: "Iroquois Maxim",
    practice: "Before making a purchase today, pause and ask: 'How will this affect the world my grandchildren live in?'",
    likes: 87,
    comments: 9,
    date: "2 days ago"
  }
];

const WisdomStream = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 rounded-full bg-genesis-spirit/10 text-genesis-spirit text-sm font-medium">
                Daily EnlightenAI
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Wisdom Stream</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Receive daily insights and practices to nurture your spiritual and ecological awareness.
            </p>
          </div>
          
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="daily">Daily Wisdom</TabsTrigger>
              <TabsTrigger value="practices">Practices</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily">
              <Card className="mb-8 border-2 border-genesis-spirit/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-genesis-spirit/10 flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-genesis-spirit" />
                    </div>
                    <div>
                      <h3 className="font-medium text-genesis-spirit">Today's Insight</h3>
                      <div className="text-sm text-foreground/60 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>April 7, 2025</span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-2xl font-serif italic mb-4">
                    "The true meaning of life is to plant trees, under whose shade you do not expect to sit."
                  </blockquote>
                  
                  <div className="font-medium mb-6">— Nelson Henderson</div>
                  
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h4 className="font-medium flex items-center mb-3">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Reflection
                    </h4>
                    <p className="text-foreground/80">
                      True sustainability comes from creating value for future generations. Consider how your actions today are planting seeds for a world you may never see, but that will nourish those who come after you.
                    </p>
                  </div>
                  
                  <div className="bg-genesis-spirit/5 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-genesis-spirit flex items-center mb-3">
                      <User className="h-4 w-4 mr-2" />
                      Today's Practice
                    </h4>
                    <p className="mb-4">
                      Plant something today—whether a physical seed, a kind word to someone who needs it, or a sustainable habit. Notice how it feels to create something that will grow beyond this moment.
                    </p>
                    <Button size="sm" variant="outline" className="border-genesis-spirit text-genesis-spirit hover:bg-genesis-spirit/10">
                      Mark as Complete
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        <span>Appreciate</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>Reflect</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Save</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-medium mb-4">Previous Wisdom</h3>
              
              <div className="space-y-4">
                {wisdomItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex justify-between mb-3">
                        <div className="text-sm text-foreground/60 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <blockquote className="text-lg font-serif italic mb-2">
                        "{item.quote}"
                      </blockquote>
                      
                      <div className="font-medium text-sm mb-3">— {item.source}</div>
                      
                      <div className="text-sm line-clamp-2 mb-3 text-foreground/80">
                        <span className="font-medium">Practice:</span> {item.practice}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4 text-xs text-foreground/60">
                          <span className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {item.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {item.comments}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs flex items-center">
                          <span>View</span>
                          <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="practices">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-6">Daily Practices</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Ecological Mindfulness</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Each morning, take 3 minutes to notice your connection to the natural world around you.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-foreground/60">Recommended: Daily</div>
                        <Button size="sm" variant="outline">Start Now</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Gratitude for Earth</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Before each meal, take a moment to acknowledge where your food came from and express gratitude.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-foreground/60">Recommended: Each meal</div>
                        <Button size="sm" variant="outline">Start Now</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Conscious Consumption</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Before making any purchase, ask: "Do I need this? What impact will it have?"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-foreground/60">Recommended: Ongoing</div>
                        <Button size="sm" variant="outline">Start Now</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Nature Connection</h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        Spend 15 minutes in direct contact with nature - barefoot on grass, touching trees, or gardening.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-foreground/60">Recommended: Weekly</div>
                        <Button size="sm" variant="outline">Start Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="saved">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-6">Your Saved Wisdom</h3>
                  
                  <div className="text-center py-8">
                    <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h4 className="text-lg font-medium mb-2">No saved items yet</h4>
                    <p className="text-foreground/60 mb-4">
                      Save your favorite insights and practices to revisit later.
                    </p>
                    <Button>
                      Browse Wisdom Stream
                    </Button>
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

export default WisdomStream;
