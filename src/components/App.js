import '../assets/App.css';
import { Provider } from 'react-redux';
import StockNews from './StockNews';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <StockNews />
    </Provider>
  );
}

export default App;
