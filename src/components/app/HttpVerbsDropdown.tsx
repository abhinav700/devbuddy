"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

const HttpVerbDropDown = () => {
  const [httpVerb, setHttpVerb] = useState<string>("GET");
  return (
    <Select  value={httpVerb} onValueChange={(value) => setHttpVerb(value)}>
      <SelectTrigger className="w-[120px] text-center outline-none">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="GET">GET</SelectItem>
          <SelectItem value="POST">POST</SelectItem>
          <SelectItem value="PUT">PUT</SelectItem>
          <SelectItem value="DELETE">DELETE</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

// export function DropdownMenuDemo() {
//   return (
//       <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <DropdownMenuItem className="cursor-pointer hover:bg-red-400 transition-colors duration-200 ease-in">
//               POST
//             </DropdownMenuItem>
//             <DropdownMenuItem className="cursor-pointer hover:bg-red-400 transition-colors duration-200 ease-in">
//               PUT
//             </DropdownMenuItem>
//             <DropdownMenuItem className="cursor-pointer hover:bg-red-400 transition-colors duration-200 ease-in">
//               DELETE
//             </DropdownMenuItem>
//             <Button
//               variant="ghost"
//               className="cursor-pointer border-0 outline-none tex"
//             >
//               GET
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56" align="start">
//             <DropdownMenuGroup>
//               <DropdownMenuItem className="cursor-pointer hover:bg-red-400 ">
//                 GET
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//   )
// }
export default HttpVerbDropDown;