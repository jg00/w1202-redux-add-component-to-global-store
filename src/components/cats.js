import React, { Component } from "react";
import { connect } from "react-redux";
import Cat from "./cat";

class Cats extends Component {
  render() {
    console.log(this.props.cats);

    return (
      <div>
        <div>{this.props.cats}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};

export default connect(mapStateToProps)(Cats);
