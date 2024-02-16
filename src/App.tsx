import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MyRouter } from './router/MyRouter';
import { Menu } from './component/Menu';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MyRouter/>
    </BrowserRouter>
    </div>
  );
}

export default App;
