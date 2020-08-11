import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    let allBots = () => {
      return this.props.myBots.map(bot => {
        return <BotCard bot={bot} key={bot.id} addOrRemove={this.props.addOrRemove} delete={this.props.delete}/>
      })
    }
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {allBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
