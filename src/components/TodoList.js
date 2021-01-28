import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';


class TodoList extends React.Component{
  static contextType =ThemeContext;
  state={
    tasks:[]

  }
  componentDidMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => this.setState({
    
    tasks:json
  }))
  }
render(){
 
  const { isLightTheme ,ligthTheme, darkTheme } = this.context;
  const theme = isLightTheme ? ligthTheme : darkTheme
  const styles = {
    div:{
      backgroundColor:theme.todolist
    },
    li:{
      backgroundColor:theme.listItem,
      color:theme.textColor
    } 
  }
  document.body.onload=()=>{
    document.querySelector('#task_input').focus()
  }
  
  return(
    <div style={styles.div} className="todolist">
      <input type="text" id='task_input'/>
      <ul>
        {this.state.tasks.slice(0,6).map(item=><li  style={styles.li}  >{item.title}<i className="far fa-trash-alt"></i></li> )}
        <li  style={styles.li} >go to market<i className="far fa-trash-alt"></i></li>
        <li  style={styles.li}>Buy a milk<i className="far fa-trash-alt"></i></li>
        <li  style={styles.li}>Eat Food<i className="far fa-trash-alt"></i></li>
        <li  style={styles.li} >Sit Down<i className="far fa-trash-alt"></i></li>
      </ul>
    </div>
  )
}
}

export default TodoList 


