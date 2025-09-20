import RequestConfigTabs from "@/components/app/RequestConfig/RequestConfigTabs";
import RequestUrlBar from "@/components/app/RequestUrlBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col py-2">
      <div className="flex items-center justify-around w-full">
        <RequestUrlBar/> 
        <Button className="bg-blue-500 w-[100px] text-center font-semibold cursor-pointer">
          Send
        </Button>
      </div>
      <RequestConfigTabs/>
    </div>
  );
}
