export const generateAccessCode = () => {
  return Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 6);
}
