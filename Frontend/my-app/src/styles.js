
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: '#1f2021',
    },
    image: {
      marginLeft: '15px',
      marginBottom:'5px' 
    },
    [theme.breakpoints.down('sm')]:{
       mainContainer:{
       flexDirection: 'column-reverse'    
    }
    
    }
   
  
  }));