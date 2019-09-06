import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import type { Data } from '../../Types/home';
import Filter from '../../components/shared/Filter';
import { NATURE, REGIONS, SELECTED_ALL } from '../../config/constants';
import DatePicker from '../../components/shared/DatePicker';
import colors from '../../colors';
import Header from '../../components/Home/Header';
import EnergyDataTable from '../../components/Home/EnergyDataTable';
import { selectData } from './selectors';
import { getData, setFilter } from './actions';

const styles = {
  container: {
    display: 'flex',
    paddingTop: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroudColor: colors.GREEN_3,
  },
  filter: {
    margin: '0px 24px',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    borderRadius: 2,
    width: 200,
    height: 40,
    fontSize: 14,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'white',
    marginRight: 16,
  },
};
type Props = {
  classes: Object,
  data: Data[],
  getData: Function,
  setFilter: Function,
}

type State = {
  selectedRegions: string[],
  allRegionsChecked: boolean,
  allNatureChecked: boolean,
  selectedStartDate: Date,
  selectedEndDate: Date,
  filter: Object,
};

class Home extends React.Component <Props, State> {
  state = {
    allRegionsChecked: false,
    allNatureChecked: false,
    selectedStartDate: new Date(),
    selectedEndDate: new Date(),
    filter: {
      selectedRegions: [],
      selectedNature: [],
    },
  };

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  handleStartDateChange = (date) => {
    this.setState({
      selectedStartDate: date,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      selectedEndDate: date,
    });
  };

  handleSelectRegionschange = (event) => {
    let selectedRegions = [];
    const { value } = event.target;
    const regions = REGIONS;
    if (value.indexOf(SELECTED_ALL) !== -1) {
      this.setState((prev: State) => {
        if (prev.allRegionsChecked) {
          selectedRegions = [];
        } else {
          selectedRegions.push(...regions);
        }
        return {
          allRegionsChecked: !prev.allRegionsChecked,
          filter: {
            ...prev.filter,
            selectedRegions,
          },
        };
      });
    } else {
      selectedRegions.push(...value);
      if (regions.length === selectedRegions.length) {
        this.setState((prev: State) => ({
          allRegionsChecked: true,
          filter: {
            ...prev.filter,
            selectedRegions,
          },
        }));
      } else {
        this.setState((prev: State) => ({
          allRegionsChecked: false,
          filter: {
            ...prev.filter,
            selectedRegions,
          },
        }));
      }
    }
  };

  handleButton = (event) => {
    const { getData, setFilter } = this.props;
    const { filter } = this.state;
    event.preventDefault();
    setFilter(filter);
    getData(true);
  }

  handleSelectNaturechange = (event) => {
    let selectedNature = [];
    const { value } = event.target;
    const nature = NATURE;
    if (value.indexOf(SELECTED_ALL) !== -1) {
      this.setState((prev: State) => {
        if (prev.allNatureChecked) {
          selectedNature = [];
        } else {
          selectedNature.push(...nature);
        }
        return {
          allNatureChecked: !prev.allNatureChecked,
          filter: {
            ...prev.filter,
            selectedNature,
          },
        };
      });
    } else {
      selectedNature.push(...value);
      if (nature.length === selectedNature.length) {
        this.setState((prev: State) => ({
          allNatureChecked: true,
          filter: {
            ...prev.filter,
            selectedNature,
          },
        }));
      } else {
        this.setState((prev: State) => ({
          allNatureChecked: false,
          filter: {
            ...prev.filter,
            selectedNature,
          },
        }));
      }
    }
  };

  render() {
    const { data, classes, getData } = this.props;
    const {
      allRegionsChecked,
      selectedStartDate,
      selectedEndDate,
      filter,
      allNatureChecked,
    } = this.state;
    return (
      <div>
        <Header />
        <div className={classes.container}>
          <div className={classes.filter}>
            <Filter
              label="Régions"
              filters={REGIONS}
              selectedFilters={filter.selectedRegions}
              checkedAll={allRegionsChecked}
              handleChange={this.handleSelectRegionschange}
            />
          </div>
          <div className={classes.filter}>
            <Filter
              label="Nature"
              filters={NATURE}
              selectedFilters={filter.selectedNature}
              checkedAll={allNatureChecked}
              handleChange={this.handleSelectNaturechange}
            />
          </div>
          <div className={classes.filter}>
            <DatePicker
              id="start-date"
              label="Du"
              selectedDate={selectedStartDate}
              handleDateChange={this.handleStartDateChange}
            />
          </div>
          <div className={classes.filter}>

            <DatePicker
              id="end-date"
              label="Au"
              selectedDate={selectedEndDate}
              handleDateChange={this.handleEndDateChange}
            />
          </div>
          <div className={classes.filter}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleButton}
              classes={{ root: classes.backButton }}
            >
            Rechercher
            </Button>
          </div>
        </div>
        <EnergyDataTable
          data={data}
          onEndOfPageReached={getData}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector(
  { data: selectData },
);

const mapDispatchToProps = {
  getData,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
