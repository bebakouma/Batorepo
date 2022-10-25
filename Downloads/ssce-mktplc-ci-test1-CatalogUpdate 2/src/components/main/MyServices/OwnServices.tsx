
import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {Navigate, useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Switch, { SwitchProps } from '@mui/material/Switch';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SSNC from '../../../assets/ssnc.png';
import Warning from '../../../assets/Warning.png';
import PDF from '../../../assets/PDF.png';
import DownloadPDF from '../../../assets/DownloadPDF.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircle from '../../../assets/CheckCircle.png';
import Users from '../../../assets/Users.png';
import Up from '../../../assets/Up.png'
import Twenty from '../../../assets/Twenty.png'
import Leaf from '../../../assets/Leaf.png'
import Barchart from '../../../assets/Barchart.png'
import UnCheckCircle from '../../../assets/UnCheckCircle.png';
import PieChart from './Piechart';
import LineChart from './LineChart';
import Chart from './Chart'
import BillingSummary from './BillingSummary';
import AllInvoices from './AllInvoices';
import MyServicesFooter from './MyServicesFooter';
import DataUsageChart from './DataUsageChart';
import DataBreakdownChart from './DataBreakdownChart'
import UserChart from './UserChart'




const OwnServices: React.FC = () => {

  

    const [value, setValue] = useState('1');
   
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 8,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

      const Item = styled(Paper)(({ theme }) => ({
        
        ...theme.typography.body2,
        padding: theme.spacing(2),
       
        color: theme.palette.text.secondary,
      }));
      
      const navigate = useNavigate();

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
      
    return (
        <>
     <Card sx={{marginLeft:'257px', height:296, boxShadow: "none"}}>
     <Button variant='contained' startIcon={<ArrowBackIcon  style={{marginBottom:'5px', width:'30px'}}/>} style={{backgroundColor:"#0A85C7", color:"#F7FDFF", width:"260px", height:"48px", borderRadius:"5px", fontWeight:700, fontFamily:"Roboto", fontSize:"16px"}} onClick={() => {
          navigate('/')}} >
            GO BACK TO MY SERVICES</Button>
            <CardContent>
            <div style={{display:'flex', marginTop:'20px'}}>
            <img src= {SSNC} width='198px' height='110px' style={{marginRight:'20px', marginLeft:'-10px', }}></img>
              <Typography variant='h1' fontSize='34px' fontWeight={600} component="div" align="left" lineHeight={1} color="#0468B1" style={{marginRight: '16px', marginTop: '5px'}}>
               SS&C Portfolio
              </Typography>
              <Stack  spacing={1}  direction ="row" color="primary" style ={{marginTop: '5px' }} >
              <Chip label='Function'  style={{backgroundColor:"#E7F3F9", color:"#0A85C7"}} />
                    <Chip label='Industry' style={{backgroundColor:"#EFE6FD", color:"#6200EE"}} />  
                    <Chip label='Service Type' style={{backgroundColor:"#FFE5F0", color:"#D72F77"}} /> 
                </Stack>
              </div> 
              <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} color="#000000" style={{width:'803px', marginLeft:'215px', marginTop:"-35px"}}>
              A customizabler API call for all your firm's holding data. Investment Portfolio provides users with the ability to query their portfolio holding data from across all SS&C products and services. One the input to any analytics calculation, investment portfolio provides users information on identifiers, quantities, transaction fees, important dates, and any additional data we might hgave on financial securities in an wasy to consume format.
              </Typography>
            </CardContent>
         
            

        </Card>
        <Box sx={{ width: '1200px', typography: 'body1', marginLeft:"257px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General" value="1" />
            <Tab label="Manage Plan" value="2" />
            <Tab label="Billing" value="3" />
            <Tab label="Documentation" value="4" />
            <Tab label="Settings" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ }}>
            <Typography variant='h6' fontSize='34px' fontWeight={600} component="div" style={{color: '#0A85C7', marginBottom:'50px', marginTop: '25px', marginRight:'15px'}}>
               Plan Overview
              </Typography>
            
            <Card style={{ display:'flex', alignItems: 'flex-start', marginBottom: '20px',marginTop:'-20px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none"}} >
              <Card sx={{  width: '616px',height: '218px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' , }}>
              <CardContent style={{display:'flex'}}>
                  <div style={{width:'40%'}}>
              <Button variant="contained"  style={{color:'#F6FDFF', display: 'inline-block', backgroundColor:'#043854', fontWeight: "500", fontSize:'20px', paddingTop:'1px', paddingBottom:'1px', borderRadius:'4px', }}>Pay-as-you-go</Button>
                <Typography fontSize='20px' fontWeight={500} style={{display: 'inline-block', marginLeft:'12px', paddingTop:'5px'}}>Plan</Typography>
                <Box sx={{ flexGrow: 1, width:'260px', marginTop:'90px'}}>
                 <Typography fontSize='20px' fontWeight={500} > 80% of Data used</Typography>
                 <BorderLinearProgress variant="determinate" value={80} style={{marginTop:'10px'}}/>
                 </Box>
                </div>
                <div style={{width:'50%', marginLeft:'60px'}}>
                {/* <Typography style={{marginLeft:'100px'}}>/Seat a month</Typography> */}
                <Typography style={{ fontWeight:'600', fontSize:'60px', display:'inline-block', marginTop:'30px', marginLeft:'30px'}}> $12 </Typography>
                <Typography fontSize='16px' fontWeight={400} style={{display:'inline-block', color:'#75909F'}}>/Seat a month</Typography>
                <Button variant="contained"  style={{color:'#F6FDFF', display: 'inline-block', backgroundColor:'#0A85C7', fontWeight: "700", fontSize:'15px',  borderRadius:'4px', marginTop:'50px', marginLeft:'100px',  padding:'12px 25px 12px 25px', width:'170px'}}>MANAGE PLAN</Button>
                </div >
                </CardContent> 
             </Card>
             <Card sx={{width: '379px',height: '216px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' }}>
               <CardContent>
               <Typography fontSize='16px' fontWeight={400} style={{marginBottom:'25px', color:'#75909F'}}>Next payment</Typography>
               <Typography fontSize='20px' fontWeight={500}>On September 4th, 2022</Typography>
               <Button variant="outlined"  style={{  fontWeight: "700", fontSize:'15px',border:'3px solid #0A85C7',  borderRadius:'4px', marginTop:'50px',   padding:'12px 25px 12px 25px', width:'170px'}}>VIEW BILLING</Button>
               </CardContent>
          </Card>
          </Card>
          <Typography fontSize='20px' fontWeight={600} style={{backgroundColor:'#FFEAB6', paddingBottom:'10px', paddingLeft:'15px', width:'90%'}}>
            <img src={Warning} style={{marginTop:'10px', marginRight:'15px'}}></img>
            Your Usage amount is at the upper limit. you should consider upgrading soon to increase available space
          </Typography>
          <Typography fontSize='34px' fontWeight={600} style={{color:"#0A85C7", paddingTop:'10px', marginTop:'50px'}}>SS&C Portfolio Billing Summary: August 31, 2022</Typography>
          <BillingSummary/>
          <AllInvoices/>
        
        </TabPanel>
        <TabPanel value="2" style={{}}>
        <Typography variant='h6' fontSize='34px' fontWeight={600} component="div" style={{color: '#0A85C7', marginBottom:'50px', marginTop: '25px', marginRight:'15px'}}>
               Plan Overview
              </Typography>
              <Card style={{ display:'flex', alignItems: 'flex-start', marginBottom: '20px',marginTop:'-20px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none"}} >
              <Card
             
              sx={{ 
                  width: '325px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' }}>
               
               <div style={{display:'flex', marginTop: "25px"}}>
             <img src={Users} alt='SS&C logo' width='29px' height='20px' style={{marginRight:'10px', marginLeft:'10px', marginTop:'8px'}}></img>
             <div>
             <Typography gutterBottom  fontWeight={600} lineHeight={1} style={{fontSize: '34px', display: "inline-block"}}>
                 Pay as you go
               </Typography>
               </div>
               </div>
             <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                 Perfect for getting started
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={600}  style={{marginTop:'60px', fontSize: '60px', marginBottom:'25px'}}>
                 $12
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={400}  style={{ fontSize: '14px', marginBottom: "20px", }}>
                 per user, per month
               </Typography>
               
             <div style={{marginBottom:'35px'}}>
               <img src={CheckCircle} style={{display:'inline-block', marginLeft:'70px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={2}  style={{display:'inline-block', marginLeft: '10px', marginRight: '50px', color:'#000000'}}>
         Ipsum Lorem Dollar
       </Typography>
       <img src={CheckCircle} style={{display:'inline-block', marginLeft:'70px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500}  lineHeight={2} style={{display:'inline-block', marginLeft: '10px', color:'#000000'}}>
         Ipsum Lorem Dollar sit amet
       </Typography>
       <img src={CheckCircle} style={{display:'inline-block', marginLeft:'70px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={2}  style={{display:'inline-block', marginLeft: '10px', color:'#000000'}}>
         Ipsum Lorem Dollar
       </Typography>
     
       </div>
       <Link href="#" style={{marginLeft:'78px'}}>View All Features &#62;&#62;   </Link>
       
          </Card>
              
             <Card  sx={{  width: '295px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '25px' }}>
               <div style={{display:'flex', marginTop: "30px",height:'100px', borderBottom:'1px solid #ECECEC'}}>
             
             <div style={{width:'70%'}}>
             <Typography gutterBottom fontSize='20px'  fontWeight={900} lineHeight={1} style={{ display: "inline-block", color:'#0A85C7', marginLeft:'30px', marginRight:'60px'}}>
                 Data Usage
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                 Secondary text
               </Typography>
               
               </div>
               <div style={{width:'20%'}}>
               <InfoIcon color='disabled' style={{marginLeft:'30px'}}/>
               </div>
               </div>
               <div style={{marginLeft:'-60px', marginTop:'-80px'}}>
                 <DataUsageChart/>
                 </div>
               
         
          </Card>
          <Card sx={{ ':hover': { bgcolor: '#C0EBF8',}, width: '370px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px'  }}>       
          <div style={{display:'flex', marginTop: "30px",height:'100px', borderBottom:'1px solid #ECECEC'}}>
             
             <div style={{width:'75%'}}>
             <Typography gutterBottom fontSize='20px'  fontWeight={900} lineHeight={1} style={{ display: "inline-block", color:'#0A85C7', marginLeft:'30px'}}>
                 Data Usage Breakdown
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'30px'}}>
                 Secondary text
               </Typography>
               
               </div>
               <div style={{width:'20%'}}>
               <InfoIcon color='disabled' style={{marginLeft:'30px'}}/>
               </div>
               </div>
               <div style={{marginTop:'', display:'flex'}}>
                 <DataBreakdownChart/>
                 <img src={Barchart} style={{width:'130px', height:'120px', marginTop:'50px'}}></img>
                 </div>

          </Card>
        </Card>
        <Typography fontSize='20px' fontWeight={600} style={{backgroundColor:'#FFEAB6', paddingBottom:'10px', paddingLeft:'15px', width:'94%', }}>
            <img src={Warning} style={{marginTop:'10px', marginRight:'15px'}}></img>
            Your Usage amount is at the upper limit. you should consider upgrading soon to increase available space
          </Typography>
          <Card style={{ display:'flex', alignItems: 'flex-start', marginBottom: '20px',marginTop:'100px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none"}} >
              
             <Card sx={{ width: '550px',height: '409px', boxShadow:'none',border:"none",borderRadius:'4px', paddingBottom:'10px' , marginRight: '130px' }}>
             <Typography variant='h6' fontSize='34px' fontWeight={600} component="div" style={{color: '#0A85C7', marginBottom:'50px', marginTop: '25px', marginRight:'15px'}}>
               Upgrade Options
              </Typography>
              <Typography fontSize='14px' fontWeight={400}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis labore itaque id nulla sunt amet, qui modi accusamus dolorum laborum consequatur. A incidunt alias aliquid cum deserunt corrupti repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla iure! Veniam molestias magnam minima fugiat qui facere voluptate distinctio? Veritatis deserunt fugiat illo omnis quia, voluptas ipsa! Nam, ratione.
              </Typography>
              <Box style={{ marginTop:'50px', marginBottom:'100px', marginLeft:'100px'}}>
            
            <img src={Twenty} style={{marginRight:'10px', width:'70px'}}></img>
            <Stack direction="row" spacing={1} alignItems="center" style={{marginBottom:"30px"}}>
            <img src={Up} style={{ marginBottom:'20px',marginRight:'10px', width:'20px'}}></img>
            <Typography fontSize='14px' fontWeight={600} >Billed Yearly</Typography>
            <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
      <Typography fontSize='14px' fontWeight={600} style={{}}>Billed Monthly</Typography>
      </Stack>
    </Box>   
          </Card>
          <Card sx={{ width: '380px',height: '409px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , backgroundColor:'#075E8D' }}>
               
               <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
             <img src={Users} alt='SS&C logo' width='29px' height='20px' style={{marginRight:'10px', marginLeft:'80px', marginTop:'8px'}}></img>
             <div>
             <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={600} lineHeight={1} style={{fontSize: '34px', display: "inline-block", color:'white',}}>
                Options 3
               </Typography>
               </div>
               </div>
             <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'0px', fontSize: '16px', marginLeft:'80px', color:'white'}}>
                 Perfect for getting started
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={600}  style={{marginTop:'60px', fontSize: '60px', marginBottom:'25px', color:'white'}}>
                 $123
               </Typography>
               <Typography gutterBottom variant="body2" component="div" align="center" fontWeight={400}  style={{ fontSize: '14px', marginBottom: "20px",color:'white' }}>
                 per user, per month
               </Typography>
               <Button variant="outlined" 
                 style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', marginLeft: '115px', marginBottom: '28px', border:'4px solid #0A85C7', backgroundColor:'white' }}>UPGRADE</Button>
             <div>
               <img src={CheckCircle} style={{display:'inline-block', marginLeft:'100px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={2}  style={{display:'inline-block', marginLeft: '10px', marginRight: '80px', color:'white', }}>
         Ipsum Lorem Dollar
       </Typography>
       <img src={CheckCircle} style={{display:'inline-block', marginLeft:'100px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500}  lineHeight={2} style={{display:'inline-block', marginLeft: '10px', color:'white'}}>
         Ipsum Lorem Dollar sit amet
       </Typography>
       <img src={CheckCircle} style={{display:'inline-block', marginLeft:'100px'}}></img>
       <Typography variant='body1' fontSize='12px' fontWeight={500} lineHeight={2}  style={{display:'inline-block', marginLeft: '10px', color:'white'}}>
         Ipsum Lorem Dollar
       </Typography>
       </div>
          </Card>
        </Card>
        <TableContainer component={Paper} style={{ boxShadow:'none'}}>
      <Table sx={{ width: 1085 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><p style={{color:'#0A85C7', fontSize:'25px', fontWeight:500}}>Feature Overview</p> </StyledTableCell>
            <StyledTableCell align="center"><p  style={{fontSize:'18px', fontWeight:400}}></p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px'}} ></p></StyledTableCell>
            <StyledTableCell align="center"><p style={{fontSize:'18px', fontWeight:400, color:'#90A8B5'}}>Current Plan</p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px', color:'#90A8B5', fontWeight: 600}} >$123</p></StyledTableCell>
            <StyledTableCell align="center"><p style={{fontSize:'18px', fontWeight:400, color:'#0A85C7'}}>Option 3</p> <br></br> <p style={{fontSize:'34px', marginTop:'-20px', color:'#0A85C7',  fontWeight: 600}} >$321</p></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody style={{}}>
        
            <StyledTableRow key='Lorem ipsum dolor sit amet'  > <p style={{marginLeft:"20px", marginRight:'80px', }}>Lorem ipsum dolor sit amet </p>
              <StyledTableCell align="center" style={{border:'none', }}></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none' }}><img src={CheckCircle} style= {{width:'17px', height: "17px", }}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none', }}><img src={CheckCircle} style= {{width:'17px', height: "17px", }}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px",}}>Expedita numquam provident sapiente </p>
              <StyledTableCell align="center"style={{border:'none'}} > </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Lorem ipsum dolor sit amet </p>
            <StyledTableCell align="center"style={{border:'none'}} > </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px"}}>Expedita numquam provident sapiente </p>
            <StyledTableCell align="center"style={{border:'none'}} > </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet'> <p style={{marginLeft:"20px"}}>Expedita numquam provident sapiente </p>
            <StyledTableCell align="center"style={{border:'none'}} ></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Lorem ipsum dolor sit amet </p>
            <StyledTableCell align="center"style={{border:'none'}} > </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key='Lorem ipsum dolor sit amet' > <p style={{marginLeft:"20px"}}>Lorem ipsum dolor sit amet </p>
            <StyledTableCell align="center"style={{border:'none'}} ></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} ><img src={UnCheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}}><img src={CheckCircle} style= {{width:'17px', height: "17px"}}></img></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key='Lorem ipsum dolor sit amet' > <p>               </p>
            <StyledTableCell align="center"style={{border:'none'}} >
            
             </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none'}} >
             
              </StyledTableCell>
              <StyledTableCell align="center" style={{border:'none',}}>
              <Button variant="contained" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', border:'4px solid #0A85C7' }}>UPGRADE</Button>
              </StyledTableCell>
              </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
<Stack>
    <Item style={{display:"flex", width:'1085px',height:'100px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px', marginTop:'80px', marginBottom:'200px'}}>
          {/* <img src={Leaf} ></img> */}
          {/* <Button variant="contained" endIcon={''}>
        Basic
      </Button> */}
      <div style={{backgroundColor:'#577687', border:'1px solid #577687', width:'100px', height:'40px', borderRadius: '4px', marginTop:'15px' , marginLeft:'30px'}}>
           <img src={Leaf} style={{display:'inline-block', marginTop:'10px', marginLeft:'10px'}} ></img>
          <Typography fontSize='20px' fontWeight={600} style={{display:'inline-block', color: 'white', marginLeft:' 5px'}}> Basic</Typography>
         
          </div>
          <Typography fontSize='20px' fontWeight={500} style={{marginLeft:'5px', marginRight:'5px', marginTop:'25px',color:'#577687'}}> Plan</Typography>
          <Typography fontSize='34px' fontWeight={600} style={{marginLeft:'65px', marginRight:'5px', marginTop:'25px',color:'#75909F'}}>Free</Typography>
          <Typography fontSize='14px' fontWeight={400} style={{marginLeft:'35px', marginRight:'85px', marginTop:'25px',color:'#75909F'}}>Maximum of 4 users per month</Typography>
          <Link href="#" style={{marginLeft:'20px',  marginTop:'25px', marginRight:'80px'}}>View All Features &#62;&#62;   </Link>
          <Button variant="outlined" disabled style={{color:'#90A8B5', fontWeight: 700, fontSize:'14px',width:'150px', border:'3px solid #90A8B5'}}> DOWNGRADE </Button>
         
        </Item>
        </Stack>
        </TabPanel>
        <TabPanel value="3" style={{ marginTop:'20px' }}>
          <div style={{}}>
     
          <Typography variant='h1' color='primary' style={{ marginTop:'30px', fontSize:'34px', fontWeight:'600'}}>Billing Summary: July 26, 2022</Typography>
        <BillingSummary/>
        </div>
        <Typography variant='h1' color='primary' style={{marginLeft:'20px', marginTop:'30px', fontSize:'34px', fontWeight:'600'}}>Billing and Usage Statistics</Typography>
        <div style={{marginLeft:'30px', display:'flex', flex: '0%', flexWrap:'wrap', gap:'2%', width:'1200px', marginBottom:'60px'}}>
            <div style={{marginTop:'20px', width: '30%'}}>
               
               <Typography variant='h1' color='black' style={{ marginTop:'20px', fontSize:'24px', fontWeight:'600', }}>Top Users</Typography>
               <UserChart/>

            </div>
            <div style={{marginLeft:'30px', width:'30%'}}>
            <Typography variant='h1' color='black' style={{marginLeft:'20px', marginTop:'40px', marginBottom:'20px', fontSize:'24px', fontWeight:'600'}}>Billing Costs (Last 6 Months)</Typography>
             <Chart/>
            </div>
            <div style={{width:'30%', marginLeft:'5px'}}>
            <Typography variant='h1' color='black' style={{marginLeft:'10px', marginTop:'40px', marginBottom:'20px', fontSize:'24px', fontWeight:'600'}}>Line Graph Title</Typography>
             <LineChart/>
            </div>
        </div>
        <AllInvoices/>
        <Typography variant='h1' color='primary' style={{marginLeft:'20px', marginTop:'30px', fontSize:'34px', fontWeight:'600'}}>Notifications, Sales and Promotions</Typography>
        <Card style={{ display:'flex', alignItems: 'flex-start',   marginBottom: '20px',marginTop:'50px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none", marginLeft:'30px', width:'1500px'}} >
              <Card sx={{ width: '350px',height: '205px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '12px' }}>
                
                  <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
                <img src={SSNC} alt='SS&C logo' width='50px' height='30px' style={{marginRight:'10px', marginLeft:'10px', marginTop:'8px'}}></img>
                <div>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={500} lineHeight={1} style={{fontSize: '24px', display: "inline-block"}}>
                    SS&C Investment Portfolio
                  </Typography>
                  </div>
                  </div>
                <List style={{marginLeft:'70px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    </List>
             </Card>
             <Card sx={{ width: '350px',height: '205px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '12px' }}>
                
                  <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
                <img src={SSNC} alt='SS&C logo' width='50px' height='30px' style={{marginRight:'10px', marginLeft:'10px', marginTop:'8px'}}></img>
                <div>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={500} lineHeight={1} style={{fontSize: '24px', display: "inline-block"}}>
                    SS&C Investment Portfolio
                  </Typography>
                  </div>
                  </div>
                <List style={{marginLeft:'70px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    </List>
             </Card>
             <Card sx={{ width: '350px',height: '205px', boxShadow:'0px 1px 5px rgba(2, 39, 60, 0.2), 0px 3px 1px rgba(2, 39, 60, 0.12), 0px 2px 2px rgba(2, 39, 60, 0.14)',border:"1px solid #CBD9E1",borderRadius:'4px', paddingBottom:'10px' , marginRight: '17px' }}>
                
                  <div style={{display:'flex', width:'80%', marginTop: "20px"}}>
                <img src={SSNC} alt='SS&C logo' width='50px' height='30px' style={{marginRight:'10px', marginLeft:'10px', marginTop:'8px'}}></img>
                <div>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={500} lineHeight={1} style={{fontSize: '24px', display: "inline-block"}}>
                    SS&C Investment Portfolio
                  </Typography>
                  </div>
                  </div>
                <List style={{marginLeft:'70px'}}>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                  <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    <ListItem>
                  <img src={CheckCircle} style={{ marginRight:'10px'}}></img>
                    <Link underline="none" > Card Links</Link>
                    </ListItem>
                    </List>
             </Card>
        </Card>
        <div style={{marginLeft:'-270px', marginTop: "60px"}}>
        <MyServicesFooter/>
        </div>
        

        </TabPanel>
        {/* <TabPanel value="4" style={{ display:'flex',marginTop:'-50px' }}>
            <div style={{width:"32%", marginRight:'15px'}} ></div>
            <div style={{width:"32%", marginRight:'15px'}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Location
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum laudantium totam unde adipisci incidunt modi alias! Accusamus in quia odit aspernatur provident et ad vel distinctio recusandae totam quidem repudiandae
              </Typography>
         
            </div>
            <div style={{width:"32%"}}>
            <Typography variant='h6' fontSize='20px' fontWeight={600} component="div" style={{color: '#02273C', marginBottom:'5px'}}>
               Ipsum Lorem
              </Typography>
            <Typography variant='body1' fontSize='16px' fontWeight={400} component="div" align="left" lineHeight={1.5} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum laudantium totam unde adipisci incidunt modi alias! 
              </Typography>
              
            </div>

        </TabPanel> */}
      </TabContext>
    </Box>
  
           
        </>
          );
        };
      

 export default OwnServices;