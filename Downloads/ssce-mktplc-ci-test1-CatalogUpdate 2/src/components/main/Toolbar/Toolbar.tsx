import Slide from '@mui/material/Slide';
import WorkspaceToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { connect, ConnectedProps } from 'react-redux';
import { MarketplaceState } from '../../../redux/state';

const mapDispatchToProps = {};

const mapStateToProps = (state: MarketplaceState) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const Toolbar: React.FC<Props> = props => {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <WorkspaceToolbar className='toolbar'>
          <div className='toolbar-group'>
            <Typography variant='h1' className='workspace-path'>
             {/*This is the toolbar*/}
            </Typography>
          </div>
        </WorkspaceToolbar>
      </Slide>
    </>
  );
};

export default connector(Toolbar);
