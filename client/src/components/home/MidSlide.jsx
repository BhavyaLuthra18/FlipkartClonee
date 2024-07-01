import { Box , styled } from "@mui/material";

import Slide from "./Slide";


// Styling
const Component = styled(Box)`
display:flex;
`;

const LeftComponent = styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));

const RightComponent = styled(Box)(({theme})=>({
    background:'#FFFFFF',
    padding:5,
    marginTop:10,
    marginLeft:10,
    width:'17%',
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))


const MidSlide = ({products, title, timer}) => {
    
const adURL = 'https://newspaperads.ads2publish.com/wp-content/uploads/2018/04/flipkart-buy-tv-and-appliances-online-never-aapki-khareeddari-hamari-zimmedari-ad-times-of-india-mumbai-12-04-2018.png';

 return (
<Component>
<LeftComponent>
<Slide 
 products={products}
 title={title}
 timer={timer} 
  />
</LeftComponent>
<RightComponent>
<img src={adURL}  alt="ad"  style={{ width:217}}/>
</RightComponent>
</Component>
   ) 
}

export default MidSlide;