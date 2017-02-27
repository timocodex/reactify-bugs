import React from 'react'
import {render} from 'react-dom'

import {Header,Footer,Isi,Card} from './components'

class Bodz extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Isi />
        <Card />
        <Footer />
      </div>
    )
  }
}

render(<Bodz />,document.getElementById('app'))
