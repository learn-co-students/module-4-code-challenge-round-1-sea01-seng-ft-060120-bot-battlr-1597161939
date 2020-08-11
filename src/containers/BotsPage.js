import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount () {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(json => {
      this.setState({
        bots: json
      })
    })
  }

  addBot = (bot) => {
    if (!this.state.myBots.includes(bot)){
      this.setState({
        myBots: [...this.state.myBots, bot]
      })

    }
  }

  removeBot = (bot) => {
    let newMyBots = this.state.myBots.filter(b => b !== bot)
    this.setState({
      myBots: newMyBots
    })
  }

  deleteBot = (bot) => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      this.removeBot(bot)
      let newBots = this.state.bots.filter(b => b !== bot)
      this.setState({
        bots: newBots
      })
    })
  }
  
  render() {
    console.log(this.state.myBots)
    return (
    <div>
      {<BotCollection bots={this.state.bots} addOrRemove={this.addBot} delete={this.deleteBot}/>}
      {<YourBotArmy myBots={this.state.myBots} addOrRemove={this.removeBot} delete={this.deleteBot}/>} 
    </div>
    )
  }
}

export default BotsPage;
