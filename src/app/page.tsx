import { Input } from "@/components/ui/input";
import HttpVerbDropDown from "@/components/app/HttpVerbsDropdown";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-around w-full">

      <div className="flex items-center justify-center w-[80%] border-1 border-black rounded-md">
        <HttpVerbDropDown/>
        <span>|</span>
        <Input className=" border-1 outline-none" />
      </div>
        <Button className="bg-blue-500 w-[100px] text-center font-semibold">Send</Button>
      </div>
    </div>
  );
}
