import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, FilledInputClassKey } from '@mui/material';
import MiniTable from './MiniTable';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import Switch, { SwitchProps } from '@mui/material/Switch';
import ViewListIcon from '@mui/icons-material/ViewList';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import SSNC from '../../../assets/ssnc.png';
import Intex from '../../../assets/Intex.png';
import Sustain from '../../../assets/Sustain.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Navigate, useNavigate} from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import { Link } from '@mui/material';
import Bell from '../../../assets/Bell.png'
import Avatar from '../../../assets/Avatar.png'


const MyServices: React.FC = () => {
  
  const [items, setItems] =  useState<any>([])
  const [searching, setSearching] = useState<any>("")
  const [scrollTop, setScrollTop] = useState<any>(0)
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = React.useState(['']);
  const [dropDown, setDropDown] = useState("");
  

  const data = [
 
      {
        "id": 1,
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
        "title": "SS&C Advent Geneva API",
        "subtitle":"Easy access to Accounting Data",
        "tags": [
            "Cross Industry",
            "Data Service",
            "Quick Start"
        ],
        "documentation": [
          {
            "header":"Cloud Region",
            "description": "Kansas City"
          },
          {
            "header": "Plan",
            "description": "Pay-as-you-Go"
          },
          {
            "header": "Owner",
            "description": "Credit Desk"
          },
          {
            "header": "Current Balance",
            "description": "$599.99"
          },
          
        ]
      },
      {
      "id": 2,
      "logo": "https://www.logosvgpng.com/wp-content/uploads/2018/03/morningstar-logo-vector.png",
      "title": "Morningstar ESG Data",
      "subtitle":"Corporate ESG rating data",
      "tags": [
        "Cross Industry",
        "Data Service",
        "Popular"
        ],
        "documentation": [
          {
            "header":"Cloud Region",
            "description": "Kansas City"
          },
          {
            "header": "Plan",
            "description": "Annual Subscription"
          },
          {
            "header": "Owner",
            "description": "Rates Desk"
          },
          {
            "header": "Current Balance",
            "description": "$999.99"
          },
          
        ]
      },
      {
        "id": 3,
        "logo": "https://findvectorlogo.com/wp-content/uploads/2018/07/factset-vector-logo.png",
        "title": "Factset Reverse Entity Data",
        "subtitle":"Supply chain and personnel data",
        "tags": [
          "Cross Industry",
          "Data Service",
          "Unique Data"
        ],
        "documentation": [
          {
            "header":"Cloud Region",
            "description": "St. Louis"
          },
          {
            "header": "Plan",
            "description": "Free Trial"
          },
          {
            "header": "Owner",
            "description": "Credit Desk"
          },
          {
            "header": "Current Balance",
            "description": "FREE"
          },  
        ]
      },
      {
        "id": 4,
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
        "title": "SS&C Black Diamond API",
        "subtitle":"Easy access to Black Diamond",
        "tags": [
            "Cross Industry",
            "Cloud Platform",
            "Data Service"
        ],
        "documentation": [
          {
            "header":"Cloud Region",
            "description": "London"
        
          },
          {
           
            "header": "Plan",
            "description": "Pay-as-you-Go"
          },
          {
            "header": "Owner",
            "description": "Wealth Mgmt Dept."
          },
          {
            "header": "Current Balance",
            "description": "$1,999.00"
          },
          
        ]
      },
      {
        "id": 5,
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
        "title": "SS&C Algorithmics SIA",
        "subtitle":"Cloud-scale simulation engine",
        "tags": [
          "Cross Industry",
          "Cloud Platform",
          "Analytics Service"
        ],
        "documentation": [
          {
            "header":"Cloud Region",
            "description": "Vienna"
          },
          {
            "header": "Plan",
            "description": "Pay-as-you-Go"
          },
          {
            "header": "Owner",
            "description": "Risk Dept."
          },
          {
            "header": "Current Balance",
            "description": "$15,999.00"
          },
          
        ]
      },
     
  ]

  const toggle = () => setIsOpen(!isOpen);
  useEffect(()=>{
    fetch("http://marketplace-middleware.ssnc-corp.cloud:5555/myservices").then(
      response => response.json()
    ).then(
      data =>{
        setItems(data)
        console.log(data)
      }
    )
  },[])
  const optionsList = [
    {
      key: 1,
      name:"Cross Industry"
    },
    {
      key: 2,
      name:"Cloud Platform"
    },
    {
      key: 3,
      name:"Data Services"
    }
    
    
  ];

  // interface ChipData {
  //   key: number;
  //   label: string;
  // }
  // const [chipData, setChipData] = React.useState<readonly ChipData[]>([
  //   { key: 0, label: 'Cross Industry' },
  //   { key: 1, label: 'Cloud Platform' },
  //   { key: 2, label: 'Dta Services' },
   
  // ]);
  
  // const handleDelete = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  // };
  const navigate = useNavigate();

  const toggling = () => setIsOpen(!isOpen);
  const handleChangeForSearch = (e: { target: { value: any; }; }) => {
    setSearching(e.target.value)
  }
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 31,
    height: 18,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 15.5,
      height: 15.5,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  
  // const handleDelete = (e, value) => () => {
  //   e.preventDefault();
  //   setChipData(optionsList.filter(i:string)=>i !==value);
  // };

  const handleToggle = (value: any) => () => {
    
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(currentIndex +'here is currentindex')
  };
  const handleDelete = (i: any) => {
    const currentIndex = checked.indexOf(i)
    checked.filter(item=>item !== i);
  };
 
  const handleClearAll = ()=>{
    setChecked([])
  }
  //searching
  const filtered = items.filter((item: {title: string; })=> item.title.toLowerCase().includes(searching.toLowerCase()));
 

  //Virtual Scrolling
  const rowHeight = 30;
  const limit = 30;
  const startNode = Math.ceil(scrollTop/rowHeight)
  const visibleData = filtered.slice(0, startNode + limit)

  //Filter
  // const filterAfterSearch = () => {
  //   let dropDownFiltered;
  //   if (dropDown !==data) {
  //     dropDownFiltered = visibleData.filter((item: { logo: any; title: any; tags: string[]; documentation: { header: string; description: any; }[]; }) => item.tags === dropDown); //[{}] [{}{}]
  //   } else {
  //     dropDownFiltered = data;
  //   }
    return (
        <>
        
         <div style={{marginLeft: '260px', marginTop:'-50px'}} role="presentation">
           <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="primary" href="/" fontWeight={600}>
               My Services
            </Link>
          </Breadcrumbs>
        </div>
<div style={{marginLeft:'60px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
<Stack direction="row" spacing={2} style={{marginLeft: "auto", marginBottom:"50px", marginRight:'135px'}}>
           <img src={Avatar}></img>
      <Button variant="contained"  style={{height:"48px", fontWeight:700, fontSize:"14px", borderRadius:"4px"}}>MANAGE WATCHLIST</Button>
      <img src={Bell} style={{width:"36px", height:"41px", marginTop:"2px", marginRight:"10px"}}></img>
    </Stack>
    <Typography variant='h1' color='primary' marginBottom={'20px'} style={{ fontSize:'34px',marginLeft:'200px'}}>View everything you've subscribed for in My Services</Typography>
<div style={{ marginBottom:'20px', display: "flex"}}>
<Stack direction="row" spacing={2} sx={{ m: 1, width: '204px', marginLeft:'200px',marginRight:'15px' , color:'#0A85C7', borderRadius: "4px", position:'relative'}}>
      
      <Button variant="contained" startIcon={<FilterAltIcon />} style={{width: '204px', height:'51px',borderRadius: "4px", fontSize: '14px' , fontWeight:700, }} onClick={toggling} >
        FILTERS
           {
             checked.length > 1 ? (
              <Chip label={checked.length -1 } variant="outlined" style={{backgroundColor:'#F6FDFF', color:'#0A85C7', fontWeight: 700, fontSize:'14px', marginLeft: '7px'}}/>
             ):
             <Chip label="" variant="outlined" style={{visibility:'hidden'}} />
           }
        
            {/* )
      }
    }))} */}

      </Button> 
      
     </Stack>
     {isOpen && (
     <List sx={{ width: '100%', maxWidth: 205, bgcolor: 'background.paper', position:"absolute", marginTop:"70px", marginLeft:'200px', zIndex:'9999'  }}>
      {optionsList.map((value: {key:number ; name:any}) => {
        const labelId = `checkbox-list-label-${value.name}`;

        return (
          <ListItem
            key={value.name}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.name)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${value.name }`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
     )}
<Box 
      component="form"
      sx={{  m: 1, width: '634px', marginLeft: '10px', marginRight: 5, color:'#0A85C7', borderRadius: "4px" }}
      noValidate
      autoComplete="off"

    >
      <TextField 
      id="outlined-basic" 
      placeholder="Filter by name  |" 
      variant="outlined" 
      onChange={handleChangeForSearch}
      sx={{  width: '634px' , borderRadius:'8px', marginRight:"10px", border:'1px solid #B6C7D1'  }}
      InputProps={{
        style: {
          height: "49px",
     
        },
        startAdornment: (
          <InputAdornment position="start" >
            <SearchIcon style={{color: 'grey',fontSize: '23px' }}/>
          </InputAdornment>
        )}}
       />
    </Box>
    <Stack style={{display:'flex'}}>
          <Button variant="contained" style={{ width:'148px', height:'49px', fontSize:'14px', fontWeight:'700', marginBottom:'5px', borderRadius: '4px', marginTop:"10px"}}>SEARCH</Button>
          </Stack>
          </div>
          <div style={{marginLeft:'200px'}}>
          {(checked.map(item=>{
            console.log(item + '<<<here is item' )
            if(item != "")
           
            {
            return(
              
              <Stack direction="row" spacing={1} style={{ display: 'inline-block', }}>
      <Chip label={item} style={{backgroundColor:'#DFE9EF', fontSize: '14px', color:'#355263', marginRight:'5px' }} onDelete={handleDelete} />
      
    </Stack>
   
            )
          }
          }))}
           </div>
          <Stack direction="row" spacing={1} alignItems="center" style={{marginLeft:"1040px", marginBottom:"30px"}}>
        <Typography style={{color:'#0A85C7', fontSize: "12px"}}>Must contain All Filters Selected</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
      <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      style={{marginLeft:'200px'}}
      onClick={handleClearAll}
    >
      <Link href="#">Clear all filters &#62;&#62;   </Link>
      
    </Box>
      <div style={{ display:'flex', marginLeft:"150px", marginBottom: '30px', gap: '20px'}}>
      <Typography style={{color:'#90A8B5', fontSize: "14px",fontWeight:"500", marginLeft:"50px",marginTop:'20px'}}>A total of <b>{visibleData.length}</b> result</Typography>
      <Typography variant='body1' color='primary' style={{ fontSize:'15px', marginLeft:"715px", marginTop:"25px", marginRight:'1px'}}>Sort by</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{width: "125px", marginLeft:"1px", marginTop: '10px', borderRadius:'4px', border: '1px solid #0A85C7' }}>
      
      <Select
          // value={age}
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{color:"'#0A85C7'"}}
        >
          <MenuItem value={10} style={{color:"'#0A85C7'"}}>Newest</MenuItem>
          <MenuItem value={20} style={{color:"'#0A85C7'"}}>Oldest</MenuItem>
          <MenuItem value={30} style={{color:"'#0A85C7'"}}>Alphabetical</MenuItem>
        </Select>
  </FormControl>
  </div>
        <div style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '200px', marginBottom: '20px', gap: '20px', flex:"100%", flexWrap:'wrap', marginTop:'-30px', height: 620, overflow:'auto'}}
        onScroll = {(e)=>{
          setScrollTop(e.currentTarget.scrollTop + rowHeight)
        }}
        >
          {(visibleData.map((item: { logo: any; title: any; subtitle: any; tags: any[]; documentation: { header: string; description: any; }[]; })=>{
          return(
          <Card sx={{ width: 340, height:296, boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',borderRadius: '4px'}} onClick={() => {
            navigate('/ownservices')}}>
            <CardActionArea>
            <CardContent>
            <div style={{display:'flex'}}>
            <img src={item.logo} width='25%' height='25%' style={{marginRight:'20px', marginLeft:'-10px'}}></img>
              <Typography gutterBottom fontSize='20px' fontWeight={600} component="div" align="left" lineHeight={1} color="#02273" style={{width:'60%'}}>
                {item.title}
              </Typography>
              </div> 
              <Typography gutterBottom fontSize='14px' fontWeight={400} component="div" align="left" lineHeight={1} color="#02273" style={{width:'60%', marginLeft:'88px'}}>
                {item.subtitle}
              </Typography>
              <Stack  spacing={1} alignItems="center" direction ="row" color="primary" style ={{marginLeft:'-10px', marginBottom: '20px', marginTop:'15px'}} >
                    <Chip label={item.tags[0]}  style={{backgroundColor:"rgba(10, 133, 199, 0.18)", color:"#0A85C7", fontSize:'12px'}} />
                    <Chip label={item.tags[1]} style={{backgroundColor:"rgba(219, 178, 255, 0.5)", color:"#6200EE",fontSize:'12px'}} />  
                    <Chip label={item.tags[2]} style={{backgroundColor:"rgba(253, 80, 154, 0.29)", color:"#DD1E70",fontSize:'12px'}} /> 
                </Stack>
              {item.documentation.map((info: { header: string; description: string; })=>{
                  return(
             <div style={{ display:'inline-block',  marginLeft: '-5px',marginRight:"5px",marginBottom:'15px',gap: '0px',  width:"50%"}}>
               
              <Typography  variant="body2" color="#577687" fontWeight={400} >
                {info.header}
                <Typography variant="body1" color="#02273" style={{fontSize: '16px'}}>
                {info.description}
              </Typography>
              </Typography>
              </div>
            )
          })}
            </CardContent>
          </CardActionArea>
           
        </Card>
         )
        }))
      } 
        </div>
        </div>
          </>
 
    );
  };

export default MyServices;

function a(a: any, v: any): React.ReactNode {
  throw new Error('Function not implemented.');
}

function v(a: any, v: any): React.ReactNode {
  throw new Error('Function not implemented.');
}

function i(i: any) {
  throw new Error('Function not implemented.');
}
  