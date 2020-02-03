export const customKeys = ['TeamRecord', 'User', 'League', 'Prediction', 'Game']

export const getIdForType = (type: String) => {
  switch (type) {
    case 'WeeklySchedule':
      return 'gameKey'
    case 'TeamRecord':
      return 'team'
    case 'User':
    case 'League':
      return 'uuid'
    case 'Prediction':
      return 'gameKey'
    case 'Game':
      return 'gameKey'
    case 'UserScore':
      return 'user'
    case 'Week':
      return 'week'
    default:
      return ''
  }
}
