import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit3, Trash2, FileText, Variable, FileX2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useModule } from "@/src/components/module-provider";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Templates() {
  const { moduleType } = useModule();

  const getMockTemplates = () => {
    switch(moduleType) {
      case 'airport':
        return [
          { id: "TPL-01", title: "Flight Boarding", content: "Attention passengers, Flight {flight_number} to {city} is now boarding at Gate {gate}.", variables: ["flight_number", "city", "gate"], lastEdited: "2 days ago" },
          { id: "TPL-02", title: "Delay Announcement", content: "We regret to inform you that Flight {flight_number} is delayed by {delay_time} minutes due to {reason}.", variables: ["flight_number", "delay_time", "reason"], lastEdited: "1 week ago" },
          { id: "TPL-03", title: "Final Call", content: "This is the final boarding call for passenger {passenger_name} on Flight {flight_number}.", variables: ["passenger_name", "flight_number"], lastEdited: "Just now" },
          { id: "TPL-04", title: "Security Request", content: "Security personnel, please report to {location} immediately.", variables: ["location"], lastEdited: "1 month ago" }
        ];
      case 'train':
        return [
          { id: "TPL-01", title: "Train Boarding", content: "Attention passengers, Train {train_number} to {city} is now boarding at Platform {platform}.", variables: ["train_number", "city", "platform"], lastEdited: "2 days ago" },
          { id: "TPL-02", title: "Delay Announcement", content: "We regret to inform you that Train {train_number} is delayed by {delay_time} minutes.", variables: ["train_number", "delay_time"], lastEdited: "1 week ago" },
          { id: "TPL-03", title: "Arrival Notice", content: "Train {train_number} from {city} is now arriving at Platform {platform}.", variables: ["train_number", "city", "platform"], lastEdited: "Just now" }
        ];
      case 'bus':
        return [
          { id: "TPL-01", title: "Bus Boarding", content: "Attention passengers, Bus {bus_number} to {city} is now boarding at Gate {gate}.", variables: ["bus_number", "city", "gate"], lastEdited: "2 days ago" },
          { id: "TPL-02", title: "Delay Announcement", content: "The service to {city} scheduled for {time} is delayed.", variables: ["city", "time"], lastEdited: "1 week ago" }
        ];
      case 'mall':
        return [
          { id: "TPL-01", title: "Closing Notice", content: "Attention shoppers, the mall will be closing in {minutes} minutes.", variables: ["minutes"], lastEdited: "2 days ago" },
          { id: "TPL-02", title: "Lost Child", content: "A child named {child_name} is waiting at the {location} desk.", variables: ["child_name", "location"], lastEdited: "1 week ago" },
          { id: "TPL-03", title: "Sale Promotion", content: "Join us at {store_name} for a {discount_percent}% off sale until {time}.", variables: ["store_name", "discount_percent", "time"], lastEdited: "Just now" }
        ];
      default:
        return [];
    }
  };

  const [templates, setTemplates] = useState(getMockTemplates());

  useEffect(() => {
    setTemplates(getMockTemplates());
  }, [moduleType]);

  const handleDelete = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
    toast.success("Template deleted successfully");
  };

  const highlightVariables = (text: string) => {
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

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Message Templates</h2>
          <p className="text-muted-foreground">Manage your reusable announcement strings with dynamic variables.</p>
        </div>
        
        <Dialog>
          <DialogTrigger render={<Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-medium shadow-sm" />}>
            <Plus className="h-4 w-4" />
            Create Template
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] bg-card border-border">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Write your template and use {"{variable_name}"} to insert dynamic fields.
              </DialogDescription>
            </DialogHeader>
              <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="templateName">Template Title</Label>
                <Input id="templateName" placeholder="e.g. Delay Announcement" className="bg-secondary/30" />
              </div>
              <div className="space-y-2">
                <Label>Voice Profile</Label>
                <Select defaultValue="gemini-aoede">
                  <SelectTrigger className="bg-secondary/30 border-input w-full">
                    <SelectValue placeholder="Select Voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gemini 3.1 Flash</SelectLabel>
                      <SelectItem value="gemini-aoede">Aoede (Warm, Professional)</SelectItem>
                      <SelectItem value="gemini-charon">Charon (Deep, Authoritative)</SelectItem>
                      <SelectItem value="gemini-fenrir">Fenrir (Strong, Direct)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="templateContent">Content</Label>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono bg-secondary/50 px-1.5 py-0.5 rounded">Use {"{}"} for variables</span>
                </div>
                <textarea 
                  id="templateContent" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-secondary/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Attention passengers, Flight {flight_number} is delayed." 
                />
              </div>
              <div className="pt-2">
                <Label className="text-muted-foreground mb-2 block">Detected Variables Preview</Label>
                <div className="flex gap-2 min-h-[28px]">
                  <Badge variant="secondary" className="bg-primary/10 border border-primary/20 text-primary hover:bg-primary/10 text-xs font-mono shadow-sm">flight_number</Badge>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button onClick={() => {toast.success("Template created successfully!")}}>Save Template</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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

      {templates.length === 0 ? (
        <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm flex-1 flex flex-col items-center justify-center p-12 text-center h-[300px]">
          <div className="h-20 w-20 bg-secondary/50 rounded-full flex items-center justify-center mb-6">
            <FileX2 className="h-10 w-10 text-muted-foreground opacity-50" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No templates found</h3>
          <p className="text-muted-foreground max-w-sm mb-6">Get started by creating your first announcement template.</p>
          <Button onClick={() => setTemplates(getMockTemplates())} variant="outline" className="border-border hover:bg-secondary">
             Restore Mock Templates
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
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
                    <AlertDialog>
                      <AlertDialogTrigger render={<Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md" />}>
                          <Trash2 className="h-3.5 w-3.5" />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently delete the template "{template.title}" (ID: {template.id}). This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDelete(template.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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
      )}
    </div>
  );
}
