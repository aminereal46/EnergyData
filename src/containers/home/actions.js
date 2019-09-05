import type { Data, Filter, GetDataAction, SetDataAction } from '../../Types/home';
import { GET_DATA, SET_DATA, SET_FILTER } from './constants';


export function setData(data: Data[], init: boolean = false): SetDataAction {
  return { type: SET_DATA, data, init };
}

export function getData(init: boolean = false): GetDataAction {
  return { type: GET_DATA, init };
}

export function setFilter(filter: Filter) {
  return {
    type: SET_FILTER,
    filter,
  };
}

