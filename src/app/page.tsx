"use client"
import RequestPanel from "@/components/app/RequestPanel/RequestPanel";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  const [response, setResponse] = useState<any>(null);

  return (
       <ResizablePanelGroup
      direction="vertical"
      className="min-h-[100vh] max-w-[100vw]  rounded-lg border-1 border-black"
    >
      <ResizablePanel defaultSize={80}>
      <RequestPanel setResponse={setResponse}/>
      </ResizablePanel>
      <ResizableHandle className="border-1 border-black" />
      <ResizablePanel defaultSize={20}>
        < div className="p-2 h-full overflow-auto">
          <pre className="text-sm text-left">
            {response ? response : "Response will be shown here"}
          </pre>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default page;
