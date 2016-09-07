import React from 'react';

export default class Answers extends React.Component{

  //we pass props (from current context) to the constructor to make them accessible when setting the state
  constructor(props) {
    super(props);

    this.state = {
        answer : 'initial'
    };
    this.createAnswer = this.createAnswer.bind(this);
  }

  clickAnswer(ans) {
    this.setState({answer : ans.answer});

    document.getElementById('event').innerHTML = 'Answer changed!';

  }

  //called for each answer in the JSON object
  createAnswer(ans) {
    return <li onClick={this.clickAnswer.bind(this,ans)} key={ans.aid}>{ans.answer}</li>;
  }

  render() {
    var answers = JSON.parse(this.props.answers);
    console.log(this.state);
    return (<div><ul>{answers.map(this.createAnswer)}</ul> <p>{this.state.answer}</p></div>);
  }

}
