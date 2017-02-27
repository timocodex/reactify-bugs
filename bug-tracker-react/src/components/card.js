
import React from 'react'


export class Card extends React.Component{
  render(){
    const bugs = [
      {id:1,assignedTo:"timo",desc:"virus"},
      {id:2,assignedTo:"fenetta",desc:"worm"}
    ]
    return (
      <div>{
      bugs.map((bug,index)=>{
        return(
        <div key={bug.id} className="card">
          <header className="card-header">
            <p className="card-header-title">
            BugId: {bug.id}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {bug.desc}
              <span className="tag is-info">Timo</span>
              <p>Assigned To: {bug.assignedTo}</p>
            </div>
            <br/>
            <small className="tag is-primary">close</small>
          </div>
          <footer className="card-footer">
            <a  className="is-warning card-footer-item">Close</a>
            <a className="card-footer-item" >Delete</a>
          </footer>
        </div>
      )
      })
    }
      </div>


    )
  }
}
