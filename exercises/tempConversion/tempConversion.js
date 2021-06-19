const ftoc = function(temp) {
  raw = (temp-32)*(5/9)
  return Math.round(raw*10)/10;
}

const ctof = function(temp) {
  raw = (temp)*(9/5)+32
  return Math.round(raw*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
