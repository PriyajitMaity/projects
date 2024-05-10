import './App.scss';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import MovieDetail from './components/MovieDetails/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='app'>
      <Router>
        <Header/>
        <div className="container">
            <Routes>
                <Route path='/' Component ={Home}/>
                <Route path='/movie/:imdbID' Component={MovieDetail}/>
                <Route Component={PageNotFound}/>
            </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
