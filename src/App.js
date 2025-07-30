import './App.css';
import Main from './component/main.jsx';
import Letter from './component/letter.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './component/favorites.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/letter' element={<Letter/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
