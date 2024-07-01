
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import { Box ,styled} from "@mui/material";


//Array of Footer Links
const footerLinks = [
    {
        title:"about",
        links:[
            {
            name:"Contact Us",
            redirect:"https://www.flipkart.com/helpcentre",
            },
            {
                name:"About Us",
                redirect:"https://www.flipkart.com/about-us",
                },
                {
                    name:"Careers",
                    redirect:"https://www.flipkartcareers.com",
                    },
                    {
                        name:"Flipkart Stories",
                        redirect:"https://stories.flipkart.com",
                        },
                        {
                            name:"Press",
                            redirect:"https://stories.flipkart.com/category/top-stories/news",
                            },
                            {
                                name:"Flipkart Wholesale",
                                redirect:"https://www.flipkartwholesale.com",
                                },
                                {
                                    name:"Corporate information",
                                    redirect:"https://www.flipkart.com/corporate-information",
                                    },

        ]

    },
    {
    title:"help",
    links:[
    {
        name:"Payments",
        redirect:"https://www.flipkart.com/pages/payments"
    },
    {
        name:"Shippings",
        redirect:"https://www.flipkart.com/pages/shipping"
    },
    {
        name:"Cancellation & Returns",
        redirect:"https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
    },
    {
        name:"FAQ",
        redirect:"https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"
    },
    ],
    },
    {
        title:"policy",
        links: [
            {
                name:"Return Policy",
                redirect:"https://www.flipkart.com/pages/returnpolicy",
            },
            {
                name:"Term of Use",
                redirect:"https://www.flipkart.com/pages/terms",
            },
            {
                name:"Security",
                redirect:"https://www.flipkart.com/pages/paymentsecurity",
            },
            {
                name:"Privacy",
                redirect:"https://www.flipkart.com/pages/privacypolicy",
            },
            {
                name:"Sitemap",
                redirect:"https://www.flipkart.com/sitemap",
            },
            {
                name:"EPR Compliance",
                redirect:"https://www.flipkart.com/pages/ewaste-compliance-tnc",
            },
            
        ]
    },
    {
        title:"social",
        links:[
            {
                name:"Facebook",
                redirect:"https://www.facebook.com/flipkart"
            },
            {
                name:"Twitter",
                redirect:"https://twitter.com/flipkart"
            },
            {
                name:"YouTube",
                redirect:"https://www.youtube.com/flipkart"
            }
        ]
    }

]

// Styling
const FooterWrapper = styled('footer')(({theme}) => ({
    marginTop:20,
    background: '#212121',
     color:'#fff',
     padding:"20px 20px ",
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-between",
      overflow:'hidden',
      '& p':{
      fontSize:'16px'
      },
      [theme.breakpoints.down('md')]:{
        display:'flex',
        flexDirection:'column',
        flexWrap:"wrap"
      }
}))
   
    
 const Extrainfo = styled(Box)(({theme}) =>({
        background: '#212121',
         color:'#fff',
         fontSize:"14px",
          padding:"20px 20px ",
          display: "flex",
          alignItems:"center",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTop:"1px solid #7A8787",
          [theme.breakpoints.down("md")]:{
            display:'flex',
            alignItems:"flex-start",
            flexDirection:'column',
            flexWrap:"wrap",
            gap:"10px",  
          }
    }))
   

 const FooterLink = styled('a')(({theme})=>({
    textDecoration:"none",
    color:'#fff',
    display:'flex',
    alignItems:"center",
    marginBottom:'5px',
    '&:hover':{
        textDecoration:'underline'
    }
 }))
    

  
const Footer = () => {
  return (
     <>
    <FooterWrapper>
      {footerLinks.map((el, i) => (
        <Box key={i} style={{ flex: "1 1 25%", padding: "10px" }}>
          <h2 style={{ color: "#7A8787", textTransform: "uppercase", fontWeight: "400", marginBottom: "10px" }}>{el.title}</h2>
          {el.links.map((item, j) => (
            <FooterLink key={j} href={item.redirect} target="_blank" rel="noreferrer">{item.name}</FooterLink>
          ))}
        </Box>
      ))}
      <Box style={{ flex: "1 1 25%", padding: "10px", borderLeft: "1px solid #7A8787" }}>
        <div>
          <h2 style={{ color: "#7A8787", textTransform: "uppercase", fontWeight: "400", fontSize:"1.3rem" }}>Mail Us:</h2>
          <p>FlipKart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>
      </Box>
      <Box style={{ flex: "1 1 25%", padding: "10px" }}>
        <div>
          <h2 style={{ color: "#7A8787", textTransform: "uppercase", fontWeight: "400", fontSize:"1.3rem" }} >Registered Office Address:</h2>
          <p>Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India <br />
            CIN: U51109KA2012PTC066107<br />
            Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
          </p>
        </div>
      </Box>
    </FooterWrapper>
    <Extrainfo>
        <FooterLink href="https://seller.flipkart.com/sell-online" target="_blank" rel="noreferrer">
            <span style={{color: '#C5AA30'}}><WorkIcon style={{fontSize:"20px"}}/></span> Sell On FlipKart
        </FooterLink>
        <FooterLink href="https://brands.flipkart.com" target="_blank" rel="noreferrer" >
            <span style={{color: '#C5AA30' }} ><StarIcon style={{fontSize:"20px"}}/></span> Advertise
        </FooterLink>
        <FooterLink href="https://www.flipkart.com/the-gift-card-store" target="_blank" rel="noreferrer">
            <span style={{color: '#C5AA30'}}><CardGiftcardIcon style={{fontSize:"20px"}}/></span> Gift Cards
        </FooterLink>
        <FooterLink href="https://www.flipkart.com/helpcentre" target="_blank" rel="noreferrer">
            <span style={{color: '#C5AA30'}}><HelpIcon style={{fontSize:"20px"}}/></span> Help Center
        </FooterLink>
        <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
         <img src= "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="paymentmethodssvg"/>
    </Extrainfo>
     </>
    )
}



export default Footer;