import React, { Component } from "react";
import { connect } from "react-redux";

class Cat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          key={this.props.id}
          src={require("./catpic.jpeg")}
          onClick={this.props.onIncrementCounter}
        />
      </div>
    );
  }
}

// map global state to local props
const mapStateToProps = state => {
  return {
    ctr: state.cats // this.props.ctr
  };
};

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = dispatch => {
  return {
    // this.props.onIncrementCounter
    onIncrementCounter: () =>
      dispatch({
        type: "ADDCAT",
        value: <Cat />
      })
  };
};

// export default Cat;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cat);
