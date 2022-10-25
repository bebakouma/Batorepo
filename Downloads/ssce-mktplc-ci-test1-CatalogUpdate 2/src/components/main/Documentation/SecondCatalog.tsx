import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, CardActionArea, Button } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import Typography from '@mui/material/Typography';
import SSNC from '../../../assets/ssnc.png';
import Intex from '../../../assets/Intex.png';
import Sustain from '../../../assets/Sustain.png';
import GraphQL from '../../../assets/GraphQL.png';



const SecondCatalog: React.FC = () => {
  
    return (
        <>
        <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
        <Typography variant='h1' color='#1A5276' marginBottom={'10px'} fontSize = "20px">Catalog</Typography>
        </div>
        {/* SS&C Investment Portfolio */}
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
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* SS&C Algorithmics Simulated Instrument Analysis */}
        <Card sx={{ maxWidth: 390 , boxShadow:'3px 7px 7px lightGrey'}}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '12px'}}  >
                Advisor Practice Analysis
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* SS&C Advent Genesis */}
        <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={SSNC} width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={550} lineHeight={1} style={{paddingTop: '12px'}}  >
                Agency Lender and Services
              </Typography>
              </div>
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'25px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* SS&C Sylvan Performance Analytics */}
        <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={SSNC} alt='SS&C logo' width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{paddingTop:'4px'}}>
                Altair
              </Typography>
              </div >
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'20px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Anova*/}
        <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={SSNC} alt='SS&C logo' width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{paddingTop:'4px'}}>
                Anova
              </Typography>
              </div >
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'20px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
              </Typography>
              </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Antares */}
        <Card sx={{ maxWidth: 390, boxShadow:'3px 7px 7px lightGrey' }}>
          <CardActionArea>
            <CardContent>
              <div style={{display:'flex'}}>
            <img src={SSNC} alt='SS&C logo' width='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{paddingTop:'4px'}}>
                Antares
              </Typography>
              </div >
             <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '0px',marginTop:'20px', gap: '0px', flex:'50%', flexWrap:'wrap'}}>
             <div style={{display: 'flex'}}>
             <img src={GraphQL} alt='GraphQL' width='8%'  style={{marginRight:'12px', marginLeft:'80px'}}></img>
              <Typography  variant="body2" color="text.secondary" fontWeight={500} flex='50%' style={{paddingTop:'5px', color:'#1F618D', fontSize:'14px'}}>
                Open GraphQL Sandbox
              </Typography>
              </div>
              <div style={{display: 'flex'}}>
              {/* <img src={''} alt='ReDoc' width='8%'  style={{marginRight:'12px', marginLeft:'80px', paddingTop:'2px'}}></img> */}
              <WarningIcon color='primary' sx={{marginLeft:'82px', marginRight:'17px', marginTop:'5px'}}/>
              <Typography  variant="body2" color="text.secondary" fontWeight={500}  flex='50%' style={{paddingTop:'10px', color:'#1F618D', fontSize:'14px'}}>
                View Product Info
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
      
 export default SecondCatalog;