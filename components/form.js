var React = require('react');
var ReactDOM = require('react-dom');

var data='';

var MyForm = React.createClass({
  getInitialState : function() {
    return {
      data : ''
    };
  },
  updateData : function(event) {
    this.setState({
      data: event.target.value
    });
    console.log('data changed...');
  },
  render : function() {
    return (
      <div>
        <h1>Type in the box below to see live feedback.</h1>
        <input type='text' onChange={this.updateData} />
        <br/>
        <div>Result: {this.state.data}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <MyForm />,
  document.getElementById('content')
)
