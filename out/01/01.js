"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopThreeSum = exports.getHighetsCalorieCount = exports.getSumArray = void 0;
// const file: string = fs.readFileSync('../../assets/01/input.txt', 'utf-8');
function getSumArray(input) {
    const inputAsArray = input.toString().split("\n");
    let sumArray = [];
    let count = 0;
    for (let i = 0; i < inputAsArray.length; i++) {
        if (inputAsArray[i] === '')
            count++;
        sumArray[count] = (parseInt(inputAsArray[i]) + sumArray[count] || 0);
    }
    return sumArray;
}
exports.getSumArray = getSumArray;
function getHighetsCalorieCount(input) {
    return Math.max(...getSumArray(input));
}
exports.getHighetsCalorieCount = getHighetsCalorieCount;
function getTopThreeSum(input) {
    const sortedByDescCalories = getSumArray(input).sort((a, b) => b - a);
    return (sortedByDescCalories[0] + sortedByDescCalories[1] + sortedByDescCalories[2]);
}
exports.getTopThreeSum = getTopThreeSum;
// console.log(getHighetsCalorieCount(file));
// console.log(getTopThreeSum(file));
//# sourceMappingURL=01.js.map