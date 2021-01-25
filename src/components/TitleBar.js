import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
class TitleBar extends React.Component{
  static contextType =ThemeContext;

render(){
  const { changeTheme, isLightTheme ,ligthTheme, darkTheme } = this.context;
  const theme = isLightTheme? ligthTheme : darkTheme
  const styles = {
    div:{
      backgroundColor:theme.titleBar,
      color:theme.textColor
    }
  }
  
  return(
    <div  style={styles.div} className='title-bar'>
      <div className="branding">To Do App</div>
      <i id="switch_icon" onClick={changeTheme} className="fas fa-moon"></i>
    </div>
  )
}  
}

export default TitleBar 

