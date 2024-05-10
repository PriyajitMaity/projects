import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, selectedMovieRemove } from '../../features/movies/movieSlice';
import './MovieDetail.scss'

const MovieDetail = () => {
  const { imdbID } =useParams();
  const dispatch =useDispatch();
  const data =useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID)); 
    return () =>{dispatch(selectedMovieRemove())};
  }, [dispatch, imdbID])
  
  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>IMDB rating ⭐ : {data.imdbRating}</span>
          <span>IMDB votes 👍 : {data.imdbVotes}</span>
          <span>RunTime 🎥 : {data.Runtime}</span>
          <span>Year 📅 : {data.Year}</span>
        </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director :</span>
            <span>{data.Director}</span> 
          </div>
          <div>
            <span>Actors :</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Gener : </span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages : </span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards :</span>
            <span>{data.Awards}</span>
          </div>
        </div>   
      </div>
      <div className='sedtion-right'>
          <img  src={data.Poster} alt={data.Title} />
        </div>
      
    </div>
  )
}

export default MovieDetail;