import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: '10px 10px',
  },
  heading: {
    fontFamily: 'monospace',
    color: '#313233',
    textDecoration:'none'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'#888b8c'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight:'5px'
  },
  textlogo:{
    height: '65px',
    width: '180px'
  },
  [theme.breakpoints.down('sm')]:{
    textlogo:{
    height: '40px',
    width: '90px'
    },
    heading:{
      color: '###4e4e52'
    },
    image:{
      display :'none'
    },
    userName:{
      display: 'none'  
    }
    
   }
}));