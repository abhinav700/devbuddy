"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import HttpVerbDropDown from "./HttpVerbsDropdown";

type Props = {
  requestFormState: RequestFormData;
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>;
  setResponse: React.Dispatch<React.SetStateAction<any>>
};

const RequestUrlBar = ({ requestFormState, setRequestFormState, setResponse }: Props) => {
  const [parsedJsonBody, setParsedJsonBody] = useState<any>(null);

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setRequestFormState((prev: RequestFormData) => ({
        ...prev,
        url: e.target.value,
      }));
    } catch (e) {
      console.log("Error in inputOnChangeHandler", e);
    }
  };

  const parseRequestBody = () => {
    try {
      const parsed = JSON.parse(requestFormState.body);
      setParsedJsonBody(parsed);
    } catch (e) {
      alert("Invalid JSON");
    }
  };

  function keyValuePairsToObject(pairs: KeyValuePair[]): Record<string, string> {
  return pairs.reduce<Record<string, string>>((acc, { key, value, checked }) => {
    if (checked && key.trim()) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

const sendRequestHandler = async () => {
  try{
    if(!requestFormState.url || !requestFormState.url.trim()){
      alert("URL is required");
      return;
    }

    const params = keyValuePairsToObject(requestFormState.params);
    const headers = keyValuePairsToObject(requestFormState.headers);
    
    parseRequestBody();
    
    const response = await axios.request({
      method: requestFormState.method,
      url: requestFormState.url,
      params,
      headers,
      data: parsedJsonBody,
    })

    setResponse(response);
    console.log(params);
    console.log(headers);
  }catch(e){
    console.log("Error in sendRequestHandler", e);
    setResponse(e);
  }
}
 
  return (
    <div className="flex items-center justify-center w-[80%] border-1 border-black rounded-md">
      <HttpVerbDropDown />
      <span>|</span>
      <Input
        onChange={inputOnChangeHandler}
        value={requestFormState.url}
        className=" border-1 outline-none"
      />
      <Button onClick={sendRequestHandler} className="bg-blue-500 w-[100px] text-center font-semibold cursor-pointer">
        Send
      </Button>
    </div>
  );
};

export default RequestUrlBar;
