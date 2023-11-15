import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import CodeCellComponent from './components/code-cell.component';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

const App = () => {
  return (
    <div>
      <CodeCellComponent />
    </div>
  );
};

root.render(<App />);
