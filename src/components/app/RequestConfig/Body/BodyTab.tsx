import React, { useState } from "react";
import { json } from "@codemirror/lang-json";
import CodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { Diagnostic, linter } from "@codemirror/lint";

type props = {
  requestFormState: RequestFormData;
  setRequestFormState: React.Dispatch<React.SetStateAction<RequestFormData>>;
};

const BodyTab = ({ requestFormState, setRequestFormState }: props) => {

  console.log("RequestFormState in BodyTab", requestFormState.body);
  const jsonLinter = linter((view) => {
    const diagnostics: Diagnostic[] = [];
    try {
      JSON.parse(view.state.doc.toString());
    } catch (e: any) {
      diagnostics.push({
        from: 0,
        to: view.state.doc.length,
        severity: "error",
        message: e.message,
      });
    }
    return diagnostics;
  });

 
  const onChange = (val: any) => {
    setRequestFormState((prev: RequestFormData) => ({
      ...prev,
      body: val,
    }));
  };

  return (
    <>
    
      <CodeMirror
        value={requestFormState.body}
        height="300px"
        className="border-2 border-[#999] S"
        extensions={[basicSetup(), json(), jsonLinter]}
        onChange={onChange}
      />
    </>
  );
};

export default BodyTab;
