import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { KeyRound, Building2, Globe, Save } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Settings</h2>
        <p className="text-muted-foreground">Manage platform configurations, API integrations, and facility details.</p>
      </div>

      <div className="grid gap-8">
        
        {/* Facility Details */}
        <Card className="border-zinc-800 bg-zinc-900/40">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-indigo-400" />
              <CardTitle>Facility Details</CardTitle>
            </div>
            <CardDescription>
              Basic information about your operational environment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="facility-name" className="text-zinc-300">Facility Name</Label>
                <Input 
                  id="facility-name" 
                  defaultValue="Almaty International Airport" 
                  className="bg-zinc-950 border-zinc-800 focus-visible:ring-indigo-500" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facility-code" className="text-zinc-300">Facility Code (IATA / Station ID)</Label>
                <Input 
                  id="facility-code" 
                  defaultValue="ALA" 
                  className="bg-zinc-950 border-zinc-800 focus-visible:ring-indigo-500" 
                />
              </div>
            </div>

            <Separator className="bg-zinc-800" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-zinc-300 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-zinc-500" />
                  Timezone
                </Label>
                <Select defaultValue="asia-almaty">
                  <SelectTrigger className="bg-zinc-950 border-zinc-800 focus:ring-indigo-500">
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="asia-almaty">Asia/Almaty (GMT+5)</SelectItem>
                    <SelectItem value="asia-astana">Asia/Astana (GMT+5)</SelectItem>
                    <SelectItem value="europe-london">Europe/London (GMT+0)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-zinc-500 mt-1">This timezone is used for scheduling and log timestamps.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-zinc-950/30 border-t border-zinc-800 py-4">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white ml-auto">
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* API Configurations */}
        <Card className="border-zinc-800 bg-zinc-900/40">
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-indigo-400" />
              <CardTitle>API Configuration</CardTitle>
            </div>
            <CardDescription>
              Securely connect to external AI services and Text-to-Speech engines.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="google-tts" className="text-zinc-300">Google Cloud TTS API Key</Label>
              <div className="flex gap-2">
                <Input 
                  id="google-tts" 
                  type="password"
                  defaultValue="AIzaSyA8Bds8sd8sfd88sfa8sf8dSF" 
                  className="bg-zinc-950 border-zinc-800 focus-visible:ring-indigo-500 font-mono" 
                />
                <Button variant="outline" className="border-zinc-800 bg-zinc-900">Verify</Button>
              </div>
              <p className="text-xs text-emerald-500 font-medium">Status: Connected & Verified</p>
            </div>

            <Separator className="bg-zinc-800" />

            <div className="space-y-2">
              <Label htmlFor="fids-api" className="text-zinc-300">FIDS Webhook URL (For Schedule Sync)</Label>
              <div className="flex gap-2">
                <Input 
                  id="fids-api" 
                  defaultValue="https://api.dictor.kz/v1/webhooks/fids/ALA" 
                  readOnly
                  className="bg-zinc-950 border-zinc-800 text-zinc-500 font-mono cursor-not-allowed" 
                />
                <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">Copy</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-zinc-950/30 border-t border-zinc-800 py-4">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white ml-auto">
              <Save className="mr-2 h-4 w-4" /> Save API Keys
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
