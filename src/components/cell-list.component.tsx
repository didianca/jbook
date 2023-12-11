import { useTypedSelectorHook } from '../hooks/use-typed-selector.hook';
import CellListItemComponent from './cell-list-item.component';
import AddCellComponent from './add-cell.component';

const CellListComponent: React.FunctionComponent = () => {
  const cells = useTypedSelectorHook(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <>
      <AddCellComponent nextCellId={cell.id} />
      <CellListItemComponent key={cell.id} cell={cell} />
    </>
  ));
  return (
    <div>
      {renderedCells}
      <AddCellComponent nextCellId={null} />
    </div>
  );
};

export default CellListComponent;
