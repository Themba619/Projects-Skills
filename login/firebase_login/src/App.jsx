import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Credentials from './components/Credentials';
import Home from './components/Home'


// <Credentials />
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Credentials />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
