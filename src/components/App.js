import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  numberPlus(number) {
    this.setState({ number: this.state.number + 1 });
  }

  numberMin(number) {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
      <center>
        <div>
          <h1>{"Hallo World"}</h1>
          <p>{"Ayo Belajar React Bersama!"}</p>
          <h1>{this.state.number}</h1>
          <br></br>
          <button
            onClick={() => {
              this.numberMin();
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.numberPlus();
            }}
          >
            +
          </button>
        </div>
      </center>
    );
  }
}

export default App;
