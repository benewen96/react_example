import React from 'react';

export default class Answer extends React.Component{

  //we pass props (from current context) to the constructor to make them accessible when setting the state
  constructor(props) {
    super(props);

    this.state = {
        answer : ''
    };
  }

  //called for each answer in the JSON object
  createAnswer(ans) {
    return <li key={ans.aid}>{ans.answer}</li>;
  }

  render() {
    var answers = JSON.parse(this.props.answers);
    return <ul>{answers.map(this.createAnswer)}</ul>;
  }

}
