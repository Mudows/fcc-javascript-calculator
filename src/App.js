import { Provider } from 'react-redux';
import store from './redux/store'
import Calculator from './components/Calculator';

import './css/App.css';

export default function App() {
  return (
    <Provider store={ store }>
      <Calculator />
    </Provider>
  );
}
