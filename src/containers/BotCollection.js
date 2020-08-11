import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {

  buildBotCollection = () => {
    return this.props.bots.map(item => {
      return <BotCard key= {item.id} bot = {item} addOrRemoveBot={this.props.addBot} dischargeBot={this.props.dischargeBot}/>
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.buildBotCollection()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
