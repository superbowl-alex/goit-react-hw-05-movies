import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '76ca17943e227c67de15be6c6d3599fa';

export async function fetchTrendingMovies() {
  const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axios(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchCast(movieId) {
  const response = await axios(
    `/search/movie/{movieId}/credits?api_key=${API_KEY}`
  );
  return response;
}

export async function fetchReviews(movieId) {
  const response = await axios(
    `/search/movie/{movieId}/reviews?api_key=${API_KEY}`
  );
  return response;
}
