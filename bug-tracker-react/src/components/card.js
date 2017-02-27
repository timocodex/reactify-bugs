
import React from 'react'


export class Card extends React.Component{
  render(){
    return (

      <div>
      <hr/>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: 12405
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            Hello
            <span className="tag is-info">Timo</span>
            <p>Assigned To: Ayam</p>
          </div>
          <br/>
          <small className="tag is-primary">close</small>
        </div>
        <footer className="card-footer">
          <a onclick="" className="is-warning card-footer-item">Close</a>
          <a className="card-footer-item" onclick="">Delete</a>
        </footer>
      </div>
        <br/>
      </div>


    )
  }
}
