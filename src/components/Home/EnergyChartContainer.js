import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper } from '@material-ui/core';
import EnergyChart from './EnergyChart';

const styles = () => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 0px',
    margin: '24px 24px',
    minHeight: 600,
    width: 'calc(100% - 48px)',
    borderRadius: '4px',
    boxShadow: '0 10px 10px 0 rgba(114, 131, 151, 0.05)',
    backgroundColor: 'white',
  },
});

type Props = {
  data: Data[],
  classes: Object,
}

class EnergyChartContainer extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;
    return (
      <Paper className={classes.paper}>
        <EnergyChart data={data} />
      </Paper>


    );
  }
}


export default withStyles(styles)(EnergyChartContainer);
