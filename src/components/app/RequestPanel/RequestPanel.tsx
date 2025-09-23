"use client"
import RequestConfigTabs from "@/components/app/RequestPanel/RequestConfig/RequestConfigTabs";
import { useState } from "react";
import RequestUrlBar from "./RequestUrlBar";

type props = {
  setResponse: React.Dispatch<React.SetStateAction<any>>
}

export default function RequestPanel({setResponse} : props) {
  const defaultRequestFormValue: RequestFormData = {
    params: [{ key: "", value: "", checked: false }],
    headers: [{ key: "", value: "", checked: false }],
    body: "",
    method: "GET",
    url: "",
  };

  const [requestFormState, setRequestFormState] = useState<RequestFormData>(
    defaultRequestFormValue
  );

  return (
    <div className="flex flex-col py-2">
      <div className="flex items-center justify-around w-full">
        <RequestUrlBar setResponse={setResponse} requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </div>
      <RequestConfigTabs
        requestFormState={requestFormState}
        setRequestFormState={setRequestFormState}
      />
    </div>
  );
}
