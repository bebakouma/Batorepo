import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DataThresholdingTwoToneIcon from '@mui/icons-material/DataThresholdingTwoTone';
import NodeRedIcon from '../../../assets/nodered.png'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { connect, ConnectedProps } from 'react-redux';
import { MarketplaceState } from '../../../redux/state';
import './nav-rail.scss';
import { changeNavRailTab } from '../../../redux/current-navrail/actions';
import { TabType } from '../../../redux/current-navrail/state';
import everywhere from '../../../assets/everywhere.png';
import arrow from '../../../assets/arrow.png';



const mapDispatchToProps = {changeNavRailTab};

const mapStateToProps = (state: MarketplaceState) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const NavRail: React.FC<Props> = props => {
  return (
    <>
      <div className='nav-rail-app-bar' style={{ top: '55px', fontFamily:'Roboto' }} aria-label='Menu'>
        <div className='nav-rail-container' style={{width: '256px', background: '#FAFDFF',boxShadow: '0px 16px 24px rgba(4, 56, 84, 0.14), 0px 6px 30px rgba(4, 56, 84, 0.12), 0px 8px 10px rgba(4, 56, 84, 0.2)'}}>
          <hr />
        <img
          src={arrow}
          style={{ width: 20, marginLeft: 190, marginTop: 50, marginRight:-20, position:'absolute'}}
          alt='SS&C Everywhere'
        />
          <img
          src={everywhere}
          style={{ width: 200, marginRight: 0, marginTop: 25 }}
          alt='SS&C Everywhere'
        />
          <Tooltip title='Dashboard' style={{marginLeft:'10px'}}>
            <IconButton  
              className='icon-button'
              aria-label='Dashboard'
              onClick={() => {
                props.changeNavRailTab(TabType.SERVICES);
              }}
            >  
              <DashboardTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path' marginLeft='10px' color="#02273C" lineHeight="140%">Dashboard</Typography>
            </IconButton>
          </Tooltip>

          <Tooltip title='My Services' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='My Services'
              onClick={() => {
                props.changeNavRailTab(TabType.MY_SERVICES);
              }}
            >
              <CardTravelTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path' marginLeft='10px'  color="#02273C" lineHeight="140%">My Services</Typography>
            </IconButton>
          </Tooltip>

          
          <Tooltip title='Catalog' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='Catalog'
              onClick={() => {
               props.changeNavRailTab(TabType.CATALOG);
              }}
            >
              <MenuBookTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path' marginLeft='10px' color="#02273C" lineHeight="140%">Catalog</Typography>
            </IconButton>
          </Tooltip>

          <Tooltip title='Workflow Editor' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='NodeRed'
              onClick={() => {
                props.changeNavRailTab(TabType.NODERED);
              }}
            >
                <img src={NodeRedIcon} width='17%' style={{marginLeft:'-18px'}} id='Icon'></img>
              <Typography variant='h2' className='workspace-path'  marginLeft='10px' color="#02273C" lineHeight="140%">Workflow Editor</Typography>
            </IconButton>
          </Tooltip>
          
          <Tooltip title='Data Mesh' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='DataServices'
              onClick={() => {
                //props.changeNavRailTab(TabType.DATASERVICES);
                window.open('https://ssce-demo-web-server.ssnc-corp.cloud/everywherereact/data-connectivity','_blank');
              }}
            >
              <DataThresholdingTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path'  marginLeft='10px' color="#02273C" lineHeight="140%">Data Mesh</Typography>
            </IconButton>
          </Tooltip>

          <Tooltip title='Documentation' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='Documentation'
              onClick={() => {
                props.changeNavRailTab(TabType.DOCUMENTATION);
              }}
            >
              <InsertDriveFileTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path'  marginLeft='10px' color="#02273C" lineHeight="140%">Documentation</Typography>
            </IconButton>
          </Tooltip>
          
          <Tooltip title='Billing' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='Billing'
              onClick={() => {
                props.changeNavRailTab(TabType.BILLING);
              }}
            >
              <PaymentTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path' marginLeft='10px' color="#02273C" lineHeight="140%">Billing</Typography>
            </IconButton>
          </Tooltip>          

          
          <Tooltip title='Support' style={{marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='Support'
              onClick={() => {
                props.changeNavRailTab(TabType.SUPPORT);
              }}
            >
              <ContactSupportTwoToneIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path' marginLeft='10px' color="#02273C" lineHeight="140%">Support</Typography>
            </IconButton>
          </Tooltip>


           
          <Tooltip title='Log Out' style={{top:'80px', marginLeft:'10px'}}>
            <IconButton
              className='icon-button'
              aria-label='Log Out'
              onClick={() => {
                props.changeNavRailTab(TabType.SUPPORT);
              }}
            >
              <LogoutRoundedIcon color='primary' id='menuIcon'/>
              <Typography variant='h2' className='workspace-path'  marginLeft='10px' color="#02273C" lineHeight="140%">Log Out</Typography>
            </IconButton>
          </Tooltip>

        </div>
      </div>
    </>
  );
};

export default connector(NavRail);

