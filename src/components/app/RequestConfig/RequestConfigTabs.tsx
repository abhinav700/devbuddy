"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BodyTab from "./BodyTab";
import HeadersTab from "./HeadersTab";
import ParamsTab from "./ParamsTab";
import { useState } from "react";

const RequestConfigTabs = () => {
  const classNames = {
    tabTrigger:
      "data-[state=active]:border-b-5 data-[state=active]:border-b-red-700 cursor-pointer",
  };

  const defaultRequestFormValue: RequestFormData = {
    "params": [],
    "headers":[],
    "body": "",
    "method": "GET",
  }

  const [requestFormState, setRequestFormState] = useState<RequestFormData>(defaultRequestFormValue);

  return (
    <Tabs defaultValue="params" className="ml-12">
      <TabsList>
        <TabsTrigger className={classNames.tabTrigger} value="params">
          Params
        </TabsTrigger>
        <TabsTrigger className={classNames.tabTrigger} value="headers">
          Headers
        </TabsTrigger>
        <TabsTrigger className={classNames.tabTrigger} value="body">
          Body
        </TabsTrigger>
      </TabsList>
      <TabsContent value="params" className="p-2">
        <ParamsTab requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </TabsContent>
      <TabsContent value="headers" className="p-2">
        <HeadersTab requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </TabsContent>
      <TabsContent value="body" className="p-2">
        <BodyTab requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </TabsContent>
    </Tabs>
  );
};

export default RequestConfigTabs;
