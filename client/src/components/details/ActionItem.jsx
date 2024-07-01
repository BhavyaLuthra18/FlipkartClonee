import {useState} from 'react';
import {Box ,Button , CircularProgress, Modal ,Typography,styled} from '@mui/material';
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cartActions';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const LeftContainer = styled(Box)(({theme})=>({
 minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
    padding:'20px 40px'
    }
}))


  const Image = styled('img')({
   padding:'15px',
   border:'1px solid #f0f0f0',
   width:'90%'
  });


  const ButtonContainer = styled(Box)`
  width:94%;
  display:flex;
  justify-content:space-around;
  margin-top:20px;
  `;


 const StyledButton = styled(Button)(({theme})=>({
    width:'46%',
    height:'50px',
    fontSize:'12px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
    width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
 }))

 


const ActionItem = ({product}) => {
    const {account}  = useContext(DataContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cart);

    const [quantity, setQuantity] = useState(1);
    const [openModal,setOpenModal] = useState(false);
    const [loading,setLoading] = useState(false);
    const {id} = product;


    const addItemToCart = () => {
    setLoading(true)
     dispatch(addToCart(id, quantity));
     setTimeout(()=>{
     navigate('/cart');
     setLoading(false);
     },3000)

    }
    
    const buyNow = () => {
        dispatch(addToCart(id, quantity));
     navigate('/cart')
    }

    const isInCart = cartItems.some((item) => item.id === id);

   const handleOpenModal = () => {
   setOpenModal(true);
   }
   const handleCloseModal = () => {
   setOpenModal(false);
    }

    return (
          <LeftContainer>
            <Box style={{padding:'15px 20px'}}>
            <Image src= {product.detailUrl} alt="product" />
            </Box>
         <ButtonContainer>

        { isInCart ? 
   (

    <StyledButton
    variant="contained"
    onClick={()=> navigate('/cart')}
    style={{marginRight:10, background:'#ff9f00'}}
    >
    <Cart/> Go TO CART
    </StyledButton>
   )

 :
( 
    <StyledButton variant="contained" onClick={() => 
   {
    if(account){
        addItemToCart()
    }else{
       handleOpenModal() 
    }
   }} style={{marginRight:10 , background:'#ff9f00'}}
   >
        {
            loading ? (
                <>
                 <CircularProgress color="inherit" size={24} />
                 <span style={{marginLeft:'10px'}}>GOING TO CART</span>
                </>
                 )
                :
                (
                 <>
                  <Cart/>Add to Cart
                 </>
                )
        }
         </StyledButton>
)}

         <StyledButton variant="contained" onClick={() => buyNow()}  style={{background:'#fb541b'}}><Flash/>Buy Now</StyledButton>
         </ButtonContainer>
     <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={{position:'absolute' , top:'50%', left:'50%', transform:'translate(-50% , -50%)', bgcolor:'background.paper', border:'2px solid #000', boxShadow:24,p:4,maxWidth:400}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Please Log In
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You need to log in to add items to the cart.
          </Typography>
        <Button onClick={handleCloseModal}>Close</Button>
         </Box>
         </Modal>
         </LeftContainer>
         
    )
}

export default ActionItem;