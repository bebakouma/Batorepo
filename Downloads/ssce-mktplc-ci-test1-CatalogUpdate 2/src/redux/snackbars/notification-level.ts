import { OptionsObject } from 'notistack';

export enum NotificationLevel {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export const getLabel = (level: NotificationLevel) =>
  ({
    [NotificationLevel.INFO]: 'Info',
    [NotificationLevel.SUCCESS]: 'Success',
    [NotificationLevel.WARNING]: 'Warning',
    [NotificationLevel.ERROR]: 'Error',
  }[level]);

export const getNotificationOptions = (level: NotificationLevel): OptionsObject =>
  ({
    [NotificationLevel.INFO]: {
      autoHideDuration: 3000,
    },
    [NotificationLevel.SUCCESS]: {
      autoHideDuration: 5000,
    },
    [NotificationLevel.WARNING]: {
      autoHideDuration: 10000,
    },
    [NotificationLevel.ERROR]: {
      persist: true,
    },
  }[level]);
