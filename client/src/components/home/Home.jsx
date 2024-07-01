import { Box ,styled} from '@mui/material';

import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';

import { getProducts } from '../../redux/actions/productActions';

import Footer from '../Footer/Footer';



// Components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';



//Styling
const Component =  styled(Box)`
padding: 10px 10px;
background:#F2F2F2;
`;



const Home = () => {

  const {products} = useSelector(state => state.getProducts);
  //const {products} = getProducts

  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(getProducts());
  },[dispatch]) 

  
  return (
     <>
      <Navbar/>
      <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the day" timer={true}/>
      <MidSection/>
      <Slide products={products} title="Discounts for You" timer={false} />
      <Slide products={products} title="Suggesting Items" timer={false}/>
      <Slide products={products} title="Top Selection" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Footer />
      </Component>
        </> 
    )
}

export default Home;