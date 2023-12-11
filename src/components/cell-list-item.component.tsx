import { Cell } from '../state';
import CodeCellComponent from './code-cell.component';
import TextEditorComponent from './text-editor.component';

interface CellListItemComponentProps {
  cell: Cell;
}

const CellListItemComponent: React.FunctionComponent<
  CellListItemComponentProps
> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = <CodeCellComponent />;
  } else {
    child = <TextEditorComponent />;
  }

  return <div> {child} </div>;
};

export default CellListItemComponent;
