import './code-cell.component.css';
import { useEffect } from 'react';
import CodeEditorComponent from './code-editor.component';
import PreviewComponent from './preview.component';
import ResizableComponent from './resizable.component';
import { Cell } from '../state';
import { useActionsHook } from '../hooks/use-actions.hook';
import { useTypedSelectorHook } from '../hooks/use-typed-selector.hook';
import { useCumulativeCode } from '../hooks/useCumulativeCode.hook';

interface CodeCellComponentProps {
  cell: Cell;
}

const CodeCellComponent: React.FunctionComponent<CodeCellComponentProps> = ({
  cell,
}) => {
  const { updateCell, createBundle } = useActionsHook();
  const bundle = useTypedSelectorHook((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cumulativeCode, cell.id]);

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
        <div className="progress-wrapper">
          {!bundle || bundle.loading === true ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <PreviewComponent code={bundle.code} error={bundle.error} />
          )}
        </div>
      </div>
    </ResizableComponent>
  );
};

export default CodeCellComponent;
