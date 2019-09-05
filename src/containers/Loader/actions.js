import { HIDE_LOADER, SHOW_LOADER } from './constants';

export function showLoader(actionType) {
  return {
    type: SHOW_LOADER,
    actionType,
  };
}

export function hideLoader(actionType) {
  return {
    type: HIDE_LOADER,
    actionType,
  };
}
