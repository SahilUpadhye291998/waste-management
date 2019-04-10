import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Test1 from "./component/Test1";
import Test2 from "./component/Test2";
import Test3 from "./component/Test3";
import Test4 from "./component/Test4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to={`/`}>Create Participant</Link>
              </li>
              <li>
                <Link to={`/Test2`}>Issue Identity</Link>
              </li>
              <li>
                <Link to={`/Test3`}>Import Identity</Link>
              </li>
              <li>
                <Link to={`/Test4`}>Test4</Link>
              </li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={Test1} />
            <Route path="/Test2" component={Test2} />
            <Route path="/Test3" component={Test3} />
            <Route path="/Test4" component={Test4} />
          </div>
        </BrowserRouter>
        <a href="http://localhost:3000/auth/github">Sign in with github</a>
      </div>
    );
  }
}

export default App;
