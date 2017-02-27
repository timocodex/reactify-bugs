console.log('hello Bandung!');

import React from 'react'
import {render} from 'react-dom'

class Hello extends React.Component{
  render(){
    return <p> Hello bandung tes lah lagi</p>
  }
}

render(<Hello />,document.getElementById('app'))
