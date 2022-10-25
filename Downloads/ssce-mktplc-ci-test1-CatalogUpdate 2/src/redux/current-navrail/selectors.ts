import { MarketplaceSelector } from '../types';
import { TabType } from './state';


export const getCurrentNavRail: MarketplaceSelector<TabType> = ({currentNavRail}) => currentNavRail;