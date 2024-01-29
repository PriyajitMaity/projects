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
        <Routes>
          <Route exact path="/" component={<List/>} />
          <Route path="/post/:id" component={<Detail/>} />
          <Route path="/create" component={<Form/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
