import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode2 } from "lucide-react";

const constraints = [
  "1 ≤ number of orders ≤ 10^6, processed as a stream",
  "Order IDs are 64-bit unsigned integers and may repeat",
  "Peak memory budget: 64 MB — no full-stream buffering",
  "Target: O(log n) insert and O(1) best-bid lookup",
];

const deliverables = [
  "A MatchingEngine class exposing addOrder, cancelOrder and bestBid",
  "RAII-based ownership — no raw new/delete in the public path",
  "Explain your container choice and its complexity trade-offs",
];

export function AssignmentContext() {
  return (
    <Card className="border-0 bg-[#0c0c0f] ring-1 ring-white/10">
      <CardHeader className="border-b border-border/70">
        <CardTitle className="flex items-center gap-2 text-base">
          <FileCode2 className="size-4 text-blue-400" />
          Assignment Context
        </CardTitle>
        <CardDescription>
          Round 2 · Systems Engineering · C++ Developer (Backend Core)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 text-sm">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-slate-800 text-slate-300">
            C++17
          </Badge>
          <Badge variant="secondary" className="bg-slate-800 text-slate-300">
            Data Structures
          </Badge>
          <Badge variant="secondary" className="bg-slate-800 text-slate-300">
            Memory Safety
          </Badge>
          <Badge variant="secondary" className="bg-slate-800 text-slate-300">
            45 min
          </Badge>
        </div>

        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Problem Statement
          </h3>
          <p className="leading-relaxed text-slate-300">
            Implement an in-memory order matching engine for a trading venue.
            Orders stream in continuously and must be matched against the
            opposite side of the book by best price, then by arrival time. The
            engine must support cancellation of any resting order by its ID
            while the stream is still being consumed.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Constraints
          </h3>
          <ul className="space-y-1.5 text-slate-300">
            {constraints.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Deliverables
          </h3>
          <ul className="space-y-1.5 text-slate-300">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-600" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Provided Signature
          </h3>
          <pre className="overflow-x-auto rounded-lg border border-border/70 bg-black/60 p-3 font-mono text-xs leading-relaxed text-slate-300">
            {`struct Order {
    uint64_t id;
    int64_t  price;   // in ticks
    uint32_t qty;
    bool     is_buy;
};

class MatchingEngine {
public:
    void addOrder(const Order& order);
    bool cancelOrder(uint64_t id);
    std::optional<int64_t> bestBid() const;
};`}
          </pre>
        </section>
      </CardContent>
    </Card>
  );
}
