import { Reducer } from 'redux';
import { SnackbarAction, SnackbarActionType } from './actions';
import { createDefaultState, SnackbarState } from './state';

type SnackbarsReducer = Reducer<SnackbarState, SnackbarAction>;
const reducer: SnackbarsReducer = (state = createDefaultState(), action) => {
  switch (action.type) {
    case SnackbarActionType.ENQUEUE_SNACKBAR: {
      return [
        ...state,
        {
          ...action.payload,
          dismissed: false,
        },
      ];
    }

    case SnackbarActionType.DISMISS_SNACKBAR: {
      return state.map(snackbar => ({
        ...snackbar,
        dismissed: snackbar.dismissed || snackbar.key === action.payload,
      }));
    }

    case SnackbarActionType.REMOVE_SNACKBAR: {
      return state.filter(({ key }) => key !== action.payload);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
