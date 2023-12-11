import { useState, useEffect } from 'react';
import CodeEditorComponent from './code-editor.component';
import PreviewComponent from './preview.component';
import bundle from '../bundler';
import ResizableComponent from './resizable.component';
import { Cell } from '../state';
import { useActionsHook } from '../hooks/use-actions.hook';

interface CodeCellComponentProps {
  cell: Cell;
}

const CodeCellComponent: React.FunctionComponent<CodeCellComponentProps> = ({
  cell,
}) => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const { updateCell } = useActionsHook();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <ResizableComponent direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <ResizableComponent direction="horizontal">
          <CodeEditorComponent
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </ResizableComponent>
        <PreviewComponent code={code} error={err} />
      </div>
    </ResizableComponent>
  );
};

export default CodeCellComponent;
