import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://172.20.10.2:5000'
});

export default instance;