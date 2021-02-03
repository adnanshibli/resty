import Header from './components/Header.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Results from './components/Results.js';
import React from 'react';
import react from 'react';
// import './App.css';

class App extends react.Component{
  constructor (props){
    super(props);
    this.state ={
      count :0,
      results: [],
      headers:[]
    }
  }
  handleForm =(data)=> {
    console.log('data ------> before setState', data)
    let count = data.body.count ;
    let results = data.body;
    let headers = data.headers;
    this.setState({count : count, 
    results: results,
  headers:headers});
  
 
}


render() {
  return (
    <>
      <Header />
      <Form handler={this.handleForm}/>
      <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
      <Footer />
    </>
  )
}
}

export default App;
