import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';
import Search from './Search/Search';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;