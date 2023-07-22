

const postsreducer= (posts=[],action)=>{
   switch(action.type)
   {   case 'LIKE' :
          return posts.map((post)=> (post._id === action.payload._id) ? action.payload : post)  ;
       case 'DELETE' :
          return posts.filter((post) => post._id !== action.payload ) ;
       case 'UPDATE' :
         return posts.map((post)=> (post._id === action.payload._id) ? action.payload : post)  ;
       case 'FETCH_ALL':                    
         return action.payload;
       case 'FETCH_POST':
         return {post:action.payload};
       case 'CREATE':
         return [...posts,action.payload];
       default:
         return posts;     
   }
}

export default postsreducer;
 
//in case of update we iterate through posts array with map function and when we get a post with id same as of updated post given by paylaod then we return the updatedpost instead of previous post