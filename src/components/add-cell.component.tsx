import './add-cell.component.css';
import { useActionsHook } from '../hooks/use-actions.hook';

interface AddCellComponentProps {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCellComponent: React.FunctionComponent<AddCellComponentProps> = ({
  forceVisible,
  nextCellId,
}) => {
  const { insertCellAfter } = useActionsHook();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(nextCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <div className="tooltip">
            Code
            <span className="tooltip-text">Add new code cell</span>
          </div>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(nextCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <div className="tooltip">
            Text
            <span className="tooltip-text">Add new text cell</span>
          </div>
        </button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCellComponent;
