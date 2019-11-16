import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './SignIn.styles';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.login();
  }

  login () {
    const email = this.state.email
    const password = this.state.password
    const request = {"auth": {"email": email, "password": password}}
    console.log(request)
    fetch('/api/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ request
      })
    })
      .then(response=>console.log(response))
      .then(this.props.getFeed)
    // $.ajax({
    //   url: "http://localhost:3000/api/user_token",
    //   type: "POST",
    //   data: request,
    //   dataType: "json",
    //   success: function (result) {
    //     console.log(result)
    //     localStorage.setItem("jwt", result.jwt)
    //   }
    // })
  }


  render() {
    return (
        <form className="SignInWrapper form-inline" onSubmit={this.props.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-control mr-2"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control mr-2"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" onClick={this.handleClick}>
            Log In
          </button>
        </form>
    );
  }
}

SignInForm.propTypes = {
  // bla: PropTypes.string,
};

SignInForm.defaultProps = {
  // bla: 'test',
};

export default SignInForm;
