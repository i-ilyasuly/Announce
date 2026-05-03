import { Card } from "@/components/ui/card";
import { Plane, Train, Bus, ShoppingBag, Mic2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ModuleSelect() {
  const navigate = useNavigate();

  const handleSelect = (moduleType: string) => {
    // We would save this in state/context, but for mock, just navigate
    navigate("/dashboard/live");
  };

  const modules = [
    {
      id: "airport",
      name: "Airport",
      description: "Flight announcements, boarding calls, and baggage claims.",
      icon: Plane,
      color: "bg-blue-500/10 text-blue-500",
      hoverBorder: "hover:border-blue-500"
    },
    {
      id: "train",
      name: "Train Station",
      description: "Platform updates, train arrivals, and delays.",
      icon: Train,
      color: "bg-emerald-500/10 text-emerald-500",
      hoverBorder: "hover:border-emerald-500"
    },
    {
      id: "bus",
      name: "Bus Station",
      description: "Route schedules, gate changes, and general alerts.",
      icon: Bus,
      color: "bg-amber-500/10 text-amber-500",
      hoverBorder: "hover:border-amber-500"
    },
    {
      id: "mall",
      name: "Shopping Mall",
      description: "Promotions, lost children, and closing time warnings.",
      icon: ShoppingBag,
      color: "bg-purple-500/10 text-purple-500",
      hoverBorder: "hover:border-purple-500"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 p-6 sm:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e50a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e50a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="z-10 flex w-full max-w-6xl flex-col gap-12 mt-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
              <Mic2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-zinc-100">Announce</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <span>admin@dictor.kz</span>
            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center font-medium text-zinc-300">
              A
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full mt-4">
          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Select your facility
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Choose the environment you want to manage. The interface and announcement templates will adapt to your selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id}
                className={`group relative overflow-hidden flex flex-col justify-between border-zinc-800 bg-zinc-900/40 p-8 hover:bg-zinc-800/60 transition-all cursor-pointer ${module.hoverBorder}`}
                onClick={() => handleSelect(module.id)}
              >
                <div className="space-y-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${module.color}`}>
                    <module.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-100 mb-2">{module.name}</h3>
                    <p className="text-zinc-400 leading-relaxed">{module.description}</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  Open Workspace
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
