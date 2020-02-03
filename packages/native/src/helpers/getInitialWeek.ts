import moment from 'moment'

export const getCurrentWeek = () => {
  const initialWeek = moment(new Date('09/05/2019'))
  const weeks = [initialWeek]
  for (let i = 0; i < 17; i++) {
    weeks.push(weeks[i].clone().add(1, 'week'))
  }

  return weeks.findIndex((week) => week > moment())
}
