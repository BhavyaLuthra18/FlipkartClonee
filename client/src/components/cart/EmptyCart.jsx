import {Box,Typography , Button,styled} from '@mui/material'
import LoginDialog from '../login/LoginDialog';

import { useState , useContext} from "react";
import { DataContext } from "../../context/DataProvider";

// Styling 
const Component = styled(Box)(({theme})=>({
    height:'65vh',
    width:'80%',
    background:'#fff',
    margin: '80px 200px',
    [theme.breakpoints.down('md')]:{
        width:'70%',   
        margin: '80px 140px',
    },
    [theme.breakpoints.down('sm')]:{
        width:'60%',   
        margin: '80px 100px',
    }
}))


const Container = styled(Box)`
text-align:center;
padding-top:70px;
`;

const LoginButton = styled(Button)(({theme})=>({
    textTransform:'none',
    background:'#FB641B',
    color:'#fff',
    height:'48px',
    display:'flex',
    borderRadius:'2px',
    marginTop:20,
    marginLeft:700,
    width:200,
    [theme.breakpoints.down('lg')]:{
        width:150,
        marginLeft:320

    },
    [theme.breakpoints.down('md')]:{
        width:150,
        marginLeft:220

    },
    [theme.breakpoints.down('sm')]:{
        width:100,
        marginLeft:130
    },
}))



const EmptyCart = () => {

   const {account} = useContext(DataContext);

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    //States
    const [loginOpen,setLoginOpen] = useState(false);
 
    // opening Login Dialog
    const handleLoginDialog = () => {
    setLoginOpen(true);
   }

 return (
     <Component>
        {
        account ? (
         <Container>
        <img src={imgurl} alt="empty" style={{width:'12%'}}/>
        <Typography>Your cart is empty</Typography>
        <Typography>Add items to it now</Typography>
        </Container> 
       ) :
       (
        <Container>
          <img src={imgurl} alt="empty" style={{width:'30%'}}/>
          <Typography> Missing Cart Items?</Typography>
          <Typography>Login to see the items you added previously </Typography>
          <LoginButton onClick={handleLoginDialog} >Login</LoginButton>
          <LoginDialog  open={loginOpen} setOpen={setLoginOpen} />
        </Container> 
        )}
     </Component>   
    )
}

 export default EmptyCart;