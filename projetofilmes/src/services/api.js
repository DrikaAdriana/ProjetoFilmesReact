import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=9fbddd26497885ea4147698f1e9eeeb9&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;