import React from 'react';
import superagent from 'superagent';
import '../styles/Form.scss';

class Form extends React.Component {

  clickHandler = (e) => {
    e.preventDefault();
    superagent[e.target.method.value.toLowerCase()](e.target.url.value).then(data => {
      this.props.updateState({ url: e.target.url.value, method: e.target.method.value, header: data.header, count: data.body.count, result: data.body })
    })
  }
  render() {
    return (
      <main>
        <div id='container'>
          <form title='live APIs'  onSubmit={this.clickHandler}>
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
              <button data-testid='button' type="submit">GO!</button>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default Form;