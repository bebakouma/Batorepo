import { NotificationLevel } from './notification-level';

export type SnackbarState = Snackbar[];

export interface Snackbar {
  level: NotificationLevel;
  message: string;
  key: string;
  dismissed: boolean;
}

export const createDefaultState = (): SnackbarState => [];
