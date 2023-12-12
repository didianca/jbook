import './add-cell.component.css';
import { useActionsHook } from '../hooks/use-actions.hook';

interface AddCellComponentProps {
  nextCellId: string | null;
}

const AddCellComponent: React.FunctionComponent<AddCellComponentProps> = ({
  nextCellId,
}) => {
  const { insertCellAfter } = useActionsHook();
  return (
    <div>
      <button onClick={() => insertCellAfter(nextCellId, 'code')}>Code</button>
      <button onClick={() => insertCellAfter(nextCellId, 'text')}>Text</button>
    </div>
  );
};

export default AddCellComponent;
