
import * as api from '../api';

//below is the syntax for using redux thunk when we have to perform some aysnchronous actio like fetching post .the syntax is we pass another aysnchronous arrow function with dispatch as parameter and inside the action creator we will dispatch the action instead of return it
 export const getPosts= () => async (dispatch) => {
    try
    {   
        // dispatch({ type: 'START_LOADING' });
        const {data}= await api.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        })
        // dispatch({ type: 'END_LOADING' });
    }
    catch(error)
    {
        console.log(error)
    }
};

export const getPost= (id) => async (dispatch) => {
    try
    {   
        dispatch({ type: 'START_LOADING' });

        const {data}= await api.fetchPost(id);
        // console.log(data);
        dispatch({
            type: 'FETCH_POST',
            payload: data,
        })  
        dispatch({ type: 'END_LOADING' });

    }
    catch(error)
    {
        console.log(error)
    }
};

export const createPost = (post) => async (dispatch)=> {
   try {
    
       const {data}= await api.createPost(post)
       dispatch({type:'CREATE' ,payload:data});

   } catch (error) {
      console.log(error)
   }
}

export const updatePost=(id,post) => async (dispatch)=> {
    try {
        console.log('1') 
        const {data}=await api.updatePost(id,post);
        console.log("2")
        dispatch({type : 'UPDATE',payload: data});
        console.log("3")
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=(id) =>async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE' ,payload : id});
    } catch (error) {
        console.log(error) 
    }
}

export const likePost= (id) =>async (dispatch) =>{
    try {
        const {data}=await api.likePost(id);
        dispatch({type :'LIKE' , payload: data});
    } catch (error) {
         console.log(error);
    }
}