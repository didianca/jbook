import { useTypedSelectorHook } from '../hooks/use-typed-selector.hook';
import CellListItemComponent from './cell-list-item.component';

const CellListComponent: React.FunctionComponent = () => {
  const cells = useTypedSelectorHook(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <CellListItemComponent key={cell.id} cell={cell} />
  ));
  return <div> {renderedCells} </div>;
};

export default CellListComponent;
