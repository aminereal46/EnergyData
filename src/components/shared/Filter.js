import React from 'react';
import { Checkbox, ListItemText, Select, Typography, withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { SELECTED_ALL } from '../../config/constants';
import colors from '../../colors';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  select: {
    border: 'none',
    borderRadius: 2,
    width: 220,
    borderBottom: 'none',
    '&:before': {
      borderBottom: 'none',
    },
    '&&&&:hover:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
  },
  lightMode: {
    color: colors.INDIGO_1,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    padding: '12px 30px 9px 12px',
  },

  selectStyle: {
    color: colors.GREY_1,
    fontFamily: 'Roboto',
    fontSize: 24,
    letterSpacing: -0.4,
    lineHeight: '19px',
    paddingLeft: '24px',
    padding: '12px 30px 9px 12px',
  },

  label: {
    fontWeight: '500',
    color: colors.BLUE_3,
    fontSize: 12,
  },
});

type Props = {
    classes ?: Object,
    filters: string[],
    selectedFilters: string[],
    handleChange: Function,
    checkedAll: boolean,
    label: string,
}
class Filter extends React.Component<Props, State> {
  render() {
    const {
      classes,
      filters,
      selectedFilters,
      handleChange,
      checkedAll,
      label,
    } = this.props;
    return (
      <div className={classes.container}>
        <Typography className={classes.label}>{label}</Typography>
        <Select
          multiple
          value={selectedFilters}
          onChange={handleChange}
          renderValue={(selected) => {
            if (
              selected.length === 0
                            || filters.length === 0
                            || filters.length === selected.length
            ) {
              return 'Tout';
            }
            if (selected.length > 1) {
              return `${selected.length} valeurs choisies`;
            }
            const selectedFilter = filters.filter(
              (filter) => filter === selected[0],
            )[0];
            return selectedFilter || '';
          }}
          className={classes.select}
          classes={{
            select: classes.lightMode,
          }}
          displayEmpty
        >
          {filters
                    && filters.length > 0 && (
                    <MenuItem value={SELECTED_ALL}>
                      <Checkbox checked={checkedAll} />
                      <ListItemText primary={SELECTED_ALL} />
                    </MenuItem>
          )}
          {filters
                    && filters
                      .map((filter: string) => (
                        <MenuItem key={filter} value={filter}>
                          <Checkbox
                            checked={selectedFilters.indexOf(filter) > -1}
                          />
                          <ListItemText primary={filter} />
                        </MenuItem>
                      ))}
        </Select>
      </div>
    );
  }
}

export default withStyles(styles)(Filter);
