import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from '@material-ui/core';
import { compose } from 'redux';
import { withInfiniteScroll } from './withInfinitScroll';

const styles = () => ({
  paper: {
    justifyContent: 'center',
    margin: '24px 24px',
    minHeight: 600,
    width: 'calc(100% - 48px)',
    overflowX: 'scroll',
    overflowY: 'hidden',
    borderRadius: '4px',
    boxShadow: '0 10px 10px 0 rgba(114, 131, 151, 0.05)',
    backgroundColor: 'white',
  },
});

type Props = {
    data: Data[],
    classes: Object,
}

class EnergyDataTable extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;
    return (
      <Paper
        className={classes.paper}
        style={{
          alignItems: data.length === 0 ? 'center' : 'flex-start',
          display: data.length === 0 ? 'flex' : 'inline-block',
        }}
      >
        { data.length === 0 ? (
          <Typography> Aucune donnée à afficher</Typography>) : (
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Région</TableCell>
                  <TableCell align="left">Ech_physiques</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Nature</TableCell>
                  <TableCell align="left">Consommation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((record) => (
                  <TableRow key={record.datasetid}>
                    <TableCell component="th" scope="row">
                      {record.fields.libelle_region}
                    </TableCell>
                    <TableCell align="left">{record.fields.ech_physiques}</TableCell>
                    <TableCell align="left">{record.fields.date}</TableCell>
                    <TableCell align="left">{record.fields.nature}</TableCell>
                    <TableCell align="left">{record.fields.consommation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        )}
      </Paper>


    );
  }
}

export default compose(withInfiniteScroll)(
  withStyles(styles)(EnergyDataTable),
);
