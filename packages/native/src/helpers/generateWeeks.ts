// todo: move these to new file
enum WeekType {
  PRE = 'PRE',
  REG = 'REG',
  POST = 'POST'
}

const playoffs = ['Wildcard', 'Divisional', 'Conference', 'Super Bowl']

const getRegularSeason = () => {
  return Array.from({length: 17}).map((_, index) => {
    return {
      weekName: `Week ${++index}`,
      stage: WeekType.REG,
      weekNumber: index,
      index
    }
  })
}

const getPlayoffs = () => {
  return playoffs.map((item, index) => {
    return {
      weekName: item,
      stage: WeekType.POST,
      weekNumber: ++index,
      index: index + 17
    }
  })
}

export const weeks = () => {
  return [...getRegularSeason(), ...getPlayoffs()]
}
