import { useActionsHook } from '../hooks/use-actions.hook';

interface ActionBarComponentProps {
  id: string;
}

const ActionBarComponent: React.FunctionComponent<ActionBarComponentProps> = ({
  id,
}) => {
  const { moveCell, deleteCell } = useActionsHook();
  return (
    <div>
      <button onClick={() => moveCell(id, 'up')}>^</button>
      <button onClick={() => moveCell(id, 'up')}>\/</button>
      <button onClick={() => deleteCell(id)}>X</button>
    </div>
  );
};

export default ActionBarComponent;
