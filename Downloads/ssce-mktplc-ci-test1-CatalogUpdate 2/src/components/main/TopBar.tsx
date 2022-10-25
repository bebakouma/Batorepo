import * as React from 'react';
import { FC, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import AlgoLogo from '../../assets/AlgoLogo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MuiToolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { MarketplaceState } from '../../redux/state';
import './top-bar.scss';
import SearchBar from '../main/SearchBar/SearchBar';


const mapStateToProps = (_state: MarketplaceState) => ({
  firstname: 'Bill',
});

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

const menuIdentifier = {
  WORK: 'work',
  REPORT: 'report',
  CURRENCY: 'currency',
  ABOUT: 'about',
  USER: 'user',
};

const TopBar: FC<Props> = ({ firstname }) => {
  const [anchorMenuEl, setAnchorMenuEl] = useState({
    work: null,
    report: null,
    currency: null,
    about: null,
    user: null,
  });

  const handleMenuClose = (value: string) => {
    setAnchorMenuEl(prevState => ({ ...prevState, [value]: null }));
  };

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => {
    setAnchorMenuEl(prevState => ({
      ...prevState,
      [value]: event.currentTarget,
    }));
  };

  return (
    <>
      <MuiToolbar className='top-bar' color='primary'>
      <img
          src={AlgoLogo}
          style={{ width: 200, marginRight: 20}}
          alt='SS&C Algorithmics Financial Risk APIs Demo'
        />

        <SearchBar/>
 
        <IconButton
          aria-label='Account'
          onClick={e => {
            handleMenu(e, menuIdentifier.USER);
          }}
        >
        <AccountCircleIcon
          style={{color: 'lightGrey', fontSize: '30px', marginRight: 100 }}
        />
        {/* <img src={BusAd_Stone} style={{width: 42, height: 45, borderRadius: 22  }}/> */}
        </IconButton>


        <Menu
          aria-label='Help'
          anchorEl={anchorMenuEl.user}
          open={Boolean(anchorMenuEl.user)}
          onClose={() => handleMenuClose(menuIdentifier.USER)}
        >
          <MenuItem
            onClick={() => {
              handleMenuClose(menuIdentifier.USER);
            }}
          >
            <Typography> Hello {firstname}</Typography>
          </MenuItem>

          <MenuItem
            onClick={() => {
              alert('Implement option 1');
              handleMenuClose(menuIdentifier.USER);
            }}
          >
            <Typography aria-label='Option 1'>Option 1</Typography>
          </MenuItem>


          <MenuItem
            onClick={() => {
              alert('Implement option 2');
              handleMenuClose(menuIdentifier.USER);
            }}
          >
            <Typography aria-label='Option 2'>Option 2</Typography>
          </MenuItem>
        </Menu>


        {/* <IconButton aria-label='Open about' onClick={e => handleMenu(e, menuIdentifier.ABOUT)}>
          <HelpOutline />
        </IconButton> */}


        <Menu
          aria-label='Help'
          anchorEl={anchorMenuEl.about}
          open={Boolean(anchorMenuEl.about)}
          onClose={() => {
            handleMenuClose(menuIdentifier.ABOUT);
          }}
        >

          <MenuItem
            onClick={() => {
              handleMenuClose(menuIdentifier.ABOUT);
            }}
          >
            About
          </MenuItem>
        </Menu>
      </MuiToolbar>
    </>
  );
};

export default connector(TopBar);
