import React, { Component } from "react";

export default class SelfMadeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };


  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // alert(`${this.state.username}`)
    event.preventDefault();
    console.log(`username = ${this.state.username}  password =${this.state.password}`);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />

          <label>password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          {/* <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          /> */}
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}
