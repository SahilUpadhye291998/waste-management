import React, { Component } from "react";
import "../App.css";
import axois from "axios";
import {HttpHeaders,HttpClient} from "http";


class Test2 extends Component {

  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }



  handleEvent() {
    const identity = {
      participant: "org.example.mynetwork.Customer#string",
      userID: "string",
      options: {}
    };

    axois
      .post(
        "http://localhost:3001/api/system/identities/issue",
        {
          participant: "org.example.mynetwork.Customer#test1",
          userID: "test1",
          options: {}
        },
        { responseType: "blob" }
      )
      .then(cardName => {
          console.log(cardName);
          
        const file = new File([cardName], "myCard.card", {
          type: "application/octet-stream",
          lastModified: Date.now()
        });

        const formData = new FormData();
        formData.append("card", file);

        return axois.post("http://localhost:3000/api/wallet/import", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        });

        // const file = new File([cardName], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});

        // const formData = new FormData();
        // formData.append('card', file);

        // // let httpClient = new HttpClient();
        // const headers = new HttpHeaders();
        // headers.set('Content-Type', 'multipart/form-data');
        // return axois.post('http://localhost:3000/api/wallet/import', formData, {
        //   withCredentials: true,
        //   headers
        // });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Test 2</h1>
        <button onClick={this.handleEvent}>Issue Identity</button>
      </div>
    );
  }
}

export default Test2;
