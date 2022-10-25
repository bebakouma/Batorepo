import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { enqueueSnackbar } from '../../redux/snackbars/actions';
import { getLabel, NotificationLevel } from '../../redux/snackbars/notification-level';
import Toolbar from '../main/Toolbar/Toolbar';

const SnackbarDemo: React.FC = () => {
  const dispatch = useDispatch();

  const createButton = (level: NotificationLevel) => (
    <Button
      key={level}
      onClick={() => {
        dispatch(enqueueSnackbar(level, `Example notification (${getLabel(level)})`));
      }}
    >
      {getLabel(level)}
    </Button>
  );

  return (
    <>
      <Toolbar />
    </>
  );
};

export default SnackbarDemo;
