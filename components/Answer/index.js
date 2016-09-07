import React from 'react';

export default class Answer extends React.Component{

  //we pass props (from current context) to the constructor to make them accessible when setting the state
  constructor(props) {
    super(props);

    this.state = {
        answer : ''
    };
  }

  render() {
    var answers = JSON.parse(this.props.answers);
    var res = [];

    for(var i = 0; i < answers.length; ++i) {
      res.push(<li key={answers[i].aid}> {answers[i].answer} </li>);
    }
    return (
      <div>
      <p>{res}</p>
      </div>
    );
  }

}
