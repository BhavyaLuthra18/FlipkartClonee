
import { Box , Grid , Typography ,styled} from '@mui/material';

import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';


import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';
import {useSelector} from 'react-redux'

// Styling
const Container = styled(Grid)(({theme})=>({
    padding: ' 30px 135px',
    [theme.breakpoints.down('md')]:{
    padding:'15px 0',
  
    }
}))


const Header = styled(Box)`
padding: 15px 24px;
background:#fff;
`;



const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:'15px',
    [theme.breakpoints.down('md')]:{
     marginBottom:20
    }
}))




const Cart = () => {
    
   const {cartItems} = useSelector(state => state.cart);
   const {account} = useContext(DataContext);

 return (
     <>
     {
        account ? (
        cartItems.length ? (
        <Container container>
            <LeftComponent item lg={9} md={10} sm={12} xs={12}> 
            <Header>
                <Typography>MyCart({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(item => (
                <CartItem item={item}/>
                ))
            }
            </LeftComponent>
            <Grid item lg={3} md={8} sm={12} xs={12}>
            <TotalView cartItems={cartItems}/>
            </Grid>
        </Container>)
        :(<EmptyCart/>)):(<EmptyCart/>)}
     </>
    )
}

export default Cart;