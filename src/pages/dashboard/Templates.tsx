import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit3, Trash2, FileText, Variable } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useModule } from "@/src/components/module-provider";

export default function Templates() {
  const { moduleType } = useModule();

  const getMockTemplates = () => {
    switch(moduleType) {
      case 'airport':
        return [
          {
            id: "TPL-01", title: "Flight Boarding", content: "Attention passengers, Flight {flight_number} to {city} is now boarding at Gate {gate}.", variables: ["flight_number", "city", "gate"], lastEdited: "2 days ago"
          },
          {
            id: "TPL-02", title: "Delay Announcement", content: "We regret to inform you that Flight {flight_number} is delayed by {delay_time} minutes due to {reason}.", variables: ["flight_number", "delay_time", "reason"], lastEdited: "1 week ago"
          },
          {
            id: "TPL-03", title: "Final Call", content: "This is the final boarding call for passenger {passenger_name} on Flight {flight_number}.", variables: ["passenger_name", "flight_number"], lastEdited: "Just now"
          },
          {
            id: "TPL-04", title: "Security Request", content: "Security personnel, please report to {location} immediately.", variables: ["location"], lastEdited: "1 month ago"
          }
        ];
      case 'train':
        return [
          {
            id: "TPL-01", title: "Train Boarding", content: "Attention passengers, Train {train_number} to {city} is now boarding at Platform {platform}.", variables: ["train_number", "city", "platform"], lastEdited: "2 days ago"
          },
          {
            id: "TPL-02", title: "Delay Announcement", content: "We regret to inform you that Train {train_number} is delayed by {delay_time} minutes.", variables: ["train_number", "delay_time"], lastEdited: "1 week ago"
          },
          {
            id: "TPL-03", title: "Arrival Notice", content: "Train {train_number} from {city} is now arriving at Platform {platform}.", variables: ["train_number", "city", "platform"], lastEdited: "Just now"
          }
        ];
      case 'bus':
        return [
          {
            id: "TPL-01", title: "Bus Boarding", content: "Attention passengers, Bus {bus_number} to {city} is now boarding at Gate {gate}.", variables: ["bus_number", "city", "gate"], lastEdited: "2 days ago"
          },
          {
            id: "TPL-02", title: "Delay Announcement", content: "The service to {city} scheduled for {time} is delayed.", variables: ["city", "time"], lastEdited: "1 week ago"
          }
        ];
      case 'mall':
        return [
          {
            id: "TPL-01", title: "Closing Notice", content: "Attention shoppers, the mall will be closing in {minutes} minutes.", variables: ["minutes"], lastEdited: "2 days ago"
          },
          {
            id: "TPL-02", title: "Lost Child", content: "A child named {child_name} is waiting at the {location} desk.", variables: ["child_name", "location"], lastEdited: "1 week ago"
          },
          {
            id: "TPL-03", title: "Sale Promotion", content: "Join us at {store_name} for a {discount_percent}% off sale until {time}.", variables: ["store_name", "discount_percent", "time"], lastEdited: "Just now"
          }
        ];
    }
  };

  const highlightVariables = (text: string) => {
    // Simple way to highlight {variable} in the text string
    const parts = text.split(/(\{.*?\})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return (
          <span 
            key={index} 
            className="text-primary bg-primary/10 border border-primary/20 px-1 py-0.5 rounded-md font-mono text-xs mx-0.5 inline-block shadow-sm"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const currentTemplates = getMockTemplates();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Message Templates</h2>
          <p className="text-muted-foreground">Manage your reusable announcement strings with dynamic variables.</p>
        </div>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-medium shadow-sm">
          <Plus className="h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="flex items-center gap-4 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="w-full bg-card border-input pl-10 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTemplates.map((template) => (
          <Card key={template.id} className="border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col group">
            <CardHeader className="pb-4 border-b border-border/50 pt-5 pr-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 shadow-sm group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground tracking-tight">{template.title}</CardTitle>
                    <CardDescription className="text-[13px] mt-1 font-medium text-muted-foreground">ID: {template.id} • Edited {template.lastEdited}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 bg-secondary rounded-lg border border-border/50 p-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md">
                    <Edit3 className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-5 flex-1 px-6">
              <p className="text-foreground/90 leading-relaxed text-sm font-medium">
                {highlightVariables(template.content)}
              </p>
            </CardContent>
            <CardFooter className="bg-secondary/30 border-t border-border/50 py-3.5 px-6 flex gap-2 flex-wrap items-center">
              <Variable className="h-4 w-4 text-muted-foreground mr-1" />
              {template.variables.map((v, i) => (
                <Badge key={i} variant="secondary" className="bg-background border border-border text-xs font-mono text-muted-foreground hover:bg-background shadow-sm px-2 py-0.5">
                  {v}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
