 import {useState} from 'react';
 
 import  { AppBar , Toolbar , Box, Typography, IconButton,Drawer, List,ListItem, styled} from '@mui/material'
 import {Menu} from '@mui/icons-material';
 
 import Search from './Search';
 import CustomButtons from './CustomButtons';

 import { Link } from 'react-router-dom';

import LoginDialog from '../login/LoginDialog';


// Styling
 const StyledHeader = styled(AppBar)`
 background: #2874f0;
 height:55px;
 `

 const ComponentWrapper = styled(Link)`
 margin-left:12%;
 line-height:0;
 text-decoration:none;
 color:inherit;
 `
  
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`
const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft: 4
});


const CustomButtonWrapper = styled(Box)(({theme}) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
   display:'none'
  }
}));


  const MenuButton = styled(IconButton)(({theme}) => ({
    display:'none',
    [theme.breakpoints.down('md')]:{
      display:'block',

    }
  }))


 const Header = () => {

    const logoURL ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    // States
    const [draweropen , setDrawerOpen ] = useState(false);
    const [loginOpen,setLoginOpen] = useState(false);
    

   // Menu for md ,sm screen 
    const handleDrawerOpen = () => {
    setDrawerOpen(true);
    }


    const handleDrawerClose = () => {
    setDrawerOpen(false);
    }

 
   const list = () => (
    <Box style={{width:250}} >
      <List>
        <ListItem button>
      <CustomButtons  setLoginOpen={setLoginOpen}/>
        </ListItem>
      </List>
    </Box>
   )

 return (
          <StyledHeader>
           <Toolbar style={{minHeight:55}}>
            <MenuButton color="inherit" onClick={handleDrawerOpen}>
            <Menu/>
            </MenuButton>
            <Drawer open={draweropen} onClose={handleDrawerClose}>
              {list()}
            </Drawer>
            <ComponentWrapper to="/">
                <img src={logoURL} alt="logo" style={{ width: 75}}/>
                <Box style={{display:'flex'}}>
              <SubHeading>
                Explore&nbsp;
              <Box component="span" style={{color:'#FFE500'}}>Plus</Box>   
              </SubHeading>
              <PlusImage src={subURL} alt="sub-logo" />
                </Box>
            </ComponentWrapper>
             <Search/>
             <CustomButtonWrapper>
                <CustomButtons setLoginOpen={setLoginOpen}/>
             </CustomButtonWrapper>
            </Toolbar>
          <LoginDialog open={loginOpen} setOpen={setLoginOpen} />
          </StyledHeader>
       
    )
 }

 export default Header