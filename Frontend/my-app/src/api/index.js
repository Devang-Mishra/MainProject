import axios from 'axios'

const url='http://localhost:8000';
const API_ENDPOINT='https://postback.onrender.com'
const API=axios.create({baseURL: API_ENDPOINT});
 
API.interceptors.request.use((req)=> { 
   if(localStorage.getItem('profile')) {
    req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
   }
   return req;
});

export const fetchPost=(id) => API.get(`/posts/${id}`);
export const fetchPosts =()=>API.get('/posts');
export const createPost=(newPost) =>API.post('/posts',newPost);
export const updatePost =(id,updatedpost) =>API.patch(`/posts/${id}`,updatedpost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost =(id) => API.patch(`/posts/${id}/likePost`)

export const signIn=(FormData) => API.post('/user/signin',FormData); 
export const signUp=(FormData) => API.post('/user/signup',FormData);