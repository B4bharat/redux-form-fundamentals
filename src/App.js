import React, { Component } from "react";
import SignInForm from "./components/SignInForm";
import "./styles.css";
import { reduxForm } from "redux-form";

let NewSignInForm = reduxForm({
  form: "signIn"
})(SignInForm);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">Contact Form</p>
          <NewSignInForm />
        </div>
      </div>
    );
  }
}

export default App;
