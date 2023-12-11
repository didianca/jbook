import './add-cell.component.css';
import { useActionsHook } from '../hooks/use-actions.hook';

interface AddCellComponentProps {
  nextCellId: string | null;
}

const AddCellComponent: React.FunctionComponent<AddCellComponentProps> = ({
  nextCellId,
}) => {
  const { insertCellBefore } = useActionsHook();
  return (
    <div>
      <button onClick={() => insertCellBefore(nextCellId, 'code')}>Code</button>
      <button onClick={() => insertCellBefore(nextCellId, 'text')}>Text</button>
    </div>
  );
};

export default AddCellComponent;
