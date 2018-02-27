module.exports = function solveEquation(equation) {
  var array = equation.split(' ');
  var solution = [];
  var a = array[0];
  var b = parseInt( array[3]+array[4] );
  var c = parseInt( array[7]+array[8] );
  solution.push( Math.round((-b + Math.pow(Math.pow(b, 2) - 4 * a * c, 1/2)) / (2 * a) ) );
  solution.push( Math.round((-b - Math.pow(Math.pow(b, 2) - 4 * a * c, 1/2)) / (2 * a) ) );
  solution.sort(function(a, b) {
  return a - b;
  });
  return solution;
}
