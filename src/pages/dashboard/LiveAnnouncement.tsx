import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayCircle, Volume2, Sparkles, AlertCircle, Clock, VolumeX } from "lucide-react";
import { useState } from "react";
import { useModule } from "@/src/components/module-provider";

export default function LiveAnnouncement() {
  const [text, setText] = useState("");
  const { moduleType } = useModule();

  const getQuickActions = () => {
    switch(moduleType) {
      case 'airport':
        return [
          { label: "Child Lost", icon: AlertCircle, color: "text-destructive", text: "Attention customers. A child has been found and is waiting at the main information desk." },
          { label: "Final Call", icon: Volume2, color: "text-emerald-500", text: "Attention passengers. This is the final boarding call for flight KC-855." },
          { label: "Delay Notice", icon: Clock, color: "text-blue-500", text: "We apologize, but flight KC-855 is delayed. Please await further instructions." },
        ];
      case 'train':
        return [
          { label: "Child Lost", icon: AlertCircle, color: "text-destructive", text: "Attention passengers. A child has been found and is waiting at the station manager's office." },
          { label: "Platform Change", icon: Volume2, color: "text-amber-500", text: "Attention. Train 45 to Astana will now depart from Platform 2." },
          { label: "Arrival Notice", icon: Clock, color: "text-emerald-500", text: "The train arriving at Platform 1 is the 14:00 service to Almaty." },
        ];
      case 'bus':
        return [
          { label: "Boarding Now", icon: Volume2, color: "text-emerald-500", text: "Attention passengers. The bus to Shymkent is now boarding at Gate 3." },
          { label: "Bus Delayed", icon: Clock, color: "text-blue-500", text: "We apologize, but the 15:30 service is delayed due to weather conditions." },
          { label: "Car Parking", icon: AlertCircle, color: "text-amber-500", text: "Attention. Please move the vehicle with license plate [AAA 01] from the bus lane." },
        ];
      case 'mall':
        return [
          { label: "Child Lost", icon: AlertCircle, color: "text-destructive", text: "Attention shoppers. A child named Arman is waiting at the customer service desk." },
          { label: "Car Parking", icon: Clock, color: "text-amber-500", text: "Attention. Please move the vehicle with license plate [02 AAA] immediately from the loading zone." },
          { label: "Closing Time", icon: Volume2, color: "text-blue-500", text: "Attention shoppers. The mall will be closing in 15 minutes. Please proceed to the exits." },
        ];
    }
  };

  const getPlaceholder = () => {
    switch(moduleType) {
      case 'airport': return "Type your announcement here... e.g., 'Attention passengers, Flight KC-855 to Almaty is now boarding at Gate 5.'";
      case 'train': return "Type your announcement here... e.g., 'Attention passengers, Train 12 to Shymkent is arriving at Platform 3.'";
      case 'bus': return "Type your announcement here... e.g., 'Attention passengers, Bus 104 is now boarding at Bay 2.'";
      case 'mall': return "Type your announcement here... e.g., 'Attention shoppers, our 50% weekend sale is now active on the ground floor.'";
    }
  };

  const quickActions = getQuickActions();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Live Announcement</h2>
        <p className="text-muted-foreground">Type or select a template to generate real-time AI voice announcements.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="xl:col-span-2 space-y-6">
          <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm">
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-primary" />
                    Message Editor
                  </CardTitle>
                  <CardDescription>Enter the text you want to be spoken</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="bg-secondary/50 border-border hover:bg-secondary">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  AI Improve
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickActions.map((action, i) => (
                  <Button 
                    key={i} 
                    variant="secondary" 
                    size="sm" 
                    className="rounded-full bg-secondary/80 hover:bg-secondary border border-border/50 transition-all font-medium text-xs"
                    onClick={() => setText(action.text)}
                  >
                    <action.icon className={`mr-2 h-3.5 w-3.5 ${action.color}`} />
                    {action.label}
                  </Button>
                ))}
              </div>
              
              <Textarea 
                placeholder={getPlaceholder()} 
                className="min-h-[220px] text-lg lg:text-xl leading-relaxed resize-none bg-background/50 border-input shadow-inner focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              
              <div className="flex justify-between items-center text-sm mt-2 text-muted-foreground">
                <span className="flex items-center gap-1.5">
                   <Clock className="h-3.5 w-3.5" />
                   Estimated ~{Math.max(1, Math.round(text.length / 15))} seconds
                </span>
                <span className="font-medium">{text.length} / 500</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Controls */}
        <div className="space-y-6 flex flex-col">
          <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm flex-1">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="text-lg">Voice Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Language Profile</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-background border-input shadow-sm h-11">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">🇺🇸 English (US)</SelectItem>
                    <SelectItem value="kk">🇰🇿 Kazakh (KZ)</SelectItem>
                    <SelectItem value="ru">🇷🇺 Russian (RU)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold">AI Voice Engine</Label>
                <Select defaultValue="neural2-f">
                  <SelectTrigger className="bg-background border-input shadow-sm h-11">
                    <SelectValue placeholder="Select Voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neural2-f">Professional Female (Neural2)</SelectItem>
                    <SelectItem value="neural2-d">Authoritative Male (Neural2)</SelectItem>
                    <SelectItem value="standard-a">Standard Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold">Speaker Zoning</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-background border-input shadow-sm h-11">
                    <SelectValue placeholder="Select Zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All {moduleType === 'mall' ? 'Floors' : 'Terminals/Platforms'}</SelectItem>
                    <SelectItem value="t1">Zone A Only</SelectItem>
                    <SelectItem value="gates">Specific Area Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button 
              className={`w-full h-14 text-lg gap-3 font-semibold shadow-lg transition-all ${
                text.length > 0 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25' 
                  : 'bg-muted text-muted-foreground shadow-none cursor-not-allowed hover:bg-muted'
              }`}
            >
              <PlayCircle className={`h-6 w-6 ${text.length > 0 ? "animate-pulse" : ""}`} />
              Generate & Play
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 gap-2 text-muted-foreground hover:text-foreground border-border hover:bg-secondary"
              onClick={() => setText("")}
            >
              <VolumeX className="h-4 w-4" />
              Clear Selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
