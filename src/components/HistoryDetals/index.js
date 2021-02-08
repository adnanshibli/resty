import React from 'react';
import './HistoryDetals.scss'
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if';
import ReactJson from 'react-json-view'




class HistoryDetals extends React.Component {
  state = {
    url: '',
    method: '',
    body: '',
    result : []
  }
  showDetalis = (e) => {
    let query = JSON.parse(localStorage.getItem("history"))[e.currentTarget.childNodes[0].id]
    console.log(query.result)
    this.setState({
      url: query.url,
      method: query.method,
      body: query.body,
      result: query.result
    })
  }
  render() {
    let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
    return (
      <div>
        {
          history.map((query, index) => {
            return (
              <div onClick={this.showDetalis} key={query.method + query.url}>
                <p id={index}>{query.url}</p>
              </div>
            )
          })
        }
        <If condition={this.state.url !== ''}>
          <Then>
            <div id='details'>
              <p>{this.state.url}</p>
              <p>{this.state.method}</p>
              <p>{this.state.body}</p>
              <div id='result'>
                <ReactJson  src={this.state.result} />
              </div>
              <Link id='link' to={{ pathname: '/', query: { url: this.state.url, method: this.state.method, body: this.state.body } }}>Re Run</Link>
            </div>
          </Then>
        </If>
      </div>
    )
  }
}


export default HistoryDetals;



