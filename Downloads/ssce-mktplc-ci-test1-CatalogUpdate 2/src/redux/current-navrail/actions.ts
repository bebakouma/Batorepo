import { TabType } from './state';

export enum CurrentNavRailActionType {
  CHANGE_TAB = 'CurrentNavRail/changeTab',
}

export const changeNavRailTab = (tabName: TabType) =>
  ({
    type: CurrentNavRailActionType.CHANGE_TAB,
    payload: tabName,
  } as const);

export type CurrentNavRailAction =
| ReturnType<typeof changeNavRailTab>;
