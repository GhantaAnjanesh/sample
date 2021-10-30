import React, { Component } from 'react'

export default class States extends Component {
  constructor(props) {
            super(props)
        
            this.state = {
                   name:"Vasu"
            }
        }
        
        render (){
            setTimeout(()=>{
                this.setState({name:"Vasu Ghanta"})
            },3000

            )
            return(
            <div>
                <h1>
                    {this.state.name}
                    </h1>
            </div>
        )
    }
}
