import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayCircle, Volume2, Sparkles, AlertCircle, Clock, VolumeX } from "lucide-react";

export default function LiveAnnouncement() {
  const quickActions = [
    { label: "Child Lost", icon: AlertCircle, color: "text-red-400" },
    { label: "Car Parking", icon: Clock, color: "text-amber-400" },
    { label: "Final Call", icon: Volume2, color: "text-emerald-400" },
    { label: "Delay Notice", icon: Clock, color: "text-blue-400" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Live Announcement</h2>
        <p className="text-muted-foreground">Type or select a template to generate real-time AI voice announcements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/40">
            <CardHeader className="pb-4 border-b border-zinc-800/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Message Editor</CardTitle>
                  <CardDescription>Enter the text you want to be spoken</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-zinc-700 bg-zinc-800/50 text-zinc-300">
                  <Sparkles className="mr-2 h-4 w-4 text-indigo-400" />
                  AI Improve
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickActions.map((action, i) => (
                  <Button key={i} variant="secondary" size="sm" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full">
                    <action.icon className={`mr-2 h-3.5 w-3.5 ${action.color}`} />
                    {action.label}
                  </Button>
                ))}
              </div>
              
              <Textarea 
                placeholder="Type your announcement here... e.g., 'Attention passengers, Flight KC-855 to Almaty is now boarding at Gate 5.'" 
                className="min-h-[200px] text-lg lg:text-xl leading-relaxed resize-none bg-zinc-950/50 border-zinc-800 focus-visible:ring-indigo-500"
              />
              
              <div className="flex justify-between items-center text-sm text-zinc-500 mt-2">
                <span>Estimated duration: ~15 seconds</span>
                <span>120 / 500 characters</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/40">
            <CardHeader>
              <CardTitle className="text-lg">Voice Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label className="text-zinc-400">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-zinc-950 border-zinc-800 focus:ring-indigo-500">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                    <SelectItem value="en">English (US)</SelectItem>
                    <SelectItem value="kk">Kazakh (KZ)</SelectItem>
                    <SelectItem value="ru">Russian (RU)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-zinc-400">AI Voice Model</Label>
                <Select defaultValue="neural2-f">
                  <SelectTrigger className="bg-zinc-950 border-zinc-800 focus:ring-indigo-500">
                    <SelectValue placeholder="Select Voice" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                    <SelectItem value="neural2-f">Professional Female (Neural2)</SelectItem>
                    <SelectItem value="neural2-d">Authoritative Male (Neural2)</SelectItem>
                    <SelectItem value="standard-a">Standard Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-zinc-400">Output Zone</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-zinc-950 border-zinc-800 focus:ring-indigo-500">
                    <SelectValue placeholder="Select Zone" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                    <SelectItem value="all">All Terminals</SelectItem>
                    <SelectItem value="t1">Terminal 1 Only</SelectItem>
                    <SelectItem value="gates">Gate Areas Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] gap-3 font-semibold">
            <PlayCircle className="h-6 w-6" />
            Generate & Play
          </Button>
          
          <Button variant="outline" className="w-full h-12 border-zinc-800 bg-transparent text-zinc-400 hover:text-white gap-2">
            <VolumeX className="h-4 w-4" />
            Clear / Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
