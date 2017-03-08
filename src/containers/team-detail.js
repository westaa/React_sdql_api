import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamDetail extends Component {
  render() {
    if (!this.props.team) {
      return <div>Select a team to get started </div>;
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>{this.props.team.name}</div>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    team: state.activeTeam
  };
}

export default connect(mapStateToProps)(TeamDetail);
