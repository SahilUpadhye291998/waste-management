import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import axios from "axios";

import Test2 from "./Test2";

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    axios.post("http://localhost:3001/api/org.example.mynetwork.Customer", {
      $class: "org.example.mynetwork.Customer",
      amount: 0,
      personID: "test1",
      personName: "test1",
      personEmail: "test1",
      personPasswd: "test1",
      personPhone: "test1",
      address: {
        $class: "org.example.mynetwork.Address",
        state: "test1",
        city: "test1",
        country: "test1",
        pincode: "test1"
      }
    }).then((responce)=>{
        console.log(responce);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Test 1</h1>
        <button onClick={this.handleEvent}>Test Adding Participant</button>
      </div>
    );
  }
}

export default Test1;
