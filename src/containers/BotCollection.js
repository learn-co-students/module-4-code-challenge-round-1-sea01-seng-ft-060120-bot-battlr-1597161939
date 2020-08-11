import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  allBots = (props) => {
    return this.props.bots.map((item) => {
      return (
        <BotCard
          bot={item}
          // doBot={this.props.addBot}
          deleteBot={this.props.deleteBot}
          doBot={this.props.showOneBot}
        />
      );
    });
  };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.allBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
