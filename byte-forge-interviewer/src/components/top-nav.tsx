import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Radio } from "lucide-react";

export function TopNav() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border/80 bg-[#09090b]/80 px-4 backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold tracking-tight">
          Byte<span className="text-blue-500">Forge</span> Interviewer
        </span>
      </div>

      <Badge
        variant="outline"
        className="h-6 gap-1.5 border-blue-500/30 bg-blue-500/10 px-2.5 text-[11px] font-medium tracking-wide text-blue-400 uppercase"
      >
        <Radio className="size-3" />
        Live Evaluation
      </Badge>

      <div className="flex items-center gap-3">
        <div className="hidden text-right leading-tight sm:block">
          <p className="text-sm font-medium">Divyesh</p>
          <p className="text-xs text-muted-foreground">C++ Developer</p>
        </div>
        <Avatar className="size-9 ring-1 ring-blue-500/40">
          <AvatarFallback className="bg-blue-600/20 text-sm font-semibold text-blue-300">
            DP
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
