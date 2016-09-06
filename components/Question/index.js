import React from 'react';
import Data from '../Data';

export default class Question extends React.Component{
  //loops through the imported data and finds the question from this.props.id
  looper(){
  	for(var i = 0; i < Data.factory.records.length; ++i) {
      /*
       * because looper func belongs to this question,
       * looper can access this.props.id
       */
    	if (Data.factory.records[i].Id === this.props.id) {
        return Data.factory.records[i].question;
      }
    }
    return 'Question not found';
  }

  //we pass props (from current context) to the constructor to make them accessible when setting the state
  constructor(props) {
    super(props);

    this.state = {
        //get the id from prop
        id : this.props.id,
        data : this.looper()
      };
  }

  render() {
    return (
      <div>
        <h4>Question {this.state.id}</h4>
        <p>{this.state.data}</p>
      </div>
    );
  }

}
