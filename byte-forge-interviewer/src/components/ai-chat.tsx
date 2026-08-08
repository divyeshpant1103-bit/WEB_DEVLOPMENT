"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  author: "agent" | "candidate";
  text: string;
  time: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    author: "agent",
    text: "Welcome Divyesh. You have 45 minutes for the matching engine task. Before you write any code, walk me through the container you intend to use for the order book.",
    time: "09:00",
  },
  {
    id: 2,
    author: "candidate",
    text: "I'd keep a std::map<int64_t, std::list<Order>> per side so price levels stay sorted, plus an unordered_map from order id to a list iterator for O(1) cancels.",
    time: "09:02",
  },
  {
    id: 3,
    author: "agent",
    text: "Good — iterator stability in std::list is the key property there. What happens to that iterator when the price level becomes empty and you erase it from the map?",
    time: "09:03",
  },
  {
    id: 4,
    author: "candidate",
    text: "The id → iterator entry has to be erased first, otherwise it dangles. I'd remove the id mapping in the same step that pops the order from its level.",
    time: "09:05",
  },
  {
    id: 5,
    author: "agent",
    text: "Correct. Now consider the 64 MB budget with 10^6 orders — estimate the per-order overhead of your design and tell me whether it fits.",
    time: "09:06",
  },
];

export function AiChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        author: "candidate",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setDraft("");
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#0c0c0f] ring-1 ring-white/10">
      <div className="flex shrink-0 items-center justify-between border-b border-border/70 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
            <Bot className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium">AI Evaluator</p>
            <p className="text-xs text-muted-foreground">
              Byte Forge Agent v2.1
            </p>
          </div>
        </div>
        <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Active
        </span>
      </div>

      <div className="chat-scroll flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => {
          const isAgent = message.author === "agent";
          return (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2",
                isAgent ? "justify-start" : "justify-end"
              )}
            >
              {isAgent && (
                <Avatar className="size-7 shrink-0">
                  <AvatarFallback className="bg-slate-800 text-[10px] text-blue-300">
                    AI
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  isAgent
                    ? "rounded-bl-sm bg-slate-800/80 text-slate-200"
                    : "rounded-br-sm bg-blue-600 text-white"
                )}
              >
                <p>{message.text}</p>
                <p
                  className={cn(
                    "mt-1 text-[10px]",
                    isAgent ? "text-slate-500" : "text-blue-200/80"
                  )}
                >
                  {message.time}
                </p>
              </div>
              {!isAgent && (
                <Avatar className="size-7 shrink-0">
                  <AvatarFallback className="bg-blue-600/25 text-[10px] text-blue-200">
                    DP
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          );
        })}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
        className="flex shrink-0 items-center gap-2 border-t border-border/70 bg-black/30 p-3"
      >
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Explain your logic..."
          aria-label="Message the AI evaluator"
          className="h-10 flex-1 border-border/70 bg-black/50 text-sm"
        />
        <Button
          type="submit"
          size="icon"
          aria-label="Send message"
          className="size-10 shrink-0 bg-blue-600 text-white hover:bg-blue-500"
        >
          <SendHorizontal className="size-4" />
        </Button>
      </form>
    </div>
  );
}
