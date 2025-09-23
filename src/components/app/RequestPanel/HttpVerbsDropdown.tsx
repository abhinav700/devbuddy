"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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


export default HttpVerbDropDown;