import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="friends-list">
        <div>A list of mah buds</div>
        {this.props.friends.map(friendObject => (
          <div key={friendObject.id}>{friendObject.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getData }
)(FriendsList);
