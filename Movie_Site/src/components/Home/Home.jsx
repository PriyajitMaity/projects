import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getLoading } from '../../features/movies/movieSlice';

const Home = () => {
  const loading =useSelector(getLoading);
  const dispatch =useDispatch();
  const movieText ='Harry';
  const showText ='Friends';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));

  }, [dispatch]);
  
  return (
    <div >
      <div className='banner-img'></div>
      {
        loading ? (
          <div className="loading-container">
            <div className='loading-spinner'></div>
          </div>
        ) : (
          <MovieListing />

        )
      }
    </div>
  )
}

export default Home