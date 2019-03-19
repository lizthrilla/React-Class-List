import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Input from "./components/Input"

// Liz64EncodedReactClass

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputsubmitted: "something"
    }
  }

  handleChange = (event) => {
    this.setState({ inputsubmitted: event.target.value })
  }
  render() {
    return (
      <div className="App">
        <Input inputsubmitted={this.state.inputsubmitted} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App
