import { createDefaultState as createDefaultSnackbarState, SnackbarState } from './snackbars/state';
import { createDefaultState as createDefaultCurrentNavRailState, TabType } from './current-navrail/state';

export interface MarketplaceState {
  snackbars: SnackbarState;
  currentNavRail: TabType
}

export const createDefaultState = (): MarketplaceState => ({
  snackbars: createDefaultSnackbarState(),
  currentNavRail: createDefaultCurrentNavRailState()
});
