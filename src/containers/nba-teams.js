import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam } from '../actions/index';
import { bindActionCreators } from 'redux';

class NBATeams extends Component {

  renderTeams() {
    return this.props.teams.map((team) =>{
      return (
        <li
        key = {team.name}
        onClick={() => this.props.selectTeam(team)}
        className = "list-group-item">
        {team.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderTeams()}
      </ul>
    )
  };

}

function mapStateToProps(state) {
  return {
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectTeam: selectTeam }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(NBATeams);

//connect is a redux method that takes a function and a component and produces a container - which is a component that is aware of state contained by redux
