import { Input } from "@/components/ui/input";
import HttpVerbDropDown from "@/components/app/HttpVerbsDropdown";

const RequestUrlBar = () => {
  return (
   <div className="flex items-center justify-center w-[80%] border-1 border-black rounded-md">
          <HttpVerbDropDown />
          <span>|</span>
          <Input className=" border-1 outline-none" />
        </div>
  )
}

export default RequestUrlBar