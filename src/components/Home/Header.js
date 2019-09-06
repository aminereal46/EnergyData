import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
import colors from '../../colors';

const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    background: `linear-gradient(-90deg, ${colors.BLUE_2} 0%, #29323c 100%)`,
    height: 120,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Roboto',
    marginLeft: 24,
  },
});

class Header extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography className={classes.title}>
          Données éCO2mix régionales consolidées et définitives
        </Typography>
      </div>

    );
  }
}


export default withStyles(styles)(Header);
