import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GraphQL from '../../../assets/GraphQL.png';
import ReDoc from '../../../assets/ReDoc.png';
import RestAPI from '../../../assets/RestAPI.png';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';


const Technology: React.FC = () => {
  
    return (
        <>
        <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
        <Typography variant='h1' color='#1A5276' marginBottom={'20px'} fontSize = "20px">Technology</Typography>
        </div>
        <Card style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '200px', marginBottom: '50px', gap: '40px', flex:"100%", flexWrap:'wrap'}}>
          <Card sx={{ maxWidth: 375, maxHeight: 205, boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={GraphQL} alt='GraphQL' width='15%'  style={{marginRight:'75px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" lineHeight={1} style={{ paddingTop:'20px', fontSize: '25px'}}>
                GraphQL
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'14px', marginTop: '15px'}}>
                GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data          
              </Typography>     
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{width:'49%',backgroundColor: "#db0474", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'10px', fontSize:"17px", fontWeight:"700"}}  >Explore GraphQL </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 375, maxHeight: 205, boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={ReDoc} alt='ReDoc' width='35%'  style={{marginRight:'30px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" lineHeight={1} style={{ paddingTop:'20px', fontSize: '25px'}}>
                ReDoc
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'14px', marginTop: '15px'}}>
                ReDoc is an open-source tool that generates API documentation from OpenAPI specifications.         
              </Typography>     
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{width:'43%',backgroundColor: "#0642cb", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'10px', fontSize:"17px", fontWeight:"700"}}  >Explore ReDoc </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 375, maxHeight: 205 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={RestAPI} alt='RestAPI' width='40%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" lineHeight={1} style={{ paddingTop:'20px', fontSize: '25px'}}>
                RestFUL API
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'13px', marginTop: '0px'}}>
                An Application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.          
              </Typography>     
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{ width:'43%',backgroundColor: "#12a5cc", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'8px', fontSize:"17px", fontWeight:"700"}}  >Explore Rest API </Button>
          </CardActions>
        </Card>
        
       
        </Card>
        </>
           
       );
       };
       export default Technology;