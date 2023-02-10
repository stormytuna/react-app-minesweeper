export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function formatTime(time) {
  return `0${time}`.slice(-2);
}
