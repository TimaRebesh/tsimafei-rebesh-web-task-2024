import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export const fetchComments = () => api.get('/comments');
export const postComment = (comment: any) => api.post('/comments', comment);
