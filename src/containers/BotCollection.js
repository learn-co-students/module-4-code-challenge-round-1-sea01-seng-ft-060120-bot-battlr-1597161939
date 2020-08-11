import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {

  render() {
    let allBots = () => {
      return this.props.bots.map(bot => {
        return <BotCard bot={bot} key={bot.id} addOrRemove={this.props.addOrRemove} delete={this.props.delete}/>
      })
    }
    return (
      <div className="ui four column grid">
        <div className="row">
          {allBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;

// when I called allBots YourBotArmy section went to the bottom