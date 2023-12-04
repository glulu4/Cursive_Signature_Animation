import logo from './logo.svg';
import './App.css';

import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import DVD from './DVD'

function App() {


  return (

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="dvd" element={<DVD />} />

    </Routes>    

  );
}

export default App;


