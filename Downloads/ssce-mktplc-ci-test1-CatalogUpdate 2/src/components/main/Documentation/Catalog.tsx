import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, CardActionArea, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import SSNC from '../../../assets/ssnc.png';
import Intex from '../../../assets/Intex.png';
import Sustain from '../../../assets/Sustain.png';
import GraphQL from '../../../assets/GraphQL.png';
import ReDoc from '../../../assets/ReDoc.png';
import Lock from '../../../assets/Lock.png';
import User from '../../../assets/User.png';
import RestFul from '../../../assets/RESTful.png';

const Catalog: React.FC = () => {
  
    return (
        <>
                <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
        <Typography variant='h1' color='text.primary' marginBottom={'20px'}>Your Services</Typography>
        </div>
        {/* Advent Genesis */}
        <Card style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '200px', marginBottom: '20px', gap: '20px', flex:"100%", flexWrap:'wrap'}}>
          <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={SSNC} alt='SS&C logo' width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{paddingTop:'12px'}}>
                Advent Genesis
              </Typography>
              </div >
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={RestFul} alt='RestFUL API Docs' width='12%'  style={{marginRight:'12px', marginLeft:'73px', height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px' , color:'#1F618D', fontSize:'14px'}}>
                RestFUL API Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={GraphQL} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'3px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px', paddingLeft:'4px'}}>
                ReDoc API Docs
              </Typography>
              </div>
              <div style={{display: 'flex',  paddingBottom:'31px'}}>
              <img src={User} alt='Security & GDPR Policies' width='11%'   style={{marginRight:'18px', marginLeft:'85px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'7px', color:'#1F618D', fontSize:'14px', paddingLeft:'2px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Advisor Practice Analysis */}
        <Card sx={{ maxWidth: 390 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '6px'}}  >
                Advisor Practice Analysis 
              </Typography>
              </div>
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'81px', height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px' , color:'#1F618D', fontSize:'14px'}}>
                GraphQL Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={Lock} alt='Security & GDPR Policies' width='5%'  style={{marginRight:'12px', marginLeft:'87px', paddingTop:'3px',  height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'6px', color:'#1F618D', fontSize:'14px', paddingLeft:'4px'}}>
                Security & GDPR Policies
              </Typography>
              </div>
              <div style={{display: 'flex',  paddingBottom:'33px'}}>
              <img src={User} alt='Security & GDPR Policies' width='11%'   style={{marginRight:'18px', marginLeft:'85px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px', paddingLeft:'2px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Agency Lenders and Services */}
        <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '12px'}}  >
                Agency Lenders and Services
              </Typography>
              </div>
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'20px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                GraphQL Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={GraphQL} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'3px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'8px', color:'#1F618D', fontSize:'14px'}}>
                ReDoc API Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={Lock} alt='Security & GDPR Policies' width='5%'   style={{marginRight:'18px', marginLeft:'87px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'7px', color:'#1F618D', fontSize:'14px'}}>
                Security & GDPR Policies
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={User} alt='User Guide' width='15%'  style={{marginRight:'18px', marginLeft:'85px', height:'1%', paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Altair */}
        <Card sx={{ maxWidth: 390 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '6px'}}  >
                Altair
              </Typography>
              </div>
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'81px', height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px' , color:'#1F618D', fontSize:'14px'}}>
                GraphQL Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={Lock} alt='Security & GDPR Policies' width='5%'  style={{marginRight:'12px', marginLeft:'87px', paddingTop:'3px',  height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'6px', color:'#1F618D', fontSize:'14px', paddingLeft:'4px'}}>
                Security & GDPR Policies
              </Typography>
              </div>
              <div style={{display: 'flex',  paddingBottom:'33px'}}>
              <img src={User} alt='Security & GDPR Policies' width='11%'   style={{marginRight:'18px', marginLeft:'85px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px', paddingLeft:'2px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Anova */}
        <Card sx={{ maxWidth: 390 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '6px'}}  >
                Anova
              </Typography>
              </div>
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'81px', height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px' , color:'#1F618D', fontSize:'14px'}}>
                GraphQL Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={Lock} alt='Security & GDPR Policies' width='5%'  style={{marginRight:'12px', marginLeft:'87px', paddingTop:'3px',  height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'6px', color:'#1F618D', fontSize:'14px', paddingLeft:'4px'}}>
                Security & GDPR Policies
              </Typography>
              </div>
              <div style={{display: 'flex',  paddingBottom:'33px'}}>
              <img src={User} alt='Security & GDPR Policies' width='11%'   style={{marginRight:'18px', marginLeft:'85px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px', paddingLeft:'2px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Antares */}
        <Card sx={{ maxWidth: 390 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '6px'}}  >
                Antares
              </Typography>
              </div>
              <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'81px', height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px' , color:'#1F618D', fontSize:'14px'}}>
                GraphQL Docs
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              <img src={Lock} alt='Security & GDPR Policies' width='5%'  style={{marginRight:'12px', marginLeft:'87px', paddingTop:'3px',  height:'1%'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'6px', color:'#1F618D', fontSize:'14px', paddingLeft:'4px'}}>
                Security & GDPR Policies
              </Typography>
              </div>
              <div style={{display: 'flex',  paddingBottom:'33px'}}>
              <img src={User} alt='Security & GDPR Policies' width='11%'   style={{marginRight:'18px', marginLeft:'85px', height:'1%' , paddingTop:"6px"}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'9px', color:'#1F618D', fontSize:'14px', paddingLeft:'2px'}}>
                User Guide
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
        </Card>

        

       
        </>
          );
        };
      
 export default Catalog;