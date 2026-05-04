import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Globe, Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function History() {
  const logs = [
    { id: 1, date: "2026-05-04 10:45", text: "Attention passengers. This is the final boarding call for flight KC-855.", language: "EN", voice: "Aoede", duration: 8, zone: "Zone A" },
    { id: 2, date: "2026-05-04 10:42", text: "Құрметті жолаушылар. KC-855 рейсіне отырғызу аяқталуға жақын.", language: "KZ", voice: "Aoede", duration: 9, zone: "Zone A" },
    { id: 3, date: "2026-05-04 09:15", text: "Attention. Please move the vehicle with license plate [02 AAA] immediately.", language: "EN", voice: "Fenrir", duration: 12, zone: "Parking" },
    { id: 4, date: "2026-05-03 18:30", text: "Уважаемые пассажиры, поезд задерживается на 20 минут.", language: "RU", voice: "Kore", duration: 7, zone: "All Zones" },
    { id: 5, date: "2026-05-03 12:00", text: "Attention shoppers. The mall will be closing in 15 minutes.", language: "EN", voice: "Puck", duration: 6, zone: "All Phones" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">History & Logs</h2>
        <p className="text-muted-foreground">Review past announcements, playback audio, and audit usage.</p>
      </div>

      <Card className="bg-card/60 backdrop-blur-sm border-border shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <CardTitle>Announcement Logs</CardTitle>
            <CardDescription>A complete history of all generated text-to-speech audio.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border/50 flex gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs by text..."
                className="w-full bg-secondary/30 border-input pl-10 shadow-sm"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Export CSV
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-secondary/30 text-muted-foreground text-xs uppercase font-semibold border-b border-border/50">
                <tr>
                  <th className="px-6 py-3">Timestamp</th>
                  <th className="px-6 py-3">Message Snippet</th>
                  <th className="px-6 py-3">Language / Voice</th>
                  <th className="px-6 py-3">Zone</th>
                  <th className="px-6 py-3">Duration</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">{log.date}</td>
                    <td className="px-6 py-4 font-medium max-w-[300px] truncate">{log.text}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary text-[10px] px-1.5 h-4 border-primary/20">
                          {log.language}
                        </Badge>
                        <span className="text-muted-foreground text-xs">{log.voice}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{log.zone}</td>
                    <td className="px-6 py-4 text-muted-foreground">{log.duration}s</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 gap-2 hover:bg-primary/10 hover:text-primary">
                        <PlayCircle className="h-4 w-4" />
                        Play
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
