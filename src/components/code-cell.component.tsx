import { useState } from "react";
import React from "react";
import CodeEditorComponent from "./code-editor.component";
import Preview from "./preview.component";
import bundle from "../bundler";

const CodeCellComponent = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditorComponent
        initialValue={"// Start your code here; "}
        onChange={(value) => setInput(value)}
      />
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCellComponent;
