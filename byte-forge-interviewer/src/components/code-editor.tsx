"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Terminal } from "lucide-react";

const STARTER_CODE = `#include <cstdint>
#include <optional>
#include <unordered_map>

class MatchingEngine {
public:
    void addOrder(const Order& order) {
        // TODO: insert into the book and attempt a match
    }

    bool cancelOrder(uint64_t id) {
        // TODO: O(1) lookup, then erase from the price level
        return false;
    }

    std::optional<int64_t> bestBid() const {
        // TODO
        return std::nullopt;
    }
};
`;

export function CodeEditor() {
  const [code, setCode] = useState(STARTER_CODE);
  const lineCount = code.split("\n").length;

  return (
    <Card className="border-0 bg-[#0c0c0f] ring-1 ring-white/10">
      <CardHeader className="border-b border-border/70">
        <CardTitle className="flex items-center justify-between text-base">
          <span className="flex items-center gap-2">
            <Terminal className="size-4 text-blue-400" />
            solution.cpp
          </span>
          <Badge
            variant="outline"
            className="border-slate-700 text-[11px] text-slate-400"
          >
            C++ · g++ 13.2
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="overflow-hidden rounded-lg border border-border/70 bg-black/70 focus-within:border-blue-500/60 focus-within:ring-3 focus-within:ring-blue-500/20">
          <div className="flex items-center gap-1.5 border-b border-border/70 bg-white/[0.02] px-3 py-2">
            <span className="size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2.5 rounded-full bg-yellow-500/70" />
            <span className="size-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-xs text-slate-500">
              ~/byte-forge/solution.cpp
            </span>
          </div>
          <textarea
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
            aria-label="Code editor"
            className="code-scroll h-72 w-full resize-none bg-transparent p-4 font-mono text-[13px] leading-6 text-slate-200 caret-blue-400 outline-none placeholder:text-slate-600"
            placeholder="// Write your C/C++ solution here..."
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="font-mono text-xs text-slate-500">
            {lineCount} lines · {code.length} chars · UTF-8
          </p>
          <Button className="gap-2 bg-blue-600 text-white shadow-[0_0_20px_-4px_rgb(37_99_235)] hover:bg-blue-500">
            <Play className="size-4" />
            Submit Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
