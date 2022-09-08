import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/'
    // baseURL: 'https://synthisha.herokuapp.com'
    //baseURL: 'https://web-spire.herokuapp.com'
});