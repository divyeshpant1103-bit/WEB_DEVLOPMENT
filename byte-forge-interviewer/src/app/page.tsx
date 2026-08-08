import { TopNav } from "@/components/top-nav";
import { AssignmentContext } from "@/components/assignment-context";
import { CodeEditor } from "@/components/code-editor";
import { AiChat } from "@/components/ai-chat";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[#09090b]">
      <TopNav />
      <ResizablePanelGroup orientation="horizontal" className="flex-1 min-h-0">
        <ResizablePanel defaultSize="60" minSize="35">
          <div className="code-scroll h-full space-y-4 overflow-y-auto p-4">
            <AssignmentContext />
            <CodeEditor />
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="bg-border/80 transition-colors hover:bg-blue-600/60"
        />
        <ResizablePanel defaultSize="40" minSize="25">
          <div className="h-full p-4">
            <AiChat />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
