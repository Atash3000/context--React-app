import Navbar from './components/Navbar.js'
import TodoList from './components/TodoList.js'
import TitleBar from './components/TitleBar.js'
import ThemeContextProvider from './contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <TitleBar></TitleBar>
      <Navbar></Navbar>
      <TodoList></TodoList>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
