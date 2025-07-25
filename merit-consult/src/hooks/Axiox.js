import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ernerstconsultbackend.onrender.com', // your Django API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
