var React = require('react');
var Moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
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
      <div className = {todoClassName} ref = 'toggle' onClick={() => {
        this.props.onToggle(id);
      }}>
        <div>
          <input type='checkbox' checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
