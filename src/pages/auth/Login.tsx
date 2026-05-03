import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mic2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/module-select");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e511_1px,transparent_1px),linear-gradient(to_bottom,#4f46e511_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="z-10 flex w-full max-w-md flex-col items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            <Mic2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-zinc-100">Announce</span>
        </div>

        <Card className="w-full border-zinc-800 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold tracking-tight text-center text-zinc-100">
              Welcome back
            </CardTitle>
            <CardDescription className="text-center text-zinc-400">
              Enter your credentials to access your workspace
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  required 
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-indigo-500" 
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-zinc-300">Password</Label>
                  <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-indigo-500" 
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <p className="text-center text-sm text-zinc-500">
          Secure Multi-tenant SaaS Platform
        </p>
      </div>
    </div>
  );
}
