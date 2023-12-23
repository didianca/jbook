import 'bulmaswatch/solar/bulmaswatch.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CellListComponent from './components/cell-list.component';
import FooterComponent from './components/footer.component';
import NavBarComponent from './components/nav-bar.component';
import TitleComponent from './components/title.component';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './state/persist'; // Import your store configuration
const { store, persistor } = configureStore();

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element!);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <NavBarComponent />
          <TitleComponent />
          <CellListComponent />
          <FooterComponent />
        </div>
      </PersistGate>
    </Provider>
  );
};

root.render(<App />);
