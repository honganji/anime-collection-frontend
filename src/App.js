import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BottomBar from './layout/BottomBar';
import Detail from './pages/Detail';
import Class from './pages/Class';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/?' element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/detail?' element={<Detail />} />
          <Route exact path='/class?' element={<Class />} />
        </Routes>
        <BottomBar />
      </Router>
    </div>
  );
}
