"use client"
import RequestConfigTabs from "@/components/app/RequestConfig/RequestConfigTabs";
import RequestUrlBar from "@/components/app/RequestUrlBar";
import { useState } from "react";

export default function Home() {
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
        <RequestUrlBar requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </div>
      <RequestConfigTabs
        requestFormState={requestFormState}
        setRequestFormState={setRequestFormState}
      />
    </div>
  );
}
