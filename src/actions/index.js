export function selectTeam(team) {
  return {
    type: 'TEAM_SELECTED',
    payload: team
  };
}
