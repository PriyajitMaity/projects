import './App.css'
import Detail from './Components/Detail';
import Header from './Components/Header';
import List from './Components/List';
import Form from './Components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div>
          <Routes>
            <Route exact path="/" element={<List/>} />
            <Route path="/post/:id" element={<Detail/>} />
            <Route path="/create" element={<Form/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
