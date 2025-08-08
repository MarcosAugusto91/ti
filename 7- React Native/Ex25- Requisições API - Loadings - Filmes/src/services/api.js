import axios from 'axios';

//https://sujeitoprogramador.com/ -> BaseURL
//r-api/?api=filmes -> Rota

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;