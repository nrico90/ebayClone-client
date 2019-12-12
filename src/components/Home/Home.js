import React, { Component } from "react";
//import AdvListContainer from "../AdvList/AdvListContainer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="title">Ebay clone</h1>

        <main>
          <Link to="/advertisements">
            <button className="adv-page-button">
              <b>Buy a Vinyl</b>
            </button>
          </Link>{" "}
          {"   "}
        </main>
      </div>
    );
  }
}
