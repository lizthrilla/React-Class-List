import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <li>{this.props.inputsubmitted}</li>
  }
}

export default List
