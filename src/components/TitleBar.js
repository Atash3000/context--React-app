import React from 'react';

class TitleBar extends React.Component{
render(){
  return(
    <div className='title-bar'>
      <div className="branding">To Do App</div>
      <i className="fas fa-moon"></i>
    </div>
  )
}
}

export default TitleBar 