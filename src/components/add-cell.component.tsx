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
  const { insertCellBefore } = useActionsHook();
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCellComponent;
