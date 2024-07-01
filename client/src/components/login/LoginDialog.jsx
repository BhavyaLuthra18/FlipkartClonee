import { useState  , useEffect, useContext } from "react";

import { Dialog,Box ,TextField ,Typography ,Button,styled} from "@mui/material";

import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";


//Styling
const Component = styled(Box)(({theme}) => ({
    height:'69vh',
    width:'90vh',
    [theme.breakpoints.down('md')]:{
        width:'50vh',
        overFlow:'hidden',
       scrollWidth:'none',
       '&::-webkit-scrollbar' :{
        display :'none'
       }
    },
    [theme.breakpoints.down('sm')]:{
        width:'35vh',
        overFlow:'hidden', 
      
        scrollWidth:'none',
        '&::-webkit-scrollbar' :{
         display :'none'
        }
    }
}))



const Image = styled(Box)(({theme}) => ({
    background:"#2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
    height:'86%',
    width:'28%',
    padding: '45px 35px',
  ' & > p , & > h5' : {
        color:'#FFFFFF',
        fontWeight:600,
    },
    [theme.breakpoints.down('md')]:{
     display:'none'
    }

}))


const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, & > button, & > p {
    margin-top: 20px;
}
`;


const LoginButton = styled(Button)(({theme})=>({
    textTransform:'none',
    background:'#FB641B',
    color:'#fff',
    height:'48px',
    display:'flex',
    borderRadius:'2px',
    [theme.breakpoints.down('md')]:{
        width:300,
        marginLeft:120,

    },
    [theme.breakpoints.down('sm')]:{
        width:200,
        marginLeft:80
    }
}))


const RequestOTP = styled(Button)(({theme})=>({
    textTransform:'none',
    background:'#fff',
    color:'#2874f0',
    height:'48px',
    borderRadius:'2px',
    boxShadow: '0 2px 4px 0 rgb( 0 0 0/ 20%)',
    [theme.breakpoints.down('md')]:{
        width:300,
        marginLeft:120
    },
    [theme.breakpoints.down('sm')]:{
        width:200,
        marginLeft:80
    }
}))


const Text = styled(Typography)(({theme}) => ({
    fontSize:'12px',
    color:'#878787',
    [theme.breakpoints.down('md')]:{
        marginLeft:20
    }
}))


const CreateAccount = styled(Typography)(({theme}) => ({
    fontSize:'14px',
    textAlign:'center',
    color:'#2874f0',
    fontWeight:600,
    cursor:'pointer',
   [theme.breakpoints.down('md')]:{
    marginLeft:40
   }  
}))

const Error = styled(Typography)(({theme}) => ({
    fontSize:'10px',
    color:'#ff6161',
    lineHeight:0,
    marginTop:'10px',
    fontWeight:600,
    [theme.breakpoints.down('md')]:{
        marginLeft:20
    }
}))


const TextFieldContainer = styled(TextField)(({theme}) =>({
    width:'auto',
    [theme.breakpoints.down('md')]:{
        width:500,
        marginLeft:20
    },
    [theme.breakpoints.down('sm')]:{
        width:350,
        marginLeft:20
    }
}))


const MidText = styled(Typography)(({theme}) => ({
textAlign:'center',
[theme.breakpoints.down('md')]:{
    marginLeft:20
},
[theme.breakpoints.down('sm')]:{
    marginLeft:6
}
}))



// account intial values to be displayed
const accountIntitialvalues = {
    login: {
     view: 'login' ,
     heading:'Login',
     subHeading:'Get access to your Orders, Wishlist and Recommendations '
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

//  setting value empty at first
 const signupIntitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
 }


const loginInitialValues = {
  username:'' ,
  password:''
}



const LoginDialog = ({open ,setOpen} ) => {

     // States
    const [account , toggleAccount] = useState(accountIntitialvalues.login);
    const [signup ,setSignup] = useState(signupIntitialValues);
    const [login , setLogin] = useState(loginInitialValues);
    const [error, setError]= useState(false)

    const {setAccount} = useContext(DataContext);

    // things to happen on close
    const handleClose  = () => {
    setOpen(false);
    // on close setting default as login
    toggleAccount(accountIntitialvalues.login);
    setError(false);
    }

    // Signup
    const toggleSignup = () =>{
    toggleAccount(accountIntitialvalues.signup);
    }

     //Login
    const toggleLogin = () => {
        toggleAccount(accountIntitialvalues.login);
    }
    
    // targeting the form value
    const onInputChange = (e) => {
     setSignup({
        ...signup,
      [e.target.name]:e.target.value
     });
   
    }
 
    // Signup
   const signupUser = async (e) =>{
   let response =  await authenticateSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.firstname);
   localStorage.setItem('account',signup.firstname)
  }


 const onValueChange = (e) => {
 setLogin({
    ...login,
    [e.target.name]:e.target.value
 })
 }

 // Log-in 
const loginUser = async () => {
 let response = await authenticateLogin(login);
 console.log(response);
 if(response && response.status === 200){
 handleClose();
 setAccount(login.username);
 localStorage.setItem("account", login.username);
 }
 else{
    setError(true);
 }
}

useEffect(() => {
    const storeAccount = localStorage.getItem('account');
    console.log('Stored account:', storeAccount);
    if (storeAccount) {
        setAccount(storeAccount);
    }
}, [setAccount]);


 return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}> 
    <Component>
    <Box style={{display:'flex', height:'100%'}}>
    <Image>
     <Typography variant="h5">{account.heading}</Typography>
    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
    </Image>
    { account.view === 'login' ?
    <Wrapper>
    <TextFieldContainer variant="standard"onChange={onValueChange} name="username" label="Enter Username" />
    {error && <Error>Please enter valid username or password</Error>}
    <TextFieldContainer variant="standard" onChange={onValueChange} name="password" label="Enter Password" />
    <Text>By continuing , you agree to Flipkart's Terms of Use and Privacy Policy</Text>
    <LoginButton onClick={() => loginUser()}>
        Login
    </LoginButton>
    <MidText>OR</MidText>
    <RequestOTP>
        Request OTP
    </RequestOTP>
     <CreateAccount onClick={()=>toggleSignup()}>New to FlipKart? Create an account</CreateAccount>
       </Wrapper>
        :
    <Wrapper>
     <TextFieldContainer variant="standard" onChange={onInputChange} name='firstname'label="Enter Firstname" />
     <TextFieldContainer variant="standard"  onChange={onInputChange}  name='lastname'label="Enter Lastname" />
     <TextFieldContainer variant="standard"  onChange={onInputChange}   name='username'label="Enter Username" />
     <TextFieldContainer variant="standard"  onChange={onInputChange}  name='email'label="Enter Email" />
     <TextFieldContainer variant="standard" onChange={onInputChange}  name='password'label="Enter Password" />
     <TextFieldContainer variant="standard"  onChange={onInputChange} name='phone' label="Enter Phone" />
     <LoginButton onClick={() => signupUser()} >
      Continue
     </LoginButton>
      <RequestOTP onClick={() => toggleLogin()} >
      Existing User? Log in
      </RequestOTP>
   </Wrapper>
} 
    </Box>
    </Component>
    </Dialog>
    )
}

export default LoginDialog;