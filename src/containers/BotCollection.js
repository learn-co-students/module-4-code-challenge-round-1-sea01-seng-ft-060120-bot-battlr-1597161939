import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  buildBots = () => {
    return this.props.bots.map(bot => {
     return <BotCard bot={bot} key={bot.id} addBot={this.props.addBot}/>
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/
          this.buildBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
