import axios from 'axios';


const instance = axios.create({
  baseURL: "https://tinderr-backend-clome.herokuapp.com"
});

export default instance;