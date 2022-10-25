import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSnackbar } from '../../redux/snackbars/actions';
import { getNotificationOptions } from '../../redux/snackbars/notification-level';
import { getSnackbars } from '../../redux/snackbars/selectors';

const useNotifier = () => {
  const [displayedKeys, setDisplayedKeys] = useState<string[]>([]);
  const dispatch = useDispatch();
  const snackbars = useSelector(getSnackbars);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const addDisplayedKey = (key: string) => {
      setDisplayedKeys([...displayedKeys, key]);
    };
    const removeDisplayedKey = (targetKey: string) => {
      setDisplayedKeys([...displayedKeys.filter(key => key === targetKey)]);
    };

    snackbars.forEach(({ level, message, key, dismissed }) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (displayedKeys.includes(key)) {
        return;
      }

      // Snackbar has not yet been displayed
      enqueueSnackbar(message, {
        key,
        variant: level,
        ...getNotificationOptions(level),

        action: key => (
          <IconButton
            aria-label='close'
            onClick={() => {
              closeSnackbar(key);
            }}
          >
            <Close />
          </IconButton>
        ),

        onExited: () => {
          dispatch(removeSnackbar(key));
          removeDisplayedKey(key);
        },
      });

      addDisplayedKey(key);
    });
  }, [snackbars, enqueueSnackbar, closeSnackbar, displayedKeys, dispatch]);
};

export default useNotifier;
