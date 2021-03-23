import '../assets/App.css';
import { Provider } from 'react-redux';
import StocksList from '../containers/StocksList';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <StocksList />
    </Provider>
  );
}

export default App;
