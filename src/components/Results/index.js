import React from 'react';
import './Results.scss';
import { If, Then, Else } from 'react-if';
import ReactJson from 'react-json-view'

class Results extends React.Component {
  render() {
    return (
      <If condition={this.props.payload.count === 0}>
        <Then>
        <div data-testid='test' id='results'>
            Waiting
          </div>
        </Then>
        <Else>
          <div data-testid='test' id='results'>
            <ReactJson src={this.props.payload.header} />
            <ReactJson src={this.props.payload.result} />
          </div>
        </Else>
      </If>
    )
  }
}

export default Results;