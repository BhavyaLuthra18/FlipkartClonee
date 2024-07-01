
import {Alert,Box,styled} from '@mui/material';


// Styled Components

const AlertPopup = styled(Box)({
    position:'fixed',
    bottom:20,
    left:'50%',
    transform:'translateX(-50%)',
    zIndex:9999
})

const StyledAlert = styled(Alert)({
    background:'#212121',   
    '& .MuiAlert-icon' :{
        color:'#4CAF50'
    },
   
})

// Show Alert
const BottomAlert = ({show,message}) => {
    return (
        <AlertPopup>
       {show && <StyledAlert variant="filled" severity="success">{message}</StyledAlert>}
        </AlertPopup>
    )
}

export default BottomAlert;





