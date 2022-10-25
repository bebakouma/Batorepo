import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button} from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import SSNC from '../../../assets/ssnc.png';
import Check from '../../../assets/Check.png';
import Users from '../../../assets/Users.png';
import CheckCircle from '../../../assets/CheckCircle.png';
import UnCheckCircle from '../../../assets/UnCheckCircle.png';
import {useNavigate} from 'react-router-dom';
import Up from '../../../assets/Up.png'
import Twenty from '../../../assets/Twenty.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Region from './Regions';


const UnownedServices: React.FC = () => {

    const [value, setValue] = useState('1');
    let [viewport, setViewPort] = useState ({
        latitude: 45.4211,
        longtitude: -75.6903,
        width:'100vw',
        height: '100vh',
        zoom: 10
    })

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const navigate = useNavigate();

  //handleChange tabs
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
      
    },
  }));

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

    return (
      <>
        <Card sx={{marginLeft:'257px', height:296, boxShadow: "none"}}>
        <Button variant='contained' startIcon={<ArrowBackIcon  style={{width:'30px'}}/>}  style={{backgroundColor:"#0A85C7", color:"#F7FDFF", width:"250px", height:"48px", borderRadius:"5px", fontWeight:700, fontFamily:"Roboto", fontSize:"16px",}} onClick={() => {
          navigate('/')}} >GO BACK TO CATALOG</Button>
            <CardContent>
            
            <div style={{display:'flex', marginTop:'20px'}}>
            <img src= {SSNC} width='198px' height='110px' style={{marginRight:'20px', marginLeft:'-10px', }}></img>
              <Typography variant='h1' fontSize='34px' fontWeight={600} component="div" align="left" lineHeight={1} color="#0468B1" style={{marginRight: '16px', marginTop: '5px'}}>
               SS&C Advent Geneva API
              </Typography>
              <Stack  spacing={1}  direction ="row" color="primary" style ={{marginTop: '5px' }} >
              <Chip label='Cross-Industry'  style={{backgroundColor:"#E7F3F9", color:"#0A85C7"}} />
                    <Chip label='Data Service' style={{backgroundColor:"#EFE6FD", color:"#6200EE"}} />  
                    <Chip label='Quick Start' style={{backgroundColor:"#FFE5F0", color:"#D72F77"}} /> 
                </Stack>
              </div> 
              <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} color="#000000" style={{width:'803px', marginLeft:'215px', marginTop:"-35px"}}>
              A performant, RESTful API for accounting data held in SS&C Geneva. The SS&C Advent Geneva API provides users with the ability to query their portfolio holding data across funds and through time. This solution is handy for users looking for streamlined access to their data, or to make use of the API to connect to an SS&C analytics engine.
              </Typography>
            </CardContent>
        </Card>
        
        <Box sx={{ width: '1025px', typography: 'body1', marginLeft:"257px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General" value="1" />
            <Tab label="Capacity" value="2" />
            <Tab label="Document" value="3" />
            <Tab label="FAQs" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ display:'flex'}}>
            <div style={{width:"32%", marginRight:'15px'}} >
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Avalable Regions
              </Typography>
          
              <div style={{width:"32%", marginRight:'15px'}}>
  
              <Region/>
            </div>
            </div>
          
            <div style={{width:"32%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Location
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            The SS&C Advent Geneva API runs on the SS&C Private Cloud. Choose a geography to deploy to that best meets your organization's needs - whether to minimize latency for performance, or meet your jurisdiction's data regulations and best practices.
              </Typography>
         
            </div>
            <div style={{width:"32%"}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Security and Privacy First
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            All software and hardware solutions are built with our client's security and privacy in mind. Our solutions meet a global suite of regulations and best practices to ensure your data is safe and secure on our cloud.
              </Typography>
            </div>

        </TabPanel>
        <TabPanel value="2" style={{ display:'flex',marginTop:'-50px' }}>
            <div style={{width:"32%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Enterprise Scale System
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            With the SS&C Advent Geneva API, you don't need to deploy any infrastructure as the service runs in a scalable cluster. Ask us about deploying custom, dedicated infrastructure! 
              </Typography>
         
            </div>
            <div style={{width:"32%"}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Your Data at Your Speed
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
              Your data is cached through time allowing for more efficient queries and data aggregation operations. 
              </Typography>
            </div>
            <div style={{width:"32%", marginRight:'15px'}} ></div>
        </TabPanel>
        <TabPanel value="3" style={{ display:'flex',marginTop:'-50px' }}>
        <div style={{width:"32%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               API Documentation
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Leverage our interactive ReDoc documentation to get a hands-on look into how to specify your payloads and what to expect in your responses.
              </Typography>
            </div>
            <div style={{width:"32%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Getting Started
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Enjoy a library of quickstart refence material including code samples and common queries.
              </Typography>
         
            </div>
            <div style={{width:"32%"}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Templated Workflows
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Find a set of templates that can be used with the SS&C Everywhere Workflow Editor to get you up and running with commong data pipelining examples like pushing aggregate data dumps to users or hooking into new products and services
              </Typography>
              
            </div>

        </TabPanel>
        <TabPanel value="4" style={{ display:'flex',marginTop:'-50px' }}>
            <div style={{width:"48%", marginRight:'15px'}} >
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Do I need SS&C Advent Geneva?
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Use of this solution is predicated on the assumption that you have an existing implementation of SS&C Advent Geneva or similar. If you'd like to learn more about how to get started with SS&C Advent, please reach out to sales@sscinc.com.
              </Typography>
         
            </div>
            <div style={{width:"48%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               How is usage of the platform monitored?
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Use of the SS&C Advent Geneva API is billed on usage per API call, or by purchasing a subscription allowing for unlimited usage over a time window. 
              </Typography>
         
            </div>

        </TabPanel>
      </TabContext>
    </Box>
    <Box style={{marginLeft:"257px", marginTop:'50px', marginBottom:'100px'}}>
    <Typography  fontSize='34px' fontWeight={600} component="div"  style={{color: '#0A85C7', marginLeft: '350px'}}>
               Ready to get started?
    </Typography>
    <div style={{ marginTop:"40px", marginLeft:'100px'}}>
    <img src={Check} style={{display:'inline-block'}}></img>
    <Typography variant='body1' fontSize='20px' fontWeight={500} component="div" align="left" lineHeight={1.5} style={{display:'inline-block', marginLeft: '25px', marginRight: '85px', color:'#000000'}}>
            Free 15-day trial
    </Typography>
    <img src={Check} style={{display:'inline-block'}}></img>
    <Typography variant='body1' fontSize='20px' fontWeight={500} component="div" align="left" lineHeight={1.5} style={{display:'inline-block', marginLeft: '25px', marginRight: '85px', color:'#000000'}}>
            Immediately Accessible
    </Typography>
    <img src={Check} style={{display:'inline-block'}}></img>
    <Typography variant='body1' fontSize='20px' fontWeight={500} component="div" align="left" lineHeight={1.5} style={{display:'inline-block', marginLeft: '25px', marginRight: '85px', color:'#000000'}}>
            Cancel Anytime
    </Typography>
    </div>
    <Typography variant='body1' fontSize='14px' fontWeight={400} component="div" align="center" lineHeight={1.5} color="#000000" style={{width:'962px', marginTop:'20px', marginLeft:'30px'}}>
        Whether you want to test out a free trial, use the service periodically only when the need arises, or integrate the capabilities into daily workflows, there's a pricing solution that meets your needs!
    </Typography>
    </Box>
    <Box style={{marginLeft:"257px", marginTop:'50px', marginBottom:'100px'}}>
            <Typography fontSize='20px' fontWeight={600} style={{}}>Our pricing plans</Typography>
            <img src={Twenty} style={{marginLeft: '350px',marginRight:'10px', width:'70px'}}></img>
            <Stack direction="row" spacing={1} alignItems="center" style={{marginBottom:"30px"}}>
            <img src={Up} style={{marginLeft: '380px', marginBottom:'20px',marginRight:'10px', width:'20px'}}></img>
            <Typography fontSize='14px' fontWeight={600} >Billed Yearly</Typography>
            <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
      <Typography fontSize='14px' fontWeight={600} style={{}}>Billed Monthly</Typography>
      </Stack>
    </Box>   

    <Card style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '260px', marginBottom: '20px',marginTop:'-20px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none"}} >
              <Card sx={{ ':hover': { bgcolor: '#C0EBF8',}, width: '295px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' }}>
                
                  <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
                <img src={Users} alt='SS&C logo' width='29px' height='20px' style={{marginRight:'10px', marginLeft:'30px', marginTop:'8px'}}></img>
                <div>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{fontSize: '34px', display: "inline-block"}}>
                    Lite
                  </Typography>
                  </div>
                  </div>
                <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                    Perfect for getting started
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={600}  style={{marginTop:'60px', fontSize: '60px', marginBottom:'25px'}}>
                    $0
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={400}  style={{ fontSize: '14px', marginBottom: "20px", }}>
                    per user, per month
                  </Typography>
                  <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', marginLeft: '74px', marginBottom: '10px', border:'4px solid #0A85C7' }}>GET STARTED</Button>
                <List style={{marginLeft:'50px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Free to Use</Typography>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>15-Day Commitment-free Trial</Typography>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Simulated, Realistic Data</Typography>
                    </ListItem>
                </List>
             </Card>
             <Card
             
              sx={{ ':hover': {
                bgcolor: '#C0EBF8',},
                  width: '295px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' }}>
               
               <div style={{display:'flex', marginTop: "20px"}}>
             <img src={Users} alt='SS&C logo' width='29px' height='20px' style={{marginRight:'10px', marginLeft:'10px', marginTop:'8px'}}></img>
             <div>
             <Typography gutterBottom  fontWeight={600} lineHeight={1} style={{fontSize: '34px', display: "inline-block"}}>
                 Pay as you go
               </Typography>
               </div>
               </div>
             <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                 For the infrequent workflow
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={600}  style={{marginTop:'60px', fontSize: '60px', marginBottom:'25px'}}>
                 $125.00
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={400}  style={{ fontSize: '14px', marginBottom: "20px", }}>
                 per user, per month
               </Typography>
               <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', marginLeft: '74px', marginBottom: '10px', border:'4px solid #0A85C7' }}>GET STARTED</Button>
            <List style={{marginLeft:'50px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>No miniums of thresholds</Typography>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Pay only for what you use</Typography>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Add users anytime</Typography>
                    </ListItem>
            </List>
          </Card>
          <Card sx={{ ':hover': { bgcolor: '#C0EBF8',}, width: '295px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px'  }}>
               
               <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
             <img src={Users} alt='SS&C logo' width='29px' height='20px' style={{marginRight:'10px', marginLeft:'30px', marginTop:'8px'}}></img>
             <div>
             <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{fontSize: '34px', display: "inline-block"}}>
                 Subscription
               </Typography>
               </div>
               </div>
             <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                 Ideal for Enterprise
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={600}  style={{marginTop:'60px', fontSize: '60px', marginBottom:'25px'}}>
                 $25,000
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={400}  style={{ fontSize: '14px', marginBottom: "20px", }}>
                 up to 10 users
               </Typography>
               <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', marginLeft: '74px', marginBottom: '10px', border:'4px solid #0A85C7' }}>GET STARTED</Button>
             <List style={{marginLeft:'50px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Unlimited Access</Typography>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Dedicated Infrastructure</Typography>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                  <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={1}>Our most performant solution</Typography>
                    </ListItem>
        </List>
          </Card>
        </Card>

        <TableContainer component={Paper} style={{ marginLeft:'260px', boxShadow:'none'}}>
      <Table sx={{ width: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> </StyledTableCell>
            <StyledTableCell align="center"><p  style={{fontSize:'18px', fontWeight:400}}>Free Trial</p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px'}} >FREE</p></StyledTableCell>
            <StyledTableCell align="center"><p style={{fontSize:'18px', fontWeight:400}}>Pay-as-you-Go</p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px'}} >$125.00</p></StyledTableCell>
            <StyledTableCell align="center"><p style={{fontSize:'18px', fontWeight:400}}>Subscription</p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px'}} >$25,000</p></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Rich API Documentation</p>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px", }}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px", }}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px", }}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px"}}>Access to templated Workflows</p>
              <StyledTableCell align="center"style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Secure and Compliant</p>
            <StyledTableCell align="center"style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px"}}>Performant access to client data</p>
            <StyledTableCell align="center"style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px"}}>Favorable Pricing</p>
            <StyledTableCell align="center"style={{border:'none'}} ><img src={UnCheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Available in Multiple Cloud Geographies</p>
            <StyledTableCell align="center"style={{border:'none'}} ><img src={UnCheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Dedicated Infrastructure and Unlimited Use</p>
            <StyledTableCell align="center"style={{border:'none'}} ><img src={UnCheckCircle} style= {{width:'17px', height: "17px"}}></img> </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={UnCheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key='Lorem ipsum dolor sit amet' > <p>               </p>
            <StyledTableCell align="center"style={{border:'none'}} >
            <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px',  border:'4px solid #0A85C7' }}>GET STARTED</Button>
             </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} >
              <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px',  border:'4px solid #0A85C7' }}>GET STARTED</Button>
              </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none',}}>
              <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', border:'4px solid #0A85C7' }}>GET STARTED</Button>
              </StyledTableCell>
              </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  
  );
     </>
    );
  };
  
  export default UnownedServices;
  
