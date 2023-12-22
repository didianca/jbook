import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import CellListComponent from './components/cell-list.component';
import FooterComponent from './components/footer.component';
import NavBarComponent from './components/nav-bar.component';
import TitleComponent from './components/title.component';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBarComponent />
        <TitleComponent />
        <CellListComponent />
        <FooterComponent />
      </div>
    </Provider>
  );
};

root.render(<App />);
