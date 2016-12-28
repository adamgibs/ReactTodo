var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function(event){
    event.preventDefault();
    var todo = this.refs.todo.value;

    if(todo.length > 0){
      this.refs.todo.value = "";
      this.props.onAdd(todo);
    } 
  },
  render: function(){
    return(
    <div>
      <form ref = 'form' onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Add a todo item' ref='todo'/>
        <br/>
        <button className='hollow expanded button'>Add Todo</button>
      </form>
    </div>
    )
  }
});

module.exports = AddTodo;
