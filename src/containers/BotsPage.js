import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import SortBar from "../components/SortBar";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    botsAll: [],
    armyBots: [],
    clicked: false,
    oneBot: [],
    checked: [false, false, false],
  };

  componentDidMount() {
    // fetch(`http://localhost:6001/bots`)
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ bots: data }));
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(`http://localhost:6001/bots`)
      .then((res) => res.json())
      .then((data) => this.setState({ bots: data, botsAll: data }));
  };

  //add bot to your bot army
  addBot = (bot) => {
    let botClass = this.state.armyBots.map((item) => item.bot_class);
    let newBots = this.state.bots.filter((item) => item.id !== bot.id);
    if (
      !this.state.armyBots.includes(bot) &&
      !botClass.includes(bot.bot_class)
    ) {
      this.setState({ armyBots: [...this.state.armyBots, bot], bots: newBots });
    }
  };

  //remove bot from your bot army
  removeBot = (bot) => {
    if (this.state.armyBots.includes(bot)) {
      let newArmyBots = this.state.armyBots.filter((item) => item !== bot);
      this.setState({ armyBots: newArmyBots });
    }
  };

  //delete bot from server
  deleteBot = (bot) => {
    this.removeBot(bot);
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => this.fetchBots());
  };

  showOneBot = (botItem) => {
    this.setState({ clicked: true, oneBot: botItem });
  };

  showAllBots = () => {
    this.setState({ clicked: false });
  };

  sortBots = (e) => {
    if (e.target.value == "Health") {
      let newBots = this.state.bots.sort((a, b) =>
        a.health < b.health ? -1 : 1
      );
      this.setState({ bots: newBots, checked: [true, false, false] });
    } else if (e.target.value == "Damage") {
      let newBots = this.state.bots.sort((a, b) =>
        a.damage < b.damage ? -1 : 1
      );
      this.setState({ bots: newBots, checked: [false, true, false] });
    } else if (e.target.value == "Armor") {
      let newBots = this.state.bots.sort((a, b) =>
        a.armor < b.armor ? -1 : 1
      );
      this.setState({ bots: newBots, checked: [false, false, true] });
    }
  };

  searchBots = (e) => {
    let newBots = this.state.botsAll.filter(
      (item) => item.bot_class === e.target.value
    );
    this.setState({ bots: newBots });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          armyBots={this.state.armyBots}
          removeBot={this.removeBot}
          deleteBot={this.deleteBot}
        />
        <SortBar
          sort={this.sortBots}
          search={this.searchBots}
          checked={this.state.checked}
        />
        {this.state.clicked ? (
          <BotSpecs
            bot={this.state.oneBot}
            showAllBots={this.showAllBots}
            addBot={this.addBot}
          />
        ) : (
          <BotCollection
            bots={this.state.bots}
            // addBot={this.addBot}
            deleteBot={this.deleteBot}
            showOneBot={this.showOneBot}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
