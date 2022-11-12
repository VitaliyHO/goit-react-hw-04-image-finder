import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30200952-259b66a9ca61fa361dd8a215b';

export const fetchImages = async(query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}