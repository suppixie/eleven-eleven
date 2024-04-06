import './App.css';
import Homepage from './components/homepage';
import { Route, Routes  } from 'react-router-dom';
import Magic from './components/magicpage.js';
import Imagine from './components/imagine.js';
import Wish from './components/wish.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Homepage />}></Route>
        <Route path='/magic' element={<Magic/>}> </Route>
        <Route path='/imagine' element={<Imagine/>}> </Route>
        <Route path='/wish' element={<Wish/>}></Route>

      </Routes>
    </div>
  );
}

export default App;