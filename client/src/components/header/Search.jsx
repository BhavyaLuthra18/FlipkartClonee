
import {useState , useEffect} from 'react';

import { InputBase ,Box , List,ListItem,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {useSelector ,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


import {getProducts} from '../../redux/actions/productActions'



// Styling
const SearchContainer = styled(Box)(({theme}) => ({
    background:'#fff',
    width:'38%',
    borderRadius:'2px',
    marginLeft:'10px',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        width:'60%'
    }
}))


const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;


const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
display:flex;
`;

const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;
`



const Search = () => {
     //States
    const [text,setText] = useState('');

    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
    setText(text);
    }

 return (
        <SearchContainer>
           <InputSearchBase
           placeholder="Search for products,brands and more"
           onChange={(e) => getText(e.target.value)}
           value={text}
           />
           <SearchIconWrapper>
            <SearchIcon/>
           </SearchIconWrapper>
           {
            text && 
            <ListWrapper>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(
                        product => (
                        <ListItem>
                            <Link
                            to={`/product/${product.id}`}
                            onClick={()=>setText('')}
                            style={{textDecoration:'none',color:'inherit'}}
                            >
                            {product.title.longTitle}
                            </Link>
                        </ListItem> 
                        )
                    )
                }
            </ListWrapper>
           }
         </SearchContainer>
    )
}

export default Search;