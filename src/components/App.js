import '../assets/App.css';
import { Provider } from 'react-redux';
import MainData from './MainData';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainData />
    </Provider>
  );
}

export default App;
