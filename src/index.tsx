import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import CellListComponent from './components/cell-list.component';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellListComponent />
      </div>
    </Provider>
  );
};

root.render(<App />);
