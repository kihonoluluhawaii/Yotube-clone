import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyDvOsupd9N-BBI1B4Y76LeKguj_EP4TcO4',
  },
});
