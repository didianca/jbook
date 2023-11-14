import "bulmaswatch/superhero/bulmaswatch.min.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import CodeEditorComponent from "./components/code-editor.component";
import Preview from "./components/preview.component";
import bundle from "./bundler";

const App = () => {
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
