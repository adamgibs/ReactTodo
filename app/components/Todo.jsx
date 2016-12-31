var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if(completed){
        message = 'Completed ';
        timeStamp = completedAt;
      };

      return message + Moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div ref = 'toggle' onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
