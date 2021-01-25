import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
class Navbar extends React.Component{
  static contextType =ThemeContext;
render(){
  const { isLightTheme ,ligthTheme, darkTheme, isLogedIn,userStatus} = this.context;
  const theme = isLightTheme ? ligthTheme : darkTheme

 const styles = {
    ul:{
      backgroundColor:theme.navBar,
      color:theme.textColor
    }
  }


  
  return(
    <ul style={styles.ul} className="nav-bar">
      <li>Home</li>
      <li>About</li>
      <li onClick={userStatus}>{isLogedIn? 'Logout':'Login'}</li>
    </ul>
  )
}
}

export default Navbar 