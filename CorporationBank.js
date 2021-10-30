import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render() {
        return (
            <div>
                <h1>CorporationBank account for {this.props.info.lastName}</h1>
            </div>
        )
    }
}
