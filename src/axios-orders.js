import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-3492b.firebaseio.com/'
});

export default instance;