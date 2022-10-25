import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { FC } from 'react';
import TopBar from './TopBar';
interface Props {
  isOpen: Boolean;
}

const HeaderComponent: FC<Props> = ({ isOpen }) => {
  const trigger = useScrollTrigger();
  return (
    <>
      {!isOpen ? (
        <Slide appear={false} direction='down' in={!trigger}>
          <AppBar elevation={0} aria-label='Menu' className={'stadium-app-bar'}>
            <TopBar />
          </AppBar>
        </Slide>
      ) : (
        <AppBar elevation={0} aria-label='Menu' className={'stadium-app-bar'}>
          <TopBar />
        </AppBar>
      )}
    </>
  );
};

export default HeaderComponent;
