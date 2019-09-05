// @flow
import { createSelector } from 'reselect';

const selectLoader = (state) => state.loader;

const makeSelectShowLoader = createSelector(
  selectLoader,
  (loader) => {
    return loader.showLoader.size > 0;
  },
);


export default makeSelectShowLoader;
