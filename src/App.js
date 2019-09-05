import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import sagas from './sagas';
import rootReducer from './RootReducer';
import Home from './containers/home';
import colors from './colors';
import Loader from './containers/Loader';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

if (sagas instanceof Array) {
  sagas.forEach((saga) => {
    sagaMiddleware.run(saga);
  });
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.BLUE_2,
    },
    secondary: {
      main: colors.BLUE_2,
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiSelect: {
      root: {
        height: 80,
        alignItems: 'center',
        backgroundColor: 'white',
        fontSize: '50px',
        fontWeight: 'normal',
      },
      selectMenu: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Loader />
        <Router>
          <Route path="/" component={Home} />
        </Router>
        <ToastsContainer store={ToastsStore} lightBackground />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
