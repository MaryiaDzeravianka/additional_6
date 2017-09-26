module.exports = function zeros(expression) {
  // your solution
  let arr = expression.split('*');
  let result = [0, 0];
  arr.map(function(item) {
    let i = parseInt(item);
    while (i > 1) {
      result[0] += multipliers(i, 2);
      result[1] += multipliers(i, 5);
      if (item.endsWith("!!")) {
        i = i - 2;
      } else {
        i--;
      }
    }
  });
  return Math.min(result[0], result[1]);
}

function multipliers(value, number) {
  let count = 0;
  while (value % number == 0) {
    count++;
    value = value / number;
  }
  return count;
}
