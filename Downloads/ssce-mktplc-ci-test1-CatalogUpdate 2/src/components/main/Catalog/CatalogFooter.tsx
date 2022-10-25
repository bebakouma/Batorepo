import * as React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const CatalogFooter: React.FC = () => {
  
return(
        <>    
        <div style={{marginLeft:'260px', display:'flex', flex: '0%', flexWrap:'wrap', gap:'45%'}}>
            <div style={{color:'#0A85C7'}}>
                <p>For immediate sales attention, call:
                 <h1> +1 844-994-SSNC (7762)</h1>
                    <LanguageIcon sx={{fontSize:'20px'}}></LanguageIcon><span style={{color:'#33BDE9'}}>International</span> <MailIcon sx={{fontSize:'20px', marginLeft:'10px'}}></MailIcon> <span style={{color:'#33BDE9'}}>Email Sales </span><SupportAgentIcon sx={{fontSize:'20px', marginLeft:'10px'}}></SupportAgentIcon><span style={{color:'#33BDE9'}}>Support</span>
                </p>
            </div>
            <div style={{color:'#0A85C7', marginTop:'80px', display:'flex', gap:'15px'}}>
                <TwitterIcon></TwitterIcon><LinkedInIcon></LinkedInIcon><FacebookIcon></FacebookIcon><YouTubeIcon></YouTubeIcon><InstagramIcon></InstagramIcon>
            </div>
            <div style={{color:'#577687'}}>
                About | Offices | Careers | Contact Us
            </div>
            <div  style={{color:'#0A85C7'}}>
                Copyright 2022 by SS&C Technologies, Inc.
            </div>
        </div>
        </>
    );
};

export default CatalogFooter;