// class component vs functional component
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    //⚠️ You can place here the bindings for your `decrement` and `reset` functions
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // We have the ability to increment our counter, but what about descreasing or resetting its value?
  // 📝 You should create two separate functions `decrement()` and `reset()` and add the logic
  // to achieve the behavior for each function:
  //    - `decrement` function should substract 1 from the current counter
  //    - `reset` function should set the counter to `0`
  // 💰 decrement() { }
  // 💰 reset() { }

  render() {
    return (
      <div className="counter">
        {/*
          Instead of hardcode the `0` use the current count value from the state.
          💭 Remember that we defined our state inside the constructor, so its an object available
          in our component taht we can easly access by using `this.state.[name]`.
          ⚠️ Don't forget to wrap it inside curly braces { }
        */}
        <div className="counter-count">
          <img src="../../scouter.jpg" alt="" />
          <span>0</span>
        </div>
        <div className="counter-actions">
          <button onClick={this.increment}>Increment</button>
          {/*
            📝 Create two new buttons "Decrement" and "Reset" and bind into the `onClick` event of each one
            the function that would fit the needs.
          */}
        </div>
      </div>
    );
  }
}

export default Counter;
