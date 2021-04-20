import React, { Component }from "react";
import Header from './Header';
import TicketControl from "./TicketControl";
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0,
      hot: "red",
      cold: "blue",
      nothing: "black"
    }
  }

  incrementClick = () => {
    this.setState(whatever => ({
      number: whatever.number + 1
    }));
  }

  decrementClick = () => {
    this.setState(whatever => ({
      number: whatever.number -1
    }));
  }

  resetClick = () => {
    this.setState(whatever => ({
      number: 0
    }));
  }

  render() {
    let color = "";
    if (this.state.number > 0) {
      color = this.state.hot
    } else if (this.state.number < 0) {
      color = this.state.cold
    } else {
      color = this.state.nothing
    }
    return (
      <>
        {console.log(color)}
        <h1 className={color}>{this.state.number}</h1>
        <button type="button" onClick={this.incrementClick}>increment</button>
        <button type="button" onClick={this.decrementClick}>decrement</button>
        <button type="button" onClick={this.resetClick}>reset</button>
        <Header />
        <TicketControl />
      </>
    )
  }
}

// export default App;
