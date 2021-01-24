import Navbar from './components/Navbar.js'
import TodoList from './components/TodoList.js'
import TitleBar, { Person } from './components/TitleBar.js'

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Navbar></Navbar>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
