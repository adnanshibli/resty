import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import HistoryDetals from '../HistoryDetals';
import Help from '../Help';


import './App.css';


class App extends React.Component {
  state = {
    url: '',
    method: '',
    header: {},
    count: 0,
    result: {}
  }
  updateState = (data) => {
    this.setState({ url: data.url, method: data.method, header: data.header, count: data.count, result: data })
  }
  render() {
    return (
      <main>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={HistoryDetals} />
            <Route path="/help" component={Help} />
          </Switch>
        <Footer />
      </main>
    )
  }
}

export default App;
