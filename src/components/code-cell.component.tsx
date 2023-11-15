import { useState, useEffect } from 'react';
import CodeEditorComponent from './code-editor.component';
import PreviewComponent from './preview.component';
import bundle from '../bundler';
import ResizableComponent from './resizable.component';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <ResizableComponent direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <ResizableComponent direction="horizontal">
          <CodeEditorComponent
            initialValue="const a = 1;"
            onChange={(value) => setInput(value)}
          />
        </ResizableComponent>
        <PreviewComponent code={code} />
      </div>
    </ResizableComponent>
  );
};

export default CodeCell;
