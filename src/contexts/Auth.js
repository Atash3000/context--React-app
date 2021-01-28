import React, { Component ,createContext} from 'react'



export const AuthContext =createContext()



class AuthProvider extends Component {
    state={
      isLogedIn: false
    }

  swithStatus=()=>{
  this.setState({
    isLogedIn:!this.state.isLogedIn
  })
}

  render() {
    return (
      <AuthContext.Provider value={{...this.state,swithStatus:this.swithStatus}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
