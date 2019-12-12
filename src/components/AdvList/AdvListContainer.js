import React, { Component } from "react";
import { loadAdvertisements } from "../../actions/advertisements";
import { connect } from "react-redux";
import AdvList from "./AdvList";

class AdvListContainer extends Component {
  componentDidMount() {
    console.log("componentdidmount");
    this.props.loadAdvertisements();
  }

  render() {
    return <AdvList advertisements={this.props.advertisements} />;
  }
}

const mapStateToProps = state => ({
  advertisements: state.advertisements
});

export default connect(mapStateToProps, { loadAdvertisements })(
  AdvListContainer
);
