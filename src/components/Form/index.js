import React from 'react';
import superagent from 'superagent';
import { If, Then } from 'react-if';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFeatching: false };
  }

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ isFeatching: true })
    superagent[e.target.method.value.toLowerCase()](e.target.url.value).send(e.target.body.value).then(data => {
      console.log(data.body)
      let query = { url: e.target.url.value, method: e.target.method.value, body: e.target.body.value  , result:data.body.results }
      let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
      let check = false;

      history.forEach((item) => {
        if ((item.url === query.url) && (item.method === query.method)) {
          check = true
        }
      })
      this.setState({ isFeatching: false })
      if (check) {
        this.props.updateState({ url: e.target.url.value, method: e.target.method.value, header: data.header, count: data.body.length, result: data.body })
      } else {
        history.push(query)
        localStorage.setItem("history", JSON.stringify(history))
        this.props.updateState({ url: e.target.url.value, method: e.target.method.value, header: data.header, count: data.body.length, result: data.body })
      }
      // 
    }).catch(err => {
      // 
      this.setState({ isFeatching: false })
      this.props.updateState({ url: e.target.url.value, method: e.target.method.value, header: 'error', count: 0, result: err.message })
      // 
    })
  }
  handelClick = ()=> {
    let obj = this.props.reRun;
    const selected = document.getElementById(`url`);
    selected.value = obj.url;
    const radiobtn = document.getElementById(obj.method);
    radiobtn.checked = true;
    const textarea = document.getElementById(`body`);
    textarea.value = obj.body;
  }
  componentDidMount(){
    if(this.props.reRun){
      this.handelClick();
    }
  }
  render() {

    return (
      <main>
        <div id='container'>
          <form title='live APIs' onSubmit={this.clickHandler}>
            <div id='inputs'>
              <input type='url' id='url' name='url' required />
            </div>
            <div id='methods'>
              <label htmlFor='GET'>GET
                <input type='radio' id='GET' name='method' value='GET' required defaultChecked />
              </label>
              <label htmlFor='POST'>POST
                <input type='radio' id='POST' name='method' value='POST' />
              </label>
              <label htmlFor='PUT'>PUT
                <input type='radio' id='PUT' name='method' value='PUT' />
              </label>
              <label htmlFor='DELETE' >DELETE
                <input type='radio' id='DELETE' name='method' value='DELETE' />
              </label>
              <button id='btn' data-testid='button' type="submit">GO!</button>
            </div>
            <textarea id="body" name="body">

            </textarea>
          </form>
          <If condition={this.state.isFeatching === true}>
            <Then>
                <div id='loading'></div>
            </Then>
          </If>
        </div>
      </main>
    )
  }
}

export default Form;
//////////