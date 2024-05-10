import './App.css'
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './pages/Home';
import {  BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

function App() {

  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App;
