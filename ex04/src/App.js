import React, { Component } from "react"
import Table from "./Table"

class App extends Component {
  state = {
    characters: [
      {
        firstName: "Lary",
        lastName: "Page",
      },
      {
        firstName: "Ada",
        lastName: "Lovelace",
      },
      {
        firstName: "Alan",
        lastName: "Turing",
      }
    ]
  }

  removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((cheracter, i) => {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App
