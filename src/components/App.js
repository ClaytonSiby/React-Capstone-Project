import '../assets/App.css';
import MainData from './MainData';
import { Provider } from 'react-redux';
import store from '../redux/store'

function App() {
  return (
    <Provider store={ store }>
      <MainData />
    </Provider>
  );
}

export default App;
