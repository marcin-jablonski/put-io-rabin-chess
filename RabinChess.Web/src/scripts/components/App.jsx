import React from 'react'
import ToolboxApp from 'react-toolbox/lib/app'

import CustomButton from './CustomButton.jsx'

/**
 * App class
 */
export default class App extends React.Component {
  /**
   * Display heading
   * @return {div} App
   */
   
   
   
  render() {  
    return (
	  <ToolboxApp>
        <div>
          <CustomButton />
          { this.props.children }
        </div>
      </ToolboxApp>
    );
  }
}
