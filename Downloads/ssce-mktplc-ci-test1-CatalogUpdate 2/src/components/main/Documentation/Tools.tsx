import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GraphQL from '../../../assets/GraphQL.png';
import ReDoc from '../../../assets/ReDoc.png';
import RestAPI from '../../../assets/RestAPI.png';
import Schemathesis from '../../../assets/Schemathesis.png';
import Microcks from '../../../assets/Microcks.png';
import GraphCMS from '../../../assets/GraphCMS.png';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Tools: React.FC = () => {
  
    return (
        <>
        <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
        <Typography variant='h1' color='#1A5276' marginBottom={'10px'} fontSize = "20px">Tools and Services</Typography>
        </div>
        <Card style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '200px', marginBottom: '50px', gap: '40px', flex:"100%", flexWrap:'wrap'}}>
          <Card sx={{ maxWidth: 270, maxHeight: 205, boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={GraphQL} alt='GraphQL' width='21%'  style={{marginRight:'10px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={510} lineHeight={1} style={{ paddingTop:'8px', fontSize: '19px', paddingRight: '30px'}}>
                GraphQL Code Generator
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              {/* <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'14px', marginTop: '15px'}}>
                GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data          
              </Typography>      */}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{width:'50%',backgroundColor: "#db0474", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'10px', fontSize:"13px", fontWeight:"700"}}  >Build your code </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 270, maxHeight: 205, boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={Schemathesis} alt='Schemathesis' width='20%'  style={{marginRight:'30px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={510} lineHeight={1} style={{ paddingTop:'13px', paddingBottom:'14px', fontSize: '19px'}}>
                Schemathesis
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              {/* <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'14px', marginTop: '15px'}}>
                ReDoc is an open-source tool that generates API documentation from OpenAPI specifications.         
              </Typography>      */}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{width:'50%',backgroundColor: "#11c5d1", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'10px', fontSize:"13px", fontWeight:"700"}}  >Test your code </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 270, maxHeight: 205 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={Microcks} alt='Microcks' width='24%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={510} lineHeight={1} style={{ paddingTop:'13px', fontSize: '19px'}}>
                Microcks
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              {/* <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'13px', marginTop: '0px'}}>
                An Application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.          
              </Typography>      */}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{ width:'55%',backgroundColor: "#2c99f3", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'10px', fontSize:"13px", fontWeight:"700"}}  >Simulate your code</Button>
          </CardActions>
        </Card>
        {/* <Card sx={{ maxWidth: 270, maxHeight: 205 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex', marginBottom: '2px'}}>
            <img src={GraphCMS} alt='GraphCMS' width='26%' style={{marginRight:'20px', marginLeft:'-10px', marginTop: '2px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={510}  lineHeight={1} style={{ paddingTop:'1px', fontSize: '19px', paddingRight:'69px', paddingBottom:'1px'}}>
                GraphCMS
              </Typography>
              </div>
   
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{ width:'55%',backgroundColor: "#12a5cc", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'15px', fontSize:"13px", fontWeight:"700"}}  >Graph your code </Button>
          </CardActions>
        </Card> */}
       <Card sx={{ maxWidth: 270, maxHeight: 205 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={GraphCMS} alt='GraphCMS' width='22.5%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={510} lineHeight={1} style={{ paddingTop:'10px', fontSize: '19px', paddingRight:'69px'}}>
                GraphCMS
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
              {/* <Typography  variant="body2" color="text.secondary"  fontWeight={350} flex='50%' style={{fontSize:'13px', marginTop: '0px'}}>
                An Application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.          
              </Typography>      */}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button variant="contained" style ={{ width:'55%',backgroundColor: "#0b0c23", borderRadius: 10, marginLeft: "auto", marginRight:"auto",marginBottom:'6px', fontSize:"13px", fontWeight:"700"}}  >Simulate your code</Button>
          </CardActions>
        </Card>
        </Card>
        </>
          );
        };
      
 export default Tools;