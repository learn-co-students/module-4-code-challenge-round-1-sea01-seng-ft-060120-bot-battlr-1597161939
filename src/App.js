import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: [],
    botArmy: []
    // botCollection: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(json => this.setState({bots:json}))
  }

  addBot = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({botArmy: [...this.state.botArmy, bot]})
    }
  }

  removeBot = (bot) => {
    let newBotArmy = this.state.botArmy.filter(item => item !== bot)
    let newBotCollection = this.state.bots.filter(item => item !== bot)
    this.setState({botArmy:newBotArmy, bots:newBotCollection})
  }

  dischargeBot = (bot) => {      
    const asdf = {             
      method: 'DELETE',
      headers:{
        'accept': 'application/json',
        'content-type': 'application/json'
      }
    }

    fetch('http://localhost:6001/bots/' + bot.id, asdf)
    .then(res => res.json())
    .then(json => this.removeBot(bot))
    .catch(error => alert(error))
  }

  render() {
    return (
      <div className="App">        
        <BotsPage 
          bots={this.state.bots} 
          botArmy={this.state.botArmy} 
          addBot={this.addBot} 
          removeBot={this.removeBot}
          dischargeBot={this.dischargeBot}
          />
      </div>
    );
  }
}

export default App;
