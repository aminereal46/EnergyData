import type { HomeState } from '../../Types/State';
import type { DataAction } from '../../Types/home';
import { INIT_DATA_PAGE, NEXT_DATA_PAGE, SET_DATA, SET_FILTER } from './constants';

const initialState: HomeState = {
  data: [],
  filter: {
    selectedRegions: [],
    selectedNature: [],
  },
};


function dataReducer(state: HomeState = initialState, action: DataAction): HomeState {
  switch (action.type) {
    case SET_DATA: {
      if (action.init) {
        return { ...state, data: [] };
      }
      return { ...state, data: [...state.data, ...action.data] };
    }
    case INIT_DATA_PAGE:
      return { ...state, startRow: 1, data: [] };
    case NEXT_DATA_PAGE: {
      const prevDataListPage = state.startRow;
      return { ...state, startRow: prevDataListPage + 1 };
    }
    case SET_FILTER:
      return { ...state, filter: action.filter };


    default:
      return state;
  }
}


export default dataReducer;
