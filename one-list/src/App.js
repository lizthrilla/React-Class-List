import React, { Component } from 'react'
import './App.css'
// import Input from './components/Input'
import ListItem from './components/ListItem'

// Liz64EncodedReactClass

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputsubmitted: '',
      impendingList: ['thing1', '2', 'last one']
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({
      inputsubmitted: event.target.value
    })
    console.log(this.state.inputsubmitted + 'here')
    const newImpendingList = this.state.impendingList.concat(
      this.state.inputsubmitted
    )
    this.setState({
      impendingList: newImpendingList
    })
    console.log(this.state.impendingList)
  }

  handleChange = event => {
    this.setState({ inputsubmitted: event.target.value })
    console.log(this.state.inputsubmitted)
  }
  render() {
    const items = this.state.impendingList.map((item, i) => <li>{item}</li> )
    return (
      <div className="App">
        <ul>
          {items}
          <ListItem inputsubmitted={this.state.inputsubmitted} />
        </ul>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="We will make this pretty later"
            inputsubmitted={this.state.inputsubmitted}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default App
