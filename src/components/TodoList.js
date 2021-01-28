import React ,{useState,useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {ListItemContext} from '../contexts/ListItemContex';
import { FaExclamationTriangle } from "react-icons/fa";
function TodoList(){
  const {tasks,addItem,removeItem} = useContext( ListItemContext);
  const [errMessage ,setErrMessagege] =useState('enter a value')
  const [task ,setTask] =useState()
 const { isLightTheme ,ligthTheme, darkTheme } = useContext(ThemeContext);
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
const handleSubmit=(e)=>{
e.preventDefault();
const regex = /^\s+$/;
if(regex.test(task)<=0 && task){
  addItem(task);
}else{
  document.querySelector('input').classList.add('red');
  setErrMessagege('This field can not be emty' )
  setTimeout(()=>{
    setErrMessagege('Enter a value')
    document.querySelector('input').classList.remove('red');
  },3000)
}

setTask('');
}

  
  return(
    <form onSubmit={handleSubmit} style={styles.div} className="todolist">
      <input value={task} onChange={(e)=>setTask(e.target.value)} placeholder={errMessage} type="text" id='task_input' />
      <div className="scroll">
      <ul>
        {tasks.map(item=> {
          return(
            <li  key={item.id} style={styles.li}  >{item.title}<i id={item.id} onClick={()=>removeItem(item.id)} className="far fa-trash-alt icon-trash"></i></li> 
          )
        } )}
        
      </ul>
      </div>
    </form>
  )

}

export default TodoList 


