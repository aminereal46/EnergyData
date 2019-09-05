// @flow
import { HIDE_LOADER, SHOW_LOADER } from './constants';
import type { ShowLoader } from '../../Types/State';

const initialState: ShowLoader = {
  showLoader: new Set(),
};
function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER: {
      const { showLoader } = state;
      showLoader.add(action.actionType);
      return { ...state, showLoader };
    }
    case HIDE_LOADER: {
      const { showLoader } = state;
      showLoader.delete(action.actionType);
      return { ...state, showLoader };
    }
    default:
      return state;
  }
}

export default loaderReducer;
