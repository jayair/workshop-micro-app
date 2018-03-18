import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const api = "https://micro-server.glitch.me"

class App extends Component {
  state = {
    text: "",
    list: []
  }

  async componentDidMount() {
    const list = await this.request()

    this.setState({ list })
  }

  request = async options => {
    const res = await fetch(api, options)
    return res.json()
  }

  handleSubmit = async event => {
    event.preventDefault()

    const list = await this.request({
      method: "PUT",
      body: JSON.stringify({ text: this.state.text })
    })

    this.setState({
      list,
      text: ""
    })
  }

  handleClick = async id => {
    const list = await this.request({
      method: "DELETE",
      body: JSON.stringify({ id })
    })

    this.setState({
      list
    })
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            autoFocus
            type="text"
            value={this.state.text}
            placeholder="✨ New Todo"
            onChange={this.handleChange}
          />
        </form>
        <section>
          {this.state.list.map((item, id) => (
            <p key={id} onClick={e => this.handleClick(id)}>
              {item}
            </p>
          ))}
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
