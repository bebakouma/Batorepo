import * as React from 'react';
import SSNC from '../../../assets/ssnc.png';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

const SSCPortfolio: React.FC = () => {
  
    return(
            <>    
            <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'5%', marginTop:'50px'}}>
            <img src={SSNC} width='10%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" lineHeight={1} fontWeight="800" marginTop="30px">
                SS&C Investment Portfolio  
              </Typography>
            </div>
            <div style={{marginLeft:'200px'}}> <p>A customizable API call for all of your firm’s holdings data.<br></br><br></br>Investment Portfolio provides users with the ability to query their portfolio holdings data from across all SS&C products and services. O!en the input to any analytics calculation, investment portfolio provides users information on identifiers, quantities, transaction fees, important dates, and any additional data we might have on financial securities in an easy to consume format.<br></br><br></br>Investment Portfolio leverages a GraphQL API which allows developers to design a data format congruent to their use case’s needs without the need to implement complex ETL pipelines. Once a user is satisfied with a GraphQL query, a query can be published and shared as a RESTful API query to solidify the format for use by a larger audience.</p></div>
            <div style={{backgroundColor:'#eee', color:'blacmarginLeft:k', marginLeft:'200px'}}><LanguageIcon></LanguageIcon><p>Service Overview</p></div>
            <div style={{backgroundColor: 'rgb(0, 119, 200)', color:'white', marginLeft:'200px', marginTop: '20px', textAlign:'center'}}><p>Evaluate your current service plan</p></div>
            <div style={{ marginLeft:'200px'}}><p>Investment Portfolio is a Pay-As-You-Go service, metered by the number of API calls made in a billing period.  You made 4,873 calls this month for a total monthly bill of $1,208.25.  Upgrade your plan to Premium to save money.</p></div>
            


<div style={{ marginLeft:'400px', display:'flex', alignItems: 'flex-start', gap: '0px', marginBottom: '50px', marginTop: '20px'}}>
      
     
 <Card sx={{ minWidth: 200 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="100"
         alt="algorithmics"
         style={{objectFit:'none', width:60, marginLeft:60, marginTop: 10}}
       />
     </CardActionArea>
   </Card>
   <Card sx={{ minWidth: 200 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="100"
         alt="algorithmics"
         style={{objectFit:'contain', width:60, marginLeft:60, marginTop: 10}}
       />
     </CardActionArea>
   </Card>
   <Card sx={{ minWidth: 200 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="100"
         alt="algorithmics"
         style={{objectFit:'contain', width:60, marginLeft:60, marginTop: 10}}
       />
     </CardActionArea>
   </Card>

   <Card sx={{ minWidth: 200 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="100"
         alt="algorithmics"
         style={{objectFit:'contain', width:50, marginLeft:60, marginTop: 10}}
       />
     </CardActionArea>
   </Card>
   </div>
            </>
    );
};

export default SSCPortfolio;