import React, { Component } from "react";
import "../App.css";
import axois from "axios";

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    const file = new File([""], "/client/Test.card", {
      type: "application/octet-stream",
      lastModified: Date.now()
    });

    // const httpClient = new HttpClient();

    const formData = new FormData();
    formData.append("card", file);

    // const headers = new HttpHeaders();
    return axois.post("http://localhost:3000/api/wallet/import", formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" }
    }).toPromise();
  }

  render() {
    return (
      <div className="App">
        <h1>Test 3</h1>
        <button onClick={this.handleEvent}>Issue Identity</button>
      </div>
    );
  }
}

export default Test2;
