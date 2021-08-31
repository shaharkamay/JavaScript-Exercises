const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
solutionA = (-b + Math.sqrt(b**2 - (4 * a * c))) / (a * 2);
solutionB = (-b - Math.sqrt(b**2 - (4 * a * c))) / (a * 2);
console.log(solutionA, solutionB)