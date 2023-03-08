import './StyleFolder/main.css';
import { Routes, Route} from 'react-router-dom';
import { Html } from './components/Html';
import { Css } from './components/Css';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
 
   <h1>Ressursarkiv</h1>
 
  <Nav />
   <Routes>
   <Route path="/" element={<Html />} />
   <Route path="css" element={<Css />} />
  </Routes>
  </div>
  )
}

export default App;
