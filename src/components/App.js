import React, { Component } from 'react';
import './App.css';
import store from '../store/index';
import { Provider } from 'react-redux';

import usersReducer from '../reducers/users';

import UserList from './user/UserList'
import Panel from './panel/Panel'


class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <div>
                <UserList/>
                <Panel/>
            </div>
        </ Provider>
    );
  }
}

export default App;
