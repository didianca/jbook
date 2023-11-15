import { useState, useEffect } from 'react';
import CodeEditorComponent from './code-editor.component';
import PreviewComponent from './preview.component';
import bundle from '../bundler';
import ResizableComponent from './resizable.component';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <ResizableComponent direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <ResizableComponent direction="horizontal">
          <CodeEditorComponent
            initialValue="// Start your code here"
            onChange={(value) => setInput(value)}
          />
        </ResizableComponent>
        <PreviewComponent code={code} error={err} />
      </div>
    </ResizableComponent>
  );
};

export default CodeCell;
