import * as React from 'react';
import  {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  CardActionArea, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Navigate, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from '../../../assets/Alert.png'
import Bell from '../../../assets/Bell.png'
import Avatar from '../../../assets/Avatar.png'
import UnownedServices from './UnownServices';
import Catalog from './Catalog';

const ExploreCatalog: React.FC = () => {
  
  const [items, setItems] =  useState<any>([])
  const [searching, setSearching] = useState<any>("")
  const [scrollTop, setScrollTop] = useState<any>(0)
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = React.useState(['']);
  const [unOwnedPage, setUnOwnedPage]= useState(false)

//  if(unOwnedPage){
//    return <Navigate to='/unownservice' />
//  }
const navigate = useNavigate();
const data = [
  {
      "id": 1,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Advent Geneva API",
      "subtitle":"Easy access to Accounting Data",
      "description":"Quick and streamlined access to positions, transactions, and more from your Geneva DB or managed by GlobeOp",
      "tags": [
        "Cross Industry",
        "Data Service",
        "Quick Start"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        }
      ]
    },
    {
      "id": 2,
      "logo": "https://findvectorlogo.com/wp-content/uploads/2018/07/factset-vector-logo.png",
      "title": "Factset Reverse Entity Data",
      "subtitle":"Supply chain and personnel data",
      "description":"Corporate entity and people data to better understand relationships amongst holdings",
      "tags": [
          "Cross Industry",
          "Data Service",
          "Unique Data"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        }
      ]
    },
    {
      "id": 3,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Scenario Service",
      "subtitle":"Daily risk projections",
      "description":"What-if scenarios calculated from macroecnomic events, generated by AI models",
      "tags": [
          "Cross Industry",
          "Cloud Platform",
          "Analytics Service"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        },
        // {
        //   "icon":"https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Downloads-icon.png",
        //   "name": "Free Trial",
        //   "url": "https://..freetrial..."
        // }
      ]
    },
    {
      "id": 4,
      "logo": "https://www.logosvgpng.com/wp-content/uploads/2018/03/morningstar-logo-vector.png",
      "title": "Morningstar ESG Data",
      "subtitle":"Corporate ESG rating data",
      "description":"Environmental, Social, and Governance rating data to better understand your investments",
      "tags": [
        "Cross Industry",
        "Data Service",
        "Popular"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        },
      ]
    },
    {
      "id": 5,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Investment Porfortlio",
      "subtitle":"Aggregate holdings across SS&C",
      "description":"API to get aggregated holdings information across SS&C products",
      "tags": [
        "Cross Industry",
        "Cloud Platform",
        "Data Service"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        },
      ]
    },
    {
      "id": 6,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Advent Genesis",
      "subtitle":"A modern cloud accounting platform",
      "description":"Best in class, cloud-based accounting dashboard and application",
      "tags": [
        "Cross Industry",
        "Cloud Platform",
        "Accounting Platform"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        },
      ]
    },
    {
      "id": 7,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Algorithmics SIA",
      "subtitle":"Cloud-scale simulation engine",
      "description":"Harness the power of the cloud to simulate risk on large portfolios",
      "tags": [
          "Cross Industry",
          "Cloud Platform",
          "Analytics Service"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        },
      ]
    },
    {
      "id": 8,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Sightline",
      "subtitle":"Unified financial reporting dashboard",
      "description":"Powerful reporting across all of your financial data",
      "tags": [
        "Cross Industry",
        "Cloud Platform",
        "Data Service"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        }
      ]
    },
    {
      "id": 9,
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/SS%26C_Technologies_logo.svg/1200px-SS%26C_Technologies_logo.svg.png",
      "title": "SS&C Sylvan API",
      "subtitle":"Performance attribution calculation engine",
      "description":"Best in class performance attribution engine and dashboarding service",
      "tags": [
          "Cross Industry",
          "Cloud Platform"
      ],
      "documentation": [
        {
          "icon":"https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg",
          "name": "API Docs",
          "url": "https://.....apidocs..."
        },
        {
          "icon":"https://library.kissclipart.com/20181002/ekw/kissclipart-business-lines-of-credit-icon-clipart-credit-card-8488c94e93c3c555.png",
          "name": "Price",
          "url": "https://....price..."
        },
        {
          "icon":"https://w7.pngwing.com/pngs/1017/780/png-transparent-exit-sign-information-fire-safety-exclamation-mark-blue-cdr-angle-thumbnail.png",
          "name": "About",
          "url": "https://...about..."
        }
      ]
    }
   
]

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
const toggling = () => setIsOpen(!isOpen);
  useEffect(()=>{
    fetch("http://marketplace-middleware.ssnc-corp.cloud:5555/catalog").then(
      response => response.json()
    ).then(
      data =>{
        setItems(data)
        console.log(data)
      }
    )
  },[])
//searching by name
  const handleChangeForSearch = (e: { target: { value: any; }; }) => {
    setSearching(e.target.value)
  }

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
  
  const filtered = items.filter((item: {title: string; })=> item.title.toLowerCase().includes(searching.toLowerCase()));
  
  //Virtual Scrolling
  const rowHeight = 30;
  const limit = 30;
  const startNode = Math.ceil(scrollTop/rowHeight)
  const visibleData = filtered.slice(0, startNode + limit)

    return (
        <>
         <div style={{marginLeft:'257px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
         <Stack direction="row" spacing={2} style={{marginLeft: "auto", marginBottom:"50px", marginRight:'200px'}}>
           <img src={Avatar}></img>
      <Button variant="contained"  style={{height:"48px", fontWeight:700, fontSize:"14px", borderRadius:"4px"}}>MANAGE WATCHLIST</Button>
      <img src={Bell} style={{width:"36px", height:"41px", marginTop:"2px", marginRight:"10px"}}></img>
    </Stack>
<Typography variant='h1' color='primary' marginBottom={'20px'} style={{ fontSize:'34px'}}>Explore the SS&C Services and Subscriptions Catalog</Typography>
</div>
        <div style={{ marginBottom:'20px', display: "flex"}}>
        <Stack direction="row" spacing={2} sx={{ m: 1, width: '204px', marginLeft:'260px',marginRight:'15px' , color:'#0A85C7', borderRadius: "4px", position:'relative'}}>
      
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
 {/* <Stack direction="row" spacing={2} sx={{ m: 1, width: '204px', marginLeft:'257px' , color:'#0A85C7', borderRadius: "4px"}}>
      
      <Button variant="contained" startIcon={<FilterAltIcon />} style={{width: '204px', height:'51px',borderRadius: "4px", fontSize: '14px' , fontWeight:700}}>
        FILTERS
      </Button>
    </Stack> */}
<Box 
      component="form"
      sx={{  m: 1, width: '614px', marginLeft: '10px', marginRight: 5, color:'#0A85C7', borderRadius: "4px" }}
      noValidate
      autoComplete="off"

    >
      <TextField 
      id="outlined-basic" 
      placeholder="Filter by name  |" 
      variant="outlined" 
      onChange={handleChangeForSearch}
      sx={{  width: '614px' , borderRadius:'8px', marginRight:"10px", border:'1px solid #B6C7D1'  }}
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
          <Button variant="contained" style={{ width:'110px', height:'49px', fontSize:'14px', fontWeight:'700', marginBottom:'15px', borderRadius: '4px', marginTop:"10px"}}>SEARCH</Button>
          </Stack>
        
      </div>
      <div style={{marginLeft:'260px'}}>
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
      <Stack direction="row" spacing={1} alignItems="center" style={{marginLeft:"1030px", marginBottom:"30px"}}>
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
      style={{marginLeft:'260px'}}
      onClick={handleClearAll}
    >
      <Link href="#">Clear all filters &#62;&#62;   </Link>
      
    </Box>
      <div style={{ display:'flex', marginLeft:"150px", marginBottom: '30px', gap: '20px'}}>
      <Typography style={{color:'#90A8B5', fontSize: "14px",fontWeight:"500", marginLeft:"110px",marginTop:'20px'}}>A total of <b>{filtered.length}</b> result</Typography>
      <Typography variant='body1' color='primary' style={{ fontSize:'15px', marginLeft:"525px", marginTop:"25px", marginRight:'1px'}}>Sort by</Typography>
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
  <ViewComfyIcon color='primary' fontSize='large' style={{paddingTop: '16px', paddingBottom: '-5px', width:'50px', height:'60px', marginLeft: '1px'}} />
      <ViewListIcon color='primary'fontSize='large' style={{paddingTop: '16px', width:'50px', height:'60px', marginLeft: '-25px'}} />
  </div>
      <Card style={{ display:'flex', alignItems: 'flex-start',  marginLeft: '260px', marginBottom: '20px',marginTop:'-20px', gap: '20px', flex:"100%", flexWrap:'wrap', height: 620, overflow:'auto'}}
              onScroll = {(e)=>{
                setScrollTop(e.currentTarget.scrollTop + rowHeight)
              }}
      >
      {
        (visibleData.map((item: { logo: any; title: any; subtitle: any; description: any; tags: any[]; documentation: { icon: string; name: any; }[]; })=>{
          return(
              <Card sx={{ maxWidth: '484px',height: '342px', boxShadow:'3px 7px 7px lightGrey', paddingBottom:'10px'  }}>
            
                <CardContent >
                  <div style={{display:'flex', width:'80%', marginTop: "5px", marginBottom:"18px"}}>
                <img src={item.logo} alt='SS&C logo' width='23%' height='12%' style={{marginRight:'10px', marginLeft:'0px', marginTop:'15px'}}></img>
                <div>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={500} lineHeight={1} style={{fontSize: '11px', display: "inline-block"}}>
                    FREE TRIAL AVAILABLE 
                  </Typography>
                  <img src={Alert}  style={{display:"inline-block" , marginLeft:"5px", marginTop:"-20px", width:"13.5px"}}></img>
                  <br></br>
                <Typography gutterBottom variant="h6" component="div" align="left" fontWeight={500} lineHeight={1} style={{marginTop:'10px', fontSize: '20px'}}>
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1} style={{marginTop:'12px', fontSize: '14px'}}>
                    {item.subtitle}
                  </Typography>
                  </div>
                  </div>
                  <Stack  spacing={1} alignItems="center" direction ="row" color="primary" style ={{marginLeft:'5px', marginBottom: '20px'}} >
                    <Chip label={item.tags[0]}  style={{backgroundColor:"#E7F3F9", color:"#0A85C7"}} />
                    <Chip label={item.tags[1]} style={{backgroundColor:"#EFE6FD", color:"#6200EE"}} />  
                    <Chip label={item.tags[2]} style={{backgroundColor:"#FFE5F0", color:"#D72F77"}} /> 
                </Stack>
                <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={500} lineHeight={1.5} style={{marginTop:'12px', fontSize: '14px'}}>
                    {item.description} 
                  </Typography>
                  <Link href="#" underline="hover" style={{fontSize:"16px", color:"#0A85C7"}}>
                Learn more
                 </Link>
               {/* <CardActions>
               <Button color="primary" style ={{marginLeft:'-17px', marginTop: '-20px', marginBottom: '-50px'}} >
                 <p style={{color:'#0A85C7', padding:'7px', fontSize:"12px"}}>{item.tags[0]}</p>  
                   <p style={{color:'#6200EE', padding:'7px',fontSize:"12px"}}>{item.tags[1]}</p>  <p style={{color:'#FD509A', padding:'7px',fontSize:"12px"}}>{item.tags[2]}</p>
                </Button>
                
              </CardActions>  */}
                </CardContent>
                {/* <Stack  spacing={1} alignItems="center" direction ="row" color="primary" style ={{marginLeft:'5px', marginBottom: '20px'}} >
                    <Chip label="SUBSCRIBE NOW"  style={{backgroundColor:"#0A85C7", color:"#F7FDFF", width:"157px", height:"48px", borderRadius:"33px", fontWeight:700, fontFamily:"Roboto", fontSize:"14px"}} />
                </Stack> */}
                <CardContent style={{marginLeft: '10px',marginRight: '6px',marginTop:'10px' , marginBottom:"30px",height:'45px' , width:'400px', display: "flex"}}>
                <Stack  spacing={1} alignItems="center" direction ="row" color="primary" style ={{ marginTop: '10px'}} >
                    <Button variant='contained'  style={{backgroundColor:"#0A85C7", color:"#F7FDFF", width:"157px", height:"48px", borderRadius:"33px", fontWeight:700, fontFamily:"Roboto", fontSize:"14px"}} onClick={() => {
          navigate('/unownservices')}} >SUBSCRIBE NOW</Button>
                    {/* <Button variant="outlined" 
               sx={{
             ':hover': {
              bgcolor: 'primary.main',
             color: 'white',
               },
            }}  style={{ fontWeight: 'bold', fontSize:'16px', width:'151px', height:'52px', borderRadius:'4px', border:'4px solid #0A85C7' }}>GET STARTED</Button> */}
                </Stack>
                <div style={{display:'flex', marginLeft: "80px", marginTop:"1px"}}>
                {/* <Stack  spacing={1} alignItems="center" direction ="row" color="primary" style ={{marginLeft:'5px', marginBottom: '20px'}} >
                    <Chip label="SUBSCRIBE NOW"  style={{backgroundColor:"#0A85C7", color:"#F7FDFF", width:"157px", height:"48px", borderRadius:"33px", fontWeight:700, fontFamily:"Roboto", fontSize:"14px"}} />
                </Stack> */}
                {item.documentation.map((info: { icon: string; name: string; })=>{
                  return(
                       <div style={{display:'flex' }}>
                         
                <img src={info.icon} alt='icon' width='37px' height='37px' style={{marginRight: "30px"}} ></img>
                  {/* <Typography gutterBottom variant="body2" component="div" align="left" fontWeight={400} lineHeight={1} style={{ paddingLeft: '2px',paddingRight:'9px', color: '#0A85C7', marginBottom:'7px', fontSize:'12px'}}>
                    {info.name}
                  </Typography> */}
                    </div>
                  )
                })}
                </div>
                </CardContent>
               
              </Card>

              
            // </Card>
          )
        }))
        
      } 
      
     </Card>
     
      


        </>
          );
        };
      
 export default ExploreCatalog;
