
import { Box ,Grid,styled} from "@mui/material";

import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';
import { getProductDetails } from "../../redux/actions/productActions";


// Styling
const ComponentWrapper = styled(Box)`
background:#F2F2F2;
margin-top:55px;
`;


 const Container = styled(Grid)(({theme})=>({
 background:'#FFFFFF',
 display: 'flex',
 flexWrap:'wrap',
 [theme.breakpoints.down('md')]:{
   margin:0
 }
 }))


const RightContainer = styled(Grid)(({theme})=>({
   marginTop:'90px',
   [theme.breakpoints.down('md')]:{
   paddingLeft:'26px'
   }
}))



const DetailView = () => {

   const dispatch = useDispatch();
   const {id} = useParams();

   // Getting  loading,product
   const {loading,product} = useSelector(state => state.getProductDetails);


    useEffect(()=>{
    if(product && id !== product.id)
    dispatch(getProductDetails(id))
    },[dispatch , id , product, loading]);



     return(
       <ComponentWrapper>
      {
      product && Object.keys(product).length &&
         <Container container>
         <Grid item lg={4} md={4} sm={8} xs={12}>
        <ActionItem product={product} />
         </Grid>
         < RightContainer item lg={8} md={8} sm={8} xs={12}>
          <ProductDetail  product={product}/>
         </RightContainer>
         </Container>
      }
       </ComponentWrapper>
    )
}

export default DetailView; 