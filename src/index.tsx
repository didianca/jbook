import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import TextEditorComponent from './components/text-editor.component';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditorComponent />
      </div>
    </Provider>
  );
};

root.render(<App />);
