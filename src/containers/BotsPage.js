import React, { Component } from "react";
import BotCollection from './BotCollection'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    allBots: [],
    bots:[],
    botArmy:[]
  }
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(json => this.setState({allBots: json, bots:json}))
  }

  addBot = (bot) => {
    
    if(!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: [
          ...this.state.botArmy, bot
        ]
      })
    }
  }

  render() {
    // console.log(this.state)
    return (
    <div>
      <BotCollection bots={this.state.bots} addBot={this.addBot}/>
      {/* {} */}
    </div>
    );
  }
}

export default BotsPage;
