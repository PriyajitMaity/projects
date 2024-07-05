import { useState } from 'react'
import './header.scss';
import{ Link } from 'react-router-dom';
import user from '../../common/images/user1.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
  const[text, setText] =useState('');
  const dispatch =useDispatch();
  const submitHandler =(e) =>{
    if(text == '') return alert('Enter Valid Movies or Shows Name')
    e.preventDefault();
    dispatch(fetchAsyncMovies(text));
    dispatch(fetchAsyncShows(text));
    setText('');
  }
  return (
    <div className='header'>
      
        <div className="logo">
          <Link to='/'>My Movie</Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input type="text" value={text} placeholder='search movies or shows' onChange={(e) =>setText(e.target.value)} />
            <button type='submit'>search</button>
          </form>
        </div>
      
          <div className="user-image">
            <img src={user} alt="user" />
          </div>
      </div>
  )
}

export default Header