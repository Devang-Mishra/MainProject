

const postsreducer= (state = {isLoading:true,posts: [],} ,action)=>{
   switch(action.type)
   {  
       case 'START_LOADING':
          return { ...state, isLoading: true };
       case 'END_LOADING':
          return { ...state, isLoading: false }; 
       case 'LIKE' :
           return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };       
       case 'DELETE' :
          return {...state,posts:state.posts.filter((post) => post._id !== action.payload )};
       case 'UPDATE' :
         return {...state,posts:state.posts.map((post)=> (post._id === action.payload._id) ? action.payload : post)};
       case 'FETCH_ALL':                    
         return {...state,posts:action.payload};
       case 'FETCH_POST':
         return {...state,post:action.payload};
       case 'CREATE':
         return {...state,posts:[...state.posts,action.payload]};
       default:
         return state;     
   }
}

export default postsreducer;
 
//in case of update we iterate through posts array with map function and when we get a post with id same as of updated post given by paylaod then we return the updatedpost instead of previous post