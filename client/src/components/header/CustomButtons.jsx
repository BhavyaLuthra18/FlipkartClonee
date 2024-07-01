import { Box  ,Button, Typography, Badge,styled} from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';

import {Link}  from 'react-router-dom';

import Profile from "./Profile";


import {  useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import {useSelector} from  'react-redux';


// Styling
 const Wrapper = styled(Box)(({theme})=>({
  display:'flex',
  margin: '0 3% 0 auto',
 ' & > *'  :{
 marginRight:'40px !important',
 fontSize:'16px',
 alignItems:'center',
 },
 [theme.breakpoints.down('md')]:{
  display:'block',
  padding:'20px 20px',
  ' & .moreinfo':{

    marginBottom:20,
     fontWeight:600
   }
  
}
 }))

 

 const Container = styled(Link)(({theme})=>({
  display:'flex',
  textDecoration:'none',
  color:'inherit',
  alignItems:'center',
  [theme.breakpoints.down('md')]:{
    display:"flex",
    alignItems:'center',
    marginTop:30,
    '& p' :{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontWeight:600,
 
      
    },
  
  }
 }))

 
 const LoginButton = styled(Button)(({theme}) =>({
  color:'#2874f0',
  background:'#FFFFFF',
  textTransform:'none',
  padding: '5px 40px',
  borderRadius:'2px',
  boxShadow:'none',
  fontWeight:600,
  height:'32',
  [theme.breakpoints.down('md')]:{
    marginBottom:50,
    fontWeight:600
  }
 }))


 

const CustomButtons = ({setLoginOpen}) => {

  const {account , setAccount} = useContext(DataContext);
  const {cartItems} = useSelector(state => state.cart);


  const openDialog = () =>{
    setLoginOpen(true)
  }

 return (
    <Wrapper>
        {
             account ? <Profile account={account} setAccount={setAccount} />  :
             <LoginButton variant="contained"onClick={()=> openDialog()}  >
              Login
             </LoginButton>
        }
        <Typography style={{marginTop: 3 , width:135  }}className="moreinfo"> Become a Seller </Typography>
        <Typography style={{marginTop:3  }} className="moreinfo">  More </Typography>
            {account ? 
            (
              <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCart/>
            </Badge>
            <Typography style={{marginLeft:10 }}>Cart</Typography>
            </Container>
            )
            :
            (
              <Container to="/cart">
              <ShoppingCart/>
              <Typography style={{marginLeft:10 }}>Cart</Typography> 
              </Container>
            )}
  

    </Wrapper>
   ) 
}

export default CustomButtons;