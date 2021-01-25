import React, { Component ,createContext} from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLightTheme : true,
      ligthTheme:{ textColor:'#000',titleBar:'#507DBC', navBar:'#A1C6EA' ,todolist:'#DAE3E5',listItem:'#BBD1EA'},
      darkTheme:{ textColor:'#eee',titleBar:'#0d1b2a', navBar:'#1b263b' ,todolist:'#e0e1dd',listItem:'#778da9'},
      isLogedIn:false,
      
    }
  }
    changeTheme=()=>{ 
      if(document.querySelector('#switch_icon').className==='fas fa-moon'){
        document.querySelector('#switch_icon').className='fas fa-sun'
      
      }else{
        document.querySelector('#switch_icon').className='fas fa-moon'
      
      }  
      this.setState({
        isLightTheme :!this.state.isLightTheme
      })
      
    }

  changeStatus=()=>{
    const status = this.state.isLogedIn
    this.setState({
    isLogedIn: !status
    })
  }



  render() {
    
    return (
      <ThemeContext.Provider value = {{...this.state,userStatus:this.changeStatus,changeTheme:this.changeTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
