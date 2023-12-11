import './action-bar.component.css';
import { useActionsHook } from '../hooks/use-actions.hook';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ActionBarComponentProps {
  id: string;
}

const ActionBarComponent: React.FunctionComponent<ActionBarComponentProps> = ({
  id,
}) => {
  const { moveCell, deleteCell } = useActionsHook();
  return (
    <div className="action-bar">
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'up')}
      >
        <span className="icon">
          <i className="fas fa-arrow-up" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'down')}
      >
        <span className="icon">
          <i className="fas fa-arrow-down" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times" />
        </span>
      </button>
    </div>
  );
};

export default ActionBarComponent;
