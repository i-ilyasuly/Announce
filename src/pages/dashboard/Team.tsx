import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Search, Plus, MoreHorizontal, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Team() {
  const teamMembers = [
    { id: 1, name: "Super Admin", email: "admin@announce.ai", role: "Owner", active: true },
    { id: 2, name: "Aizhan Nurmagambetova", email: "aizhan@announce.ai", role: "Admin", active: true },
    { id: 3, name: "Marat Ospanov", email: "marat@airport.kz", role: "Editor", active: true },
    { id: 4, name: "Dinara Kasymova", email: "dinara@mall.kz", role: "Viewer", active: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Team Settings</h2>
          <p className="text-muted-foreground">Manage your team members and their roles.</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <Card className="border-border bg-card/60 backdrop-blur-sm shadow-sm">
        <CardHeader className="border-b border-border/50 pb-4">
          <CardTitle>Team Members</CardTitle>
          <CardDescription>People who have access to this workspace.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 border-b border-border/50">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="w-full bg-secondary/30 border-input pl-10 shadow-sm"
              />
            </div>
          </div>
          <div className="divide-y divide-border/50">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`} />
                    <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{member.name}</p>
                      {member.role === 'Owner' && <Badge variant="secondary" className="text-[10px] h-4 px-1">Owner</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {member.active ? (
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Active</Badge>
                  ) : (
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">Invited</Badge>
                  )}
                  <span className="text-sm text-muted-foreground w-20 text-right">{member.role}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" />}>
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Role</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Remove from team</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
