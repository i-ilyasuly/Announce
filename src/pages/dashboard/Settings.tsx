import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { KeyRound, Building2, Globe, Save, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useModule } from "@/src/components/module-provider";

export default function Settings() {
  const { moduleType, facilityName, setFacilityName } = useModule();

  const getSystemTerm = () => {
    switch(moduleType) {
      case 'airport': return "FIDS (Flight Information Display System)";
      case 'train': return "PIDS (Passenger Information Display System)";
      case 'bus': return "Scheduling System";
      case 'mall': return "PA (Public Address) System";
    }
  };

  const getFacilityCode = () => {
    switch(moduleType) {
      case 'airport': return "ALA";
      case 'train': return "SHY-C";
      case 'bus': return "SML-BUS";
      case 'mall': return "MGA-ALM";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto xl:mx-0">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Platform Settings</h2>
        <p className="text-muted-foreground">Manage platform configurations, API integrations, and facility details.</p>
      </div>

      <div className="grid gap-6">
        
        {/* Facility Details */}
        <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Facility Configuration</CardTitle>
                <CardDescription>
                  Basic information about your operational environment.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <Separator className="bg-border/50" />
          
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label htmlFor="facility-name" className="text-foreground font-semibold">Facility Name</Label>
                <Input 
                  id="facility-name" 
                  value={facilityName} 
                  onChange={(e) => setFacilityName(e.target.value)}
                  className="bg-background border-input shadow-sm h-11" 
                />
              </div>
              <div className="space-y-2.5">
                <Label htmlFor="facility-code" className="text-foreground font-semibold flex items-center gap-2">
                  Facility Code
                  <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                </Label>
                <Input 
                  id="facility-code" 
                  defaultValue={getFacilityCode()} 
                  className="bg-background border-input shadow-sm h-11 uppercase" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <Label className="text-foreground font-semibold flex items-center gap-2">
                  Timezone
                </Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                  <Select defaultValue="asia-almaty">
                    <SelectTrigger className="bg-background border-input shadow-sm h-11 pl-10">
                      <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-almaty">Asia/Almaty (GMT+5)</SelectItem>
                      <SelectItem value="asia-astana">Asia/Astana (GMT+5)</SelectItem>
                      <SelectItem value="europe-london">Europe/London (GMT+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-[13px] text-muted-foreground mt-1.5 font-medium">This timezone affects automated schedule triggers.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-secondary/30 border-t border-border/50 py-4 px-6 flex justify-end">
            <Button className="font-semibold shadow-sm px-6">
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* API Configurations */}
        <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <KeyRound className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl">Integrations & API</CardTitle>
                <CardDescription>
                  Secure connection keys for AI services and external systems.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <Separator className="bg-border/50" />
          
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="google-tts" className="text-foreground font-semibold">Gemini API Key (Flash TTS)</Label>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Active</span>
              </div>
              <div className="flex gap-3">
                <Input 
                  id="google-tts" 
                  type="password"
                  defaultValue="vV98ds09f89vV-s098fsd09f_s09f8vV9" 
                  className="bg-background border-input font-mono shadow-sm h-11" 
                />
                <Button variant="outline" className="h-11 px-6 font-semibold shadow-sm border-border">Verify Key</Button>
              </div>
            </div>

            <Separator className="bg-border/50" />

            <div className="space-y-3">
              <Label htmlFor="fids-api" className="text-foreground font-semibold">{getSystemTerm()} Webhook URL (Read-Only)</Label>
              <div className="flex gap-3">
                <Input 
                  id="fids-api" 
                  defaultValue={`https://api.announce.ai/v1/webhooks/${moduleType}/webhook-endpoint`} 
                  readOnly
                  className="bg-muted border-input text-muted-foreground font-mono cursor-not-allowed shadow-inner h-11" 
                />
                <Button variant="secondary" className="h-11 px-6 font-semibold border-border border shadow-sm">Copy</Button>
              </div>
              <p className="text-[13px] text-muted-foreground font-medium">Provide this URL to your external system to push live status updates.</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
