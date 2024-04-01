
import { useSelector } from 'react-redux';
import './App.css'
import Login from './Login'
import { selectUser } from './components/features';
import Logout from './Logout';


function App() {
  const user=useSelector(selectUser);
  return (
    <div className='App'>
    {
      user ? <Logout/> : <Login/>
    }
        
    </div>
  )
}

export default App;
