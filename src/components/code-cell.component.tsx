import { useState } from 'react';
import React from 'react';
import CodeEditorComponent from './code-editor.component';
import Preview from './preview.component';
import ResizableComponent from './resizable.component';

const CodeCellComponent = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  return (
    <ResizableComponent direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <ResizableComponent direction={'horizontal'}>
          <CodeEditorComponent
            initialValue={'// Start your code here; '}
            onChange={(value) => setInput(value)}
          />
        </ResizableComponent>
        <Preview code={code} />
      </div>
    </ResizableComponent>
  );
};

export default CodeCellComponent;
