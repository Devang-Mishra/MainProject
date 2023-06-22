import * as api from '../api';

//below is the syntax for using redux thunk when we have to perform some aysnchronous actio like fetching post .the syntax is we pass another aysnchronous arrow function with dispatch as parameter and inside the action creator we will dispatch the action instead of return it
 export const getPosts= () => async (dispatch) => {
    try
    {
        const {data}= await api.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        })
    }
    catch(error)
    {
        console.log(error.message)
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
        const {data}=await api.updatePost(id,post);
        dispatch({type : 'UPDATE',payload: data});
    } catch (error) {
        console.log(error.message);
    }
}