import { Store } from 'redux';
import { MarketplaceState } from './state';

export type MarketplaceStore = Store<MarketplaceState>;
export type MarketplaceSelector<T> = (state: MarketplaceState) => T;
