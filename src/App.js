import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Account from 'material-ui/svg-icons/action/account-circle';
import StarRate from 'material-ui/svg-icons/toggle/star';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Group from 'material-ui/svg-icons/social/group';
import Archieve from 'material-ui/svg-icons/content/archive';
import * as reducers from './reducers';

import { Search } from './containers';
import { Header, Menu, Page, Left, Central } from './components';

const store = createStore(combineReducers(reducers));

const leftMenuElements = [{
  title: 'All Users',
  icon: <Account />,
}, {
  title: 'Favorites',
  icon: <StarRate />,
}, {
  title: 'Administrators',
  icon: <CheckCircle />,
}, {
  title: 'Non-Admins',
  icon: <Group />,
}, {
  title: 'Archieved',
  icon: <Archieve />,
}];

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Header />
            <Page>
              <Left>
                <Menu title="Users" elements={leftMenuElements} />
              </Left>
              <Central>
                <Search />
              </Central>
            </Page>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
