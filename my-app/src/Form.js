import React from 'react';
import './Form.scss';

class Form extends React.Component{
  state = {
    url :'',
    method : ''
  }
  clickHandler = (e)=>{
    e.preventDefault();
    this.setState({url :e.target.url.value , method : e.target.method.value })
  }
  render(){
    return(
      <main>
      <div id='container'>
        <form onSubmit={this.clickHandler}>
          <div id='inputs'>
            <label >URL:</label>
            <input type='url' id='url' name='url'required />
            <button  type="submit">GO!</button>
          </div>
          <div id='methods'>
            <label >GET</label>
            <input type='radio' id='GET' name='method' value='GET' required/>
            <label >POST</label>
            <input type='radio' id='POST' name='method' value='POST'/>
            <label >PUT</label>
            <input type='radio' id='PUT' name='method' value='PUT'/>
            <label >DELETE</label>
            <input type='radio' id='DELETE' name='method' value='DELETE'/>
          </div>
        </form>
        <div id='result'>
          <span id='method'>{this.state.method}</span>
          <span></span>
          <span id='text'>{this.state.url}</span>
        </div>
        </div>
      </main>
    )
  }
}

export default Form;