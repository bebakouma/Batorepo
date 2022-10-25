import { TabType } from '../current-navrail/state';
import { MarketplaceSelector } from '../types';
import { Snackbar } from './state';

export const getSnackbars: MarketplaceSelector<Snackbar[]> = ({ snackbars }) => snackbars;

export const getCurrentNavRail: MarketplaceSelector<TabType> = ({currentNavRail}) => currentNavRail;