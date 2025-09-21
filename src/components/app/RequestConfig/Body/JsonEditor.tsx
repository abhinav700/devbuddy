import React from "react";
import { json } from "@codemirror/lang-json";
import CodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { Diagnostic, linter } from "@codemirror/lint";

const JsonEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");

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

  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="300px"
      extensions={[basicSetup(), json(), jsonLinter]}
      onChange={onChange}
    />
  );
};

export default JsonEditor;
