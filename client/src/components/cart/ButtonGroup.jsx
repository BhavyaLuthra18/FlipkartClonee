
import {  Box, Button, styled} from '@mui/material'


import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';


import { useEffect } from 'react';
import { useState } from 'react';
import BottomAlert from '../cart/Alert';


// Styling
const ButtonWrapper = styled(Box)({
 marginTop:30,
 display:'flex',
 alignItems:'center',
})

const CircularButton = styled(Button)({
        borderRadius:'50% ' ,
        width:40,
        height:40,
        fontSize:20,
        color:'black',
        marginRight:8,
        borderColor:'#C2C2C2',
        borderWidth:'1px',
        borderStyle:'solid',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:0,
        minWidth:0
    
})


const QuantityDisplay = styled(Box)({
    width:60,
    height:20,
    textAlign:'center',
    color:'black',
    marginRight:8,
    padding: '8px', 
    border: '1px solid #C2C2C2',
    borderRadius:5,
    lineHeight:'normal',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})



const GroupedButton = ({item }) => {
    const dispatch = useDispatch();
   
    // States
    const [showAlert , setShowAlert] = useState(false);
    const [alertMessage,setAlertMessage] = useState('');

      
    // + 
   const handleIncrement = () => {
    dispatch(addToCart(item.id, item.quantity + 1));
    setAlertMessage(`You has changed ${item.title.longTitle} QUANTITY TO  '${item.quantity + 1}'`);
   setShowAlert(true)
   }

    // - 
   const handleDecrement = () => {
    if(item.quantity > 1){
        dispatch(addToCart(item.id, item.quantity - 1));
    }
    setAlertMessage(`You has changed ${item.title.longTitle} QUANTITY TO '${item.quantity - 1}'`);
    setShowAlert(true)
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



    return (
        <ButtonWrapper>
        <CircularButton onClick={handleDecrement} className='quantity-button'>-</CircularButton>
        <QuantityDisplay disabled className='quantity-display'>{item.quantity}</QuantityDisplay>
        <CircularButton className='quantity-button' onClick={handleIncrement} >
         +
       </CircularButton >
        <BottomAlert show={showAlert} message={alertMessage}/>
        </ButtonWrapper>
    )
}

export default GroupedButton;