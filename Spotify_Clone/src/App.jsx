// import {useState, useEffect } from 'react';
// import './App.css';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserData, userActions } from './store/user';

// function App() {

//   const token  =useSelector(state =>state.user.token );
//   const dispatch =useDispatch();


// useEffect(() =>{
    

//     const hash =window.location.hash;

//     if( hash){
      
//        let token =hash.substring(1).split("&")[0].split("=")[1];

//        if(token){

//          window.localStorage.hash ="";
//          window.localStorage.setItem('token', token, {path: '/'});
//          dispatch(fetchUserData());
//          dispatch(userActions.setUser({token}));
//         }
                                  //       // if(token){
                                  //       //   const cookies =new Cookies();
                                  //       //   cookies.set("token", token, {path: '/'});
                                  //       //   dispatch(fetchUserData());
                                  //       //   dispatch(userActions.setUser(token));
                                  //       //   // console.log("Token code is :",token);
                                  //       // }
      
//     }
//     document.title ='Spotify';
//   }, [dispatch])
//   return (
//     <>
      
//     {
//       token ? <Home /> : <Login />  
//     }
    
//     </>
//   )
// }

// export default App;
 

import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchUserData, userActions } from './store/user';

function App() {
  const [token, setToken] = useState(() => {
    const storedToken = window.localStorage.getItem('token');
    return storedToken || '';
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];

      if (token) {
        window.localStorage.setItem('token', token);
        setToken(token);
        dispatch(fetchUserData());
        dispatch(userActions.setUser({ token }));
      }
    }

    document.title = 'Spotify';
  }, [dispatch]);

  return (
    <>
      {token ? <Home /> : <Login />}
    </>
  );
}

export default App;
