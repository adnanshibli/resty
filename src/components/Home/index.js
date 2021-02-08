import React from 'react';

import Form from '../Form';
import Results from '../Results';
import History from '../History';


class Main extends React.Component {
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
      <>
        <Form updateState={this.updateState} reRun={this.props.location.query}/>
        <History />
        <Results payload={this.state} />
      </>
    )
  }
}

export default Main;
