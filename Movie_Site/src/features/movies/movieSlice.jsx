import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieapi from '../../common/apis/movieapi';
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies =createAsyncThunk('movies/fetchAsyncMovies',
async (text) =>{

    const res =await movieapi.get(`?apikey=${APIKey}&s=${text}&type=movie`)
    return res.data;
})

export const fetchAsyncShows =createAsyncThunk('movies/fetchAsyncShows',
async (text) =>{

    const res =await movieapi.get(`?apikey=${APIKey}&s=${text}&type=series`)
    return res.data;
})

export const fetchAsyncMovieOrShowDetail =createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
async (id) =>{

    const res =await movieapi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    return res.data;
})


const movieSlice =createSlice({
    name: 'movies',
    initialState: {
        movies: {},
        shows: {},
        selectedMovieOrShow:  {},
        loading: false,
    },

    // reducers:{
    //     addMovie: (state, {payload}) =>{
    //         state.movies =payload;
    //     },
    //     selectedMovieRemove: (state) =>{
    //         state.selectedMovieOrShow= {}
    //     }
    // },
    extraReducers: builder =>{
        builder
        .addCase(
            fetchAsyncMovies.pending, (state) =>{
                state.loading =true;
                console.log('Pending...');
            })
        .addCase(fetchAsyncMovies.fulfilled, (state, {payload}) =>{
            state.loading =false;
            console.log('Fetched successfully !!');
            // return {...state, movies: payload};
            state.movies = payload
        })
        .addCase(fetchAsyncMovies.rejected, (state) =>{
            state.loading =true;
            console.log('Rejected!!!');
        })
        .addCase(
            fetchAsyncShows.pending, (state) =>{
                state.loading =true;
                console.log('Pending...');
            })
        .addCase(fetchAsyncShows.fulfilled, (state, {payload}) =>{
            console.log('Fetched successfully !!');
            state.loading =false;
            // return {...state, shows: payload};
            state.shows = payload
        })
        .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, {payload}) =>{
            console.log('Fetched successfully !!');
            state.loading =false;
            // return {...state, selectedMovieOrShow: payload};
            state.selectedMovieOrShow =payload;
        })
    }
})

export const {addMovie, selectedMovieRemove} =movieSlice.actions;
export const getAllMovies =(state) =>state.movies.movies;
export const getAllShows =(state) =>state.movies.shows;
export const getSelectedMovieOrShow =(state) =>state.movies.selectedMovieOrShow;
export const getLoading =(state) =>state.movies.loading;


export default movieSlice.reducer;
