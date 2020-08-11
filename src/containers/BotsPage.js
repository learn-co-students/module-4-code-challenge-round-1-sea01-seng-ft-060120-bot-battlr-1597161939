import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  render(props) {
    return <div>
      {<YourBotArmy botArmy={this.props.botArmy} removeBot={this.props.removeBot} dischargeBot={this.props.dischargeBot}/>}
      {<BotCollection bots={this.props.bots} addBot={this.props.addBot}  removeBot={this.props.removeBot} dischargeBot={this.props.dischargeBot}/>}      
      </div>;
  }
}

export default BotsPage;
