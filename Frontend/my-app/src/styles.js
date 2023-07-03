
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      // display: 'flex',
      // flexDirection:  'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: '#d5d5d5',
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