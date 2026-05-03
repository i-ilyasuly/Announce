import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit3, Trash2, FileText, Variable } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Templates() {
  const mockTemplates = [
    {
      id: "TPL-01",
      title: "Flight Boarding",
      content: "Attention passengers, Flight {flight_number} to {city} is now boarding at Gate {gate}.",
      variables: ["flight_number", "city", "gate"],
      lastEdited: "2 days ago"
    },
    {
      id: "TPL-02",
      title: "Delay Announcement",
      content: "We regret to inform you that Flight {flight_number} is delayed by {delay_time} minutes due to {reason}.",
      variables: ["flight_number", "delay_time", "reason"],
      lastEdited: "1 week ago"
    },
    {
      id: "TPL-03",
      title: "Final Call",
      content: "This is the final boarding call for passenger {passenger_name} on Flight {flight_number}.",
      variables: ["passenger_name", "flight_number"],
      lastEdited: "Just now"
    },
    {
      id: "TPL-04",
      title: "Security Request",
      content: "Security personnel, please report to {location} immediately.",
      variables: ["location"],
      lastEdited: "1 month ago"
    }
  ];

  const highlightVariables = (text: string) => {
    // Simple way to highlight {variable} in the text string
    const parts = text.split(/(\{.*?\})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return <span key={index} className="text-indigo-400 bg-indigo-500/10 px-1 rounded-md font-mono text-xs mx-0.5">{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Message Templates</h2>
          <p className="text-muted-foreground">Manage your reusable announcement strings with dynamic variables.</p>
        </div>
        
        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2 shadow-lg shadow-indigo-600/20">
          <Plus className="h-4 w-4" />
          Create Template
        </Button>
      </div>

      <div className="flex items-center gap-4 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search templates..."
            className="w-full bg-zinc-900 border-zinc-800 pl-10 focus-visible:ring-indigo-500"
          />
        </div>
        <Button variant="outline" className="border-zinc-800 bg-zinc-900 text-zinc-300">
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTemplates.map((template) => (
          <Card key={template.id} className="border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors flex flex-col">
            <CardHeader className="pb-3 border-b border-zinc-800/50">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-800/50 rounded-lg">
                    <FileText className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-zinc-100">{template.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">ID: {template.id} • Edited {template.lastEdited}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-400/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-1">
              <p className="text-zinc-300 leading-relaxed text-sm">
                {highlightVariables(template.content)}
              </p>
            </CardContent>
            <CardFooter className="bg-zinc-950/30 border-t border-zinc-800/50 py-3 flex gap-2 flex-wrap">
              <Variable className="h-4 w-4 text-zinc-500 mr-1" />
              {template.variables.map((v, i) => (
                <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border-zinc-700/50 text-xs font-mono">
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
