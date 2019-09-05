import ReactHighcharts from 'react-highcharts/';
import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../colors';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  chartHeader: {
    margin: '0px 0px 40px 50px',
    display: 'flex',
    width: '100%',
  },
  typography: {
    color: colors.BLUE_2,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19px',
  },
});

type Props = {
    classes?: Object,
};

class EnergyChart extends React.Component<Props> {
    getChartConfig = () => ({
      chart: {
        type: 'line',
        spacingLeft: 0,
        spacingTop: 24,
        spacingBottom: 24,
        spacingRight: 0,
        width: 1500,
        height: 600,
      },
      credits: {
        enabled: false,
      },
      title: {
        text: 'Données éCO2mix régionales consolidées et définitives',
      },

      yAxis: {
        title: {
          text: 'Consommation',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      }],

    });

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
          <div className={classes.chartHeader}>
            <Typography className={classes.typography}>aaaaaaaaaaaaaaaa</Typography>
          </div>
          <ReactHighcharts config={this.getChartConfig()} />
        </div>
      );
    }
}

export default withStyles(styles)(EnergyChart);
