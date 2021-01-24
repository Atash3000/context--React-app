import React from 'react';

class TodoList extends React.Component{
render(){
  return(
    <div className="todolist">
      <input type="text"/>
      <ul>
        <li>go to market<i class="far fa-trash-alt"></i></li>
        <li>Buy a milk<i class="far fa-trash-alt"></i></li>
        <li>Eat Food<i class="far fa-trash-alt"></i></li>
        <li>Sit Down<i class="far fa-trash-alt"></i></li>
        
      </ul>
    </div>
  )
}
}

export default TodoList 