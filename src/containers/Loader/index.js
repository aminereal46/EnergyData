// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import makeSelectShowLoader from './selector';

const styles = (theme) => ({
  container: {
    display: 'flex',
    zIndex: 8000,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'fixed',
    width: ' 100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.45)',
    top: 0,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    margin: 10,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

type Props = {
  classes?: Object,
  showLoader: boolean,
};

class Loader extends React.Component<Props> {
  render() {
    const { classes, showLoader } = this.props;
    return (
      showLoader && (
      <div className={classes.container}>
        <CircularProgress className={classes.progress} />
        <Typography className={classes.title}>
            ATTENDEZ SVP
        </Typography>
      </div>
      )
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showLoader: makeSelectShowLoader,
});

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(Loader));
