import { Reducer } from 'redux';
import { CurrentNavRailAction, CurrentNavRailActionType } from './actions';
import { createDefaultState, TabType } from './state';

type CurrentNavRailReducer = Reducer<TabType, CurrentNavRailAction>;
const reducer: CurrentNavRailReducer = (state = createDefaultState(), action) => {
  switch (action.type) {
    case CurrentNavRailActionType.CHANGE_TAB: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default reducer;