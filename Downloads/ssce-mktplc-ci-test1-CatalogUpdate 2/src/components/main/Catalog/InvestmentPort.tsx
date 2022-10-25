import * as React from 'react';
import SSNC from '../../../assets/ssnc.png';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import InfoIcon from '@mui/icons-material/Info';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


const SingleService: React.FC = () => {
  
    return(
            <>    
            <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'5%', marginTop:'50px'}}>
            <img src={SSNC} width='10%' style={{marginRight:'-15px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" lineHeight={1} fontWeight="800" marginTop="30px">
                SS&C Investment Portfolio  
              </Typography>
            </div>
            <div style={{marginLeft:'200px'}}> <p>A customizable API call for all of your firm’s holdings data.<br></br><br></br>Investment Portfolio provides users with the ability to query their portfolio holdings data from across all SS&C products and services. O!en the input to any analytics calculation, investment portfolio provides users information on identifiers, quantities, transaction fees, important dates, and any additional data we might have on financial securities in an easy to consume format.<br></br><br></br>Investment Portfolio leverages a GraphQL API which allows developers to design a data format congruent to their use case’s needs without the need to implement complex ETL pipelines. Once a user is satisfied with a GraphQL query, a query can be published and shared as a RESTful API query to solidify the format for use by a larger audience.</p></div>
            <div style={{backgroundColor: '#052C29', color:'white', marginLeft:'100px', marginTop: '20px', textAlign:'center', fontWeight:'800', fontSize:'17px', padding: '5px'}}><p>Investment Portfolio is a Pay-As-You-Go service, metered by the number of API calls made in a billing period.</p></div>
     


<div style={{ marginLeft:'260px', display:'flex', alignItems: 'flex-start', gap: '0px', marginBottom: '50px', marginTop: '20px'}}>
      
<Card sx={{ minWidth: 275, padding: 0, borderRight: 'solid 1px white'}}>
      <CardContent style={{ padding: 0}}>
          <div style={{width: '100%'}} >
        <Typography sx={{ fontSize: 17, textAlign:'center', backgroundColor: '#A2113F', color: 'white' , padding: '10px'}} color="text.secondary" gutterBottom>
          Free Trial
        </Typography>
        </div>
        <div style ={{ backgroundColor: '#E91E5F'}}>
        <Typography variant="h5" component="div" sx={{textAlign:'center' , padding: '20px', fontWeight: '800', fontSize: '45px', color: "white", }}>
          Free
        </Typography>
        
        <Typography variant="body2" style={{textAlign:'center', color: "white", padding: "10px"}}>
          Up to 50 API calls per month
          
        </Typography>
        </div>
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 275, padding: 0, borderRight: 'solid 1px white'}}>
      <CardContent style={{ padding: 0}}>
          <div style={{width: '100%'}} >
        <Typography sx={{ fontSize: 17, textAlign:'center', backgroundColor: '#42087C', color: 'white' , padding: '10px'}} color="text.secondary" gutterBottom>
          Lite Plan
        </Typography>
        </div>
        <div style ={{ backgroundColor: '#A05BE5'}}>
        <Typography variant="h5" component="div" sx={{textAlign:'center' , padding: '20px', fontWeight: '800', fontSize: '45px', color: "white", }}>
          $1.00/call
        </Typography>
        
        <Typography variant="body2" style={{textAlign:'center', color: "white", padding: "10px"}}>
          Up to 250 API calls per month
          
        </Typography>
        </div>
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 275, padding: 0, borderRight: 'solid 1px white'}}>
      <CardContent style={{ padding: 0}}>
          <div style={{width: '100%'}} >
        <Typography sx={{ fontSize: 17, textAlign:'center', backgroundColor: '#0A45C4', color: 'white' , padding: '10px'}} color="text.secondary" gutterBottom>
          Standard Plan
        </Typography>
        </div>
        <div style ={{ backgroundColor: '#2769F7'}}>
        <Typography variant="h5" component="div" sx={{textAlign:'center' , padding: '20px', fontWeight: '800', fontSize: '45px', color: "white", }}>
          0.25¢/call
        </Typography>
        
        <Typography variant="body2" style={{textAlign:'center', color: "white", padding: "10px"}}>
          Up to 10,000 API calls per month
          
        </Typography>
        </div>
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 275, padding: 0, borderRight: 'solid 1px white'}}>
      <CardContent style={{ padding: 0}}>
          <div style={{width: '100%'}} >
        <Typography sx={{ fontSize: 17, textAlign:'center', backgroundColor: '#076E69', color: 'white' , padding: '10px'}} color="text.secondary" gutterBottom>
          Premium Plan
        </Typography>
        </div>
        <div style ={{ backgroundColor: '#23AEA8'}}>
        <Typography variant="h5" component="div" sx={{textAlign:'center' , padding: '20px', fontWeight: '800', fontSize: '45px', color: "white", }}>
          Unlimited
        </Typography>
        
        <Typography variant="body2" style={{textAlign:'center', color: "white", padding: "10px"}}>
          Call for pricing
          
        </Typography>
        </div>
      </CardContent>
      
    </Card>


   </div>
        <div >
        <footer>
      <Box
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 2, sm: 4 }}
        bgcolor="#F2F3F4"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={17}>
            <Grid item xs={12} sm={3}>
                <div style={{display:'flex'}}>
                <InfoIcon/>
              <Box style={{fontWeight: '600' , fontSize:'18px', paddingLeft:'5px', paddingBottom: '10px'}}>General</Box>
              </div>
              <div >
              <Box>
                <Typography>Version: 2.0</Typography>
              </Box>
              <Box>
                <Typography>Updated: 10/26/2021</Typography>
              </Box>
              <Box>
              <Typography>Author: SS&C Technologies</Typography>
              </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
                <div style={{display:'flex'}}>
                <LocalLibraryIcon/>
              <Box style={{fontWeight: '600' , fontSize:'18px', paddingLeft:'5px', paddingBottom: '10px'}}>Documents</Box>
              </div>
              <div >
              <Box>
                <Typography>GraphQL API QuickStart Guide</Typography>
              </Box>
              <Box>
                <Typography>GraphQL API Sandbox</Typography>
              </Box>
              <Box>
              <Typography>RESTful API Quickstart Guide</Typography>
              </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
                <div style={{display:'flex'}}>
                <SettingsApplicationsIcon/>
              <Box style={{fontWeight: '600' , fontSize:'18px', paddingLeft:'5px', paddingBottom: '10px'}}>Documents</Box>
              </div>
              <div >
              <Box>
                <Typography>Industry: Cross-Industry</Typography>
              </Box>
              <Box>
                <Typography>Function: Data Service</Typography>
              </Box>
              <Box>
              <Typography>Technology: Cloud Platform</Typography>
              </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
                <div style={{display:'flex'}}>
                <ChatBubbleIcon/>
              <Box style={{fontWeight: '600' , fontSize:'18px', paddingLeft:'5px', paddingBottom: '10px'}}>Support</Box>
              </div>
              <div >
              <Box>
              <Button variant="contained" startIcon={<PhoneIcon />} style={{borderRadius :'8px', fontSize:'18px'}} >
                 Contact Sales
                </Button>
              </Box>
             
              </div>
            </Grid>
          </Grid>
        
        </Container>
      </Box>
    </footer>
        </div>

            </>
    );
};

export default SingleService;