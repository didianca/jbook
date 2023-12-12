import './cell-list.component.css';
import { Fragment } from 'react';
import { useTypedSelectorHook } from '../hooks/use-typed-selector.hook';
import CellListItemComponent from './cell-list-item.component';
import AddCellComponent from './add-cell.component';

const CellListComponent: React.FunctionComponent = () => {
  const cells = useTypedSelectorHook(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCellComponent nextCellId={cell.id} />
      <CellListItemComponent cell={cell} />
    </Fragment>
  ));
  return (
    <div className="app">
      {renderedCells}
      <AddCellComponent forceVisible={cells.length === 0} nextCellId={null} />
    </div>
  );
};

export default CellListComponent;
