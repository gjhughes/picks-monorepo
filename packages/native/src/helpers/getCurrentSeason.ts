export const getCurrentSeason = () => {
  const now = new Date()
  const currentMonth = now.getMonth()
  return currentMonth === 0 || currentMonth === 1
    ? now.getFullYear() - 1
    : now.getFullYear()
}
