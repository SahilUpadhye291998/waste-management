import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Test2 from "./Test2";
import {HttpClient,HttpHeaders} from 'http';

class Test4 extends Component {
  constructor(props) {
    super(props);
    //const httpClient = new HttpClient();
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    axios.post("http://localhost:3000/api/wallet/admin%40waste_v3/setDefault",{
      name:"admin@waste_v3"
    }).then((data)=>{
      console.log(data);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Test 4</h1>
        <button onClick={this.handleEvent}>Test Adding Participant</button>
      </div>
    );
  }
}

export default Test4;
