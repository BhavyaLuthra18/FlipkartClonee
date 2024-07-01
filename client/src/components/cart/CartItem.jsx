import {Box ,Typography , Button,styled} from '@mui/material'
import {addEllipsis} from '../../utils/common-utils'

import BottomAlert from './Alert';
import GroupedButton from './ButtonGroup';

import {removeFromCart} from '../../redux/actions/cartActions'

import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {  useState ,useEffect} from 'react';


// Styling
const Component = styled(Box)`
border-top: 1px solid #f0f0f0;
display:flex;
background:#fff;
`;


const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;

const SmallText = styled(Typography)`
color: #878787;
font-size:14px;
margin-top:10px;
`;

const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;
`



const CartItem = ({item}) => {

   const navigate = useNavigate();

   // States
   const [showAlert , setShowAlert] = useState(false);
   const [alertMessage,setAlertMessage] = useState('');

   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  const dispatch = useDispatch();
  const {id} = item;

 // Remove Item from Cart
 const removeItemFromCart = (id) => {
  dispatch(removeFromCart(id))
  setAlertMessage( `Successfully removed ${item.title.longTitle} from the cart `);
  setShowAlert(true);
}

useEffect(()=> {
   let timer;
   if(showAlert){
       timer = setTimeout(()=> {
           setShowAlert(false);
       },3000);
   }
   return () => clearTimeout(timer);
 },[showAlert]);


// product by id
const goToProductDetails = () => {
   navigate(`/product/${id}`)
}


 return (
 <Component>
     <LeftComponent>
      <Box>
      <img src={item.url} alt="product" style={{height:110, width:110, marginLeft:40 ,cursor:'pointer'}} onClick={goToProductDetails}/>
      </Box>
     <GroupedButton item = {item} />
     </LeftComponent>
     <Box style={{margin:20}}>
     <Typography>{addEllipsis(item.title.longTitle)}</Typography>
     <SmallText>Seller:RetailNet
     <Box component="span">
        <img src={fassured} alt="flipkart" style={{width:50, marginLeft:10}} />
     </Box>
     </SmallText>
     <Typography style={{margin: '20px 0'}} >
               <Box component="span"   style={{fontWeight:600,fontSize:18}}>
               ₹{item.price.cost}
               </Box>&nbsp;&nbsp;&nbsp;
               <Box component="span" style={{color:'#878787'}}> 
                 <strike>{item.price.mrp}</strike>
               </Box>&nbsp;&nbsp;&nbsp;
               <Box component="span" style={{color:'#388E3C'}}>{item.price.discount} off</Box>
            </Typography>
            <Remove onClick={() => removeItemFromCart(item.id) }>
                 Remove
               </Remove>
          <BottomAlert show={showAlert} message={alertMessage}/>
     </Box>
 </Component>
    )
}

export default CartItem;