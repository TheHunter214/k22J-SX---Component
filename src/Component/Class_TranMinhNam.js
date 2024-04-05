import React, { Component } from "react";

class Class_TranMinhNam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Tran Minh Nam",
      class: "K22CNT3"
    };
  }

  users = {
    name: "Tran Minh Nam",
    age: "20"
  };

  handleChange = () => {
    this.setState({
      fullname: "chach"
    });
  };

  render() {
    return (
      <div>
        <h1>This is class component</h1>
        {this.users.name} - {this.users.age}
        <h2>Hello {this.props.username}! Welcome to {this.props.name}</h2>
        <hr />
        <h3>Info: {this.props.info}</h3>
        <h3>Time: {this.props.time}</h3>
        <hr />
        <h3>State:</h3>
        <p>Fullname: {this.state.fullname}</p>
        <p>Class: {this.state.class}</p>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    );
  }
}

export default Class_TranMinhNam;