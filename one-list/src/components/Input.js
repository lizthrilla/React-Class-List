import React, { Component } from "react"

class Input extends Component {
  render() {
    return (
      <div>
        <h1>Form Input</h1>
        <form onSubmit={this.props.submitForm}>
          <input
            type="text"
            placeholder="We will make this pretty later"
            inputsubmitted={this.props.inputsubmitted}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Input
