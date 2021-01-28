import Navbar from './components/Navbar.js';
import TodoList from './components/TodoList.js';
import TitleBar from './components/TitleBar.js';
import ThemeContextProvider from './contexts/ThemeContext';
import  ListItemContexProvider from './contexts/ListItemContex';


function  App(){
    return (
      <div  className="App">
        <ThemeContextProvider>
        <TitleBar></TitleBar>
        <Navbar></Navbar>
        < ListItemContexProvider>
        <TodoList></TodoList>
        </ListItemContexProvider>
        
        </ThemeContextProvider>
      </div>
    );
  
  
}

export default App;

