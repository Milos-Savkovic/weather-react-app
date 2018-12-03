import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://weather-app-add29.firebaseio.com/'
});

export default instance;