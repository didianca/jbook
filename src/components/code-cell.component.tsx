import { useEffect } from 'react';
import CodeEditorComponent from './code-editor.component';
import PreviewComponent from './preview.component';
import ResizableComponent from './resizable.component';
import { Cell } from '../state';
import { useActionsHook } from '../hooks/use-actions.hook';
import { useTypedSelectorHook } from '../hooks/use-typed-selector.hook';

interface CodeCellComponentProps {
  cell: Cell;
}

const CodeCellComponent: React.FunctionComponent<CodeCellComponentProps> = ({
  cell,
}) => {
  const { updateCell, createBundle } = useActionsHook();
  const bundle = useTypedSelectorHook((state) => state.bundles[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundle(cell.id, cell.content);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id]);

  return (
    <ResizableComponent direction="vertical">
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ResizableComponent direction="horizontal">
          <CodeEditorComponent
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </ResizableComponent>
        {bundle && <PreviewComponent code={bundle.code} error={bundle.error} />}
      </div>
    </ResizableComponent>
  );
};

export default CodeCellComponent;
