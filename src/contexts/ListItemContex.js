import React,{useState,createContext} from 'react'

export const ListItemContext = createContext()

function ListItemContexProvider({children}) {
  const [tasks, setTasks] =useState([
    // {title: 'Go to the market', id: 1},
    // {title: 'Get some milk', id: 2},
    // {title: 'Pay the bills', id: 3}
  ])
    const addItem=(value)=>{
      setTasks([...tasks, {title:value, id: Date.now()}])
    }
    const removeItem=(id)=>{
      const filteredTasks = tasks.filter(item=>item.id!==id)
      setTasks(filteredTasks)
    
    }
  return (
  <ListItemContext.Provider value={{tasks,addItem:addItem,removeItem:removeItem}}>
      {children}
  </ListItemContext.Provider>
      
  )
}

export default ListItemContexProvider
