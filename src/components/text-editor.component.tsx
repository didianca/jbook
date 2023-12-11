import './text-editor.component.css';
import MDEditor from '@uiw/react-md-editor';
import React, { useState, useEffect, useRef } from 'react';
import { Cell } from '../state';
import { useActionsHook } from '../hooks/use-actions.hook';

interface TextEditorComponentProps {
  cell: Cell;
}

const TextEditorComponent: React.FunctionComponent<
  TextEditorComponentProps
> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActionsHook();

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
        <MDEditor
          value={cell.content}
          onChange={(input) => updateCell(cell.id, input || '')}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit.'} />
      </div>
    </div>
  );
};

export default TextEditorComponent;
