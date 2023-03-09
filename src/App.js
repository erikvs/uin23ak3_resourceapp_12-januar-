import './StyleFolder/main.css';
import { Routes, Route } from 'react-router-dom';
import { Html } from './components/Html';
import { Css } from './components/Css';
import { Nav } from './components/Nav';
import { Sanity } from './components/Sanity';
import { React } from './components/React';
import { Javascript } from './components/Javascript';

function App() {
  return (
    <div className="App">
      <header><h1>Ressursarkiv</h1></header>
      <nav className='tabcontent'>
      <Nav />
      <Routes>
        <Route path="/" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="react" element={<React />} />
        <Route path="sanity" element={<Sanity />} />
      </Routes>
      </nav>
    </div>
  )
}

export default App;