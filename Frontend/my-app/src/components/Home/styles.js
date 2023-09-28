import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    mainC:{
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]:{
       mainC:{
       flexDirection: 'column-reverse'    
    }
    }
   }));