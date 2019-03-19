import React, { Component } from "react"

class Input extends Component {
  render() {
    return (
      <div>
        <h1>Form Input</h1>
        <form>
          <input
            type="text"
            placeholder="We will make this pretty later"
            inputsubmitted={this.props.inputsubmitted}
            onClick={console.log(this.props.inputsubmitted)}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Input
