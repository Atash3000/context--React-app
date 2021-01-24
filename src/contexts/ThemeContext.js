import React, { Component ,createContext} from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLightTheme : true,
      ligthTheme:{ text:'#000',titleBar:'#507DBC', navBar:'#A1C6EA' ,todolist:'#ffffffab'},
      darkTheme:{ text:'#fff',titleBar:'#539DBC', navBar:'#A8A9EA' ,todolist:'#fAAfffab'}
    }
  }

  render() {
    return (
      <ThemeContext.Provider value = {this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
