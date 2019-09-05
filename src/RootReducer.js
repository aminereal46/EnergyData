import { combineReducers } from 'redux';
import dataReducer from './containers/home/reducers';
import loaderReducer from './containers/Loader/reducer';


const rootReducer = combineReducers({
  home: dataReducer,
  loader: loaderReducer,
});
export default rootReducer;
