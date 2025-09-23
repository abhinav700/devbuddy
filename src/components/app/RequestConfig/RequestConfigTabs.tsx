"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import FieldTab from "./FieldTab";
import BodyTab from "./Body/BodyTab";

type Props = {
  requestFormState: RequestFormData;
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>;
};

const RequestConfigTabs = ({requestFormState, setRequestFormState}: Props) => {
  const classNames = {
    tabTrigger:
      "data-[state=active]:border-b-5 data-[state=active]:border-b-red-700 cursor-pointer",
  };


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
        <>
          <p>Query Params</p>
          <FieldTab fieldType="params" requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
        </>
      </TabsContent>
      <TabsContent value="headers" className="p-2">
        <>
          <p>Headers</p>
          <FieldTab fieldType="headers" requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
        </>
      </TabsContent>
      <TabsContent value="body" className="p-2">
        <BodyTab requestFormState={requestFormState} setRequestFormState={setRequestFormState} />
      </TabsContent>
    </Tabs>
  );
};

export default RequestConfigTabs;
