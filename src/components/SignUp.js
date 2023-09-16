import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignUp = (e) => {
    e.preventDefault();

    const data = {
      _id: "000001", // Create function to automatically assign id
      Name: this.state.name,
      Email: this.state.email,
      Password: this.state.password
    };

    axios.post('http://localhost:8082/auth/register', data)
    .then((res) => {
      alert(res.data.title);
      this.props.history.push('/home');
    })
    .catch((err) => {
      alert(err);
      this.props.history.push('/home');
    });
  }

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.onSignUp}>
          <input
            type="text"
            placeholder="Enter name"
            name='name'
            value = {this.state.name}
            onChange = {this.onChange}
            required
          />         
          <input
            type="text"
            placeholder="Enter email"
            name='email'
            value = {this.state.email}
            onChange = {this.onChange}
            required
          />
          <input
            type="text"
            placeholder="Enter password"
            name='password'
            value = {this.state.password}
            onChange = {this.onChange}
            required
          />
          <input
            type="submit"
          />  
        </form>
      </div>
    )
  }
}

export default SignUp