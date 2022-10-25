import { Reducer } from 'redux';
import { combineReducers } from 'redux';
import { SnackbarAction } from './snackbars/actions';
import snackbarsReducer from './snackbars/reducer';
import navRailReducer from './current-navrail/reducer';
import { MarketplaceState } from './state';

type MarketplaceAction = SnackbarAction;
type MarketplaceReducer = Reducer<MarketplaceState, MarketplaceAction>;
const reducer: MarketplaceReducer = combineReducers({
  snackbars: snackbarsReducer,
  currentNavRail: navRailReducer
});

export default reducer;
