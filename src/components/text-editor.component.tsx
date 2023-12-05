import './text-editor.component.css';
import MDEditor from '@uiw/react-md-editor';
import React, { useState, useEffect, useRef } from 'react';

const TextEditorComponent: React.FunctionComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current?.contains(event.target as Node)
      ) {
        setEditing(false);
      }
    };
    document.addEventListener('click', listener, { capture: true });

    return () =>
      document.removeEventListener('click', listener, { capture: true });
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={value} onChange={(input) => setValue(input || '')} />
      </div>
    );
  }

  return (
    <div className="text-editor" onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={value} />
    </div>
  );
};

export default TextEditorComponent;
