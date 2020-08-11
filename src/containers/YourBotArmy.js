import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...
  allArmyBots = (props) => {
    return this.props.armyBots.map((item) => {
      return (
        <BotCard
          bot={item}
          doBot={this.props.removeBot}
          deleteBot={this.props.deleteBot}
        />
      );
    });
  };
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.allArmyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
