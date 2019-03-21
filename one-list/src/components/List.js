import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stuff: ''
        }
    }
  render() {
    return (
      <div>
        {this.props.inputsubmitted}
      </div>
    )
  }
}
