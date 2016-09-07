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

    //we don't actually need to know *what* answer has changed, just need to trigger the update
    $('#event').append('<p> Answer with the id: ' + ans.aid + ' has been selected!<p>');
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
