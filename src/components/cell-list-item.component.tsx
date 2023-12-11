import './cell-list-item.component.css';
import { Cell } from '../state';
import CodeCellComponent from './code-cell.component';
import TextEditorComponent from './text-editor.component';
import ActionBarComponent from './action-bar.component';

interface CellListItemComponentProps {
  cell: Cell;
}

const CellListItemComponent: React.FunctionComponent<
  CellListItemComponentProps
> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBarComponent id={cell.id} />
        </div>
        <CodeCellComponent cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditorComponent cell={cell} />
        <ActionBarComponent id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItemComponent;
