// 补0
export function add0(n) {
  return n < 10 ? '0' + n : n
}

// 毫秒转分钟
export function msToMin(ms) {
  let s = parseInt(ms / 1000)
  return `${add0(parseInt(s / 60))}:${add0(s % 60)}`
}