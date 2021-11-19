import axios from "axios";

//const API_URL = 'https://infoinvest-tcc.herokuapp.com';
const API_URL = 'http://192.168.31.27:8080'

const api = axios.create({
    baseURL: API_URL, 
    timeout: 15000,
    timeoutErrorMessage: "Erro para realizar requisição com o back-end"
})

export default api;