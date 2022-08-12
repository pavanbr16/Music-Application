import React, { Component } from "react";

export default class LoginForm extends Component {
  validUsers = [
    {
      username: "pavan",
      gmail:"pavanharish16@gmail.com",
      password: "power",
    },
    {
      username: "admin",
      gmail:"admin123@gmail.com",
      password: "admin123",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      gmail: "",
      password: "",
      autheticated: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validUsers.forEach((user) => {
      if (
        user.username === this.state.username && 
        user.gmail === this.state.gmail &&
        user.password === this.state.password
      ) {
        this.setState({
          autheticated: true,
        });
      }
    });
  };
  render() {
    return (
      <div className="loginForm">
        {this.state.autheticated ? (
          <div className="dashboard">
            <h3>Welcome {this.state.username}</h3>
            <button onClick={() => this.setState({ autheticated: false })}>
              Logout
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <input
              type="text"
              name="gmail"
              id="gmail"
              placeholder="Enter your mail id"
              onChange={(e) => this.setState({ gmail: e.target.value })}
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        )}
      </div>
    );
  }
}
