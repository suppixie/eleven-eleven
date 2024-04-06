import './App.css';
import Homepage from './components/homepage';
import { Route, Routes  } from 'react-router-dom';
import Magic from './components/magicpage.js';
import Imagine from './components/imagine.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Homepage />}></Route>
        <Route path='/magic' element={<Magic/>}> </Route>
        <Route path='/imagine' element={<Imagine/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;