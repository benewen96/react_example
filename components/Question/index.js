import React from 'react';
import Data from '../Data';

import Answer from '../Answers';

export default class Question extends React.Component{
  //loops through the imported data and finds the question from this.props.id
  looper(){
  	for(var i = 0; i < Data.factory.records.length; ++i) {
      /*
       * because looper func belongs to this question,
       * looper can access this.props.id
       */
    	if (Data.factory.records[i].Id === this.props.id) {
        return JSON.stringify(Data.factory.records[i]);
      }
    }
    return JSON.stringify({question : 'Not found'});
  }

  //we pass props (from current context) to the constructor to make them accessible when setting the state
  constructor(props) {
    super(props);

    this.state = {
        data : this.looper()
    };
  }

  render() {
    var data = JSON.parse(this.state.data);
    var answers = JSON.stringify(data.answers);

    return (
      <div>

        <h4>Question {this.props.id}</h4>
        <p>{data.question}</p>
        <Answer answers={answers} />
      </div>
    );
  }

}
