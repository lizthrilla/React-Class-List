import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Input from "./components/Input"
import List from "./components/List"

// Liz64EncodedReactClass

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputsubmitted: "something",
      impendingList: ["thing1","2","last one"]
    }
  }

  submitForm = (event) => {
    console.log(event.target.value)
    this.setState({ impendingList: this.state.impendingList.concat({inputsubmitted: this.state.inputsubmitted}) })
  }

  handleChange = (event) => {
    this.setState({ inputsubmitted: event.target.value })
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="App">
        <List impendingList={this.state.impendingList} submitForm={this.submitForm}/>
        <Input inputsubmitted={this.state.inputsubmitted} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App
