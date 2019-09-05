import { createSelector } from 'reselect';
import type { State } from '../../Types/State';

const selectHome = (state: State) => state.home;


const selectData = createSelector(
  selectHome,
  (home) => home.data,
);
const selectDataRowsNumber = createSelector(selectHome, (home) => home.data.length);


const selectDataEndOfPageFlag = createSelector(selectHome, (home) => home.endOfPageReached);

const selectFilter = createSelector(selectHome, (home) => home.filter);
export { selectData, selectDataRowsNumber, selectDataEndOfPageFlag, selectFilter };
