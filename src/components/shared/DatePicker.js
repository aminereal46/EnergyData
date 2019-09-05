import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    borderRadius: 2,
    height: '100%',
    width: '100%',
    color: '#728397',
    fontFamily: 'Roboto',
    backgroudColor: '#FFF',
    fontSize: 14,
    fontWeight: 500,
    borderBottom: '1px solid',
  },
  calendar: {
    width: '100px',
    backgroundColor: 'red',
  },
});

type Props = {
    classes: Object;
    id: string;
    label: string;
    selectedDate: Date;
    handleDateChange: Function;

}

class Filter extends React.Component<Props, State> {
  render() {
    const {
      label, id, selectedDate, handleDateChange, classes,
    } = this.props;
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <KeyboardDatePicker
          classeName={classes.calendar}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id={id}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(Filter);
