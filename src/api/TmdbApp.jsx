import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWY4ZjRjMjQ2YWI1ZDc0YTE5MDFlMWM1NTA3MjQzOSIsIm5iZiI6MTc0NDgwMzg4OC45NDEsInN1YiI6IjY3ZmY5ODMwN2MyOWFlNWJjM2Q5ZGFhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBwtI-aFJ1S8Z3cN7mv7KsfaMKC_hLOko0cqc9ED2eE'
  }
};

// ✅ Отримати популярні фільми
export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};


export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, options);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return response.data;
};


export const getMovieCredits = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return response.data.cast;
};


export const getMovieReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return response.data.results;
};


