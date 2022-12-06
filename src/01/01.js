"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopThreeSum = exports.getHighetsCalorieCount = exports.getSumArray = void 0;
const fs = __importStar(require("fs"));
const file = fs.readFileSync('assets/01/input.txt', 'utf-8');
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
