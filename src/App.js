import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Meetings from './components/Meetings';
import MeetingFilter from './components/MeetingFilter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MeetingFilter />
          <Meetings />
        </div>
      </Provider>
    );
  }
}

export default App;
