import React from 'react';
import ReactDOM from 'react-dom';

//import all react components below...
import Question from './components/Question';

export default class Page extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {

  }
}

ReactDOM.render(
  <Question id='001E000000Im0jSIAR'/>,
  document.getElementById('q1')
)

ReactDOM.render(
  <Question id='001E000000Im0jUIAR'/>,
  document.getElementById('q2')
)

ReactDOM.render(
  <Question id='001E000000Im0jQIAR'/>,
  document.getElementById('q3')
)
