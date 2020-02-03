const endpoints = {
  login: () => '/login',
  register: () => '/register',
  me: (userId: string) => `/users/${userId}`,
  league: (leagueId: string) => `/leagues/${leagueId}`,
  leagues: () => '/leagues',
  schedule: (season: string, week: string) => `/schedule/${season}/${week}`,
  standings: (season: string) => `/standings/${season}`,
  predictions: () => '/predictions',
  leaderboard: (leagueId: string) => `/leagues/${leagueId}/leaderboard`
}

export default endpoints
