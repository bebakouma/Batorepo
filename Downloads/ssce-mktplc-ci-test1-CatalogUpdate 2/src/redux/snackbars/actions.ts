import { v4 as uuid } from 'uuid';
import { NotificationLevel } from './notification-level';

export enum SnackbarActionType {
  ENQUEUE_SNACKBAR = 'snackbars/enqueue',
  DISMISS_SNACKBAR = 'snackbars/dismiss',
  REMOVE_SNACKBAR = 'snackbars/remove',
  REMOVE_ALL_SNACKBARS = 'snackbars/removeAll', // or DISMISS_ALL?
}

export const enqueueSnackbar = (level: NotificationLevel, message: string, key = uuid()) =>
  ({
    type: SnackbarActionType.ENQUEUE_SNACKBAR,
    payload: {
      message,
      level,
      key,
    },
  } as const);

export const dismissSnackbar = (key: string) =>
  ({
    type: SnackbarActionType.DISMISS_SNACKBAR,
    payload: key,
  } as const);

export const removeSnackbar = (key: string) =>
  ({
    type: SnackbarActionType.REMOVE_SNACKBAR,
    payload: key,
  } as const);

// export const removeAllSnackbars = () =>
//   ({
//     type: SnackbarActionType.REMOVE_ALL_SNACKBARS,
//   } as const);

export type SnackbarAction =
  | ReturnType<typeof enqueueSnackbar>
  | ReturnType<typeof dismissSnackbar>
  | ReturnType<typeof removeSnackbar>;
// | ReturnType<typeof removeAllSnackbars>;
