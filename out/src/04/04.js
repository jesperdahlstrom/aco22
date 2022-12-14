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
exports.calculateOverlappingSections = exports.convertToCleaningArray = void 0;
const fs = __importStar(require("fs"));
const input = fs.readFileSync('../../../assets/04/04.txt', 'utf-8');
function convertToCleaningArray(input) {
    const sectionArray = input.toString().split("\n");
    return sectionArray.map(pair => pair.split(","));
}
exports.convertToCleaningArray = convertToCleaningArray;
function calculateOverlappingSections(cleaningArray) {
    let count = 0;
    cleaningArray.forEach((pair) => {
        const firstPair = pair[0].split(',');
        const secondPair = pair[1].split(',');
        let firstPairSplit = firstPair[0].split('-');
        let secondPairSplit = secondPair[0].split('-');
        const firstPairF = parseInt(firstPairSplit[0]);
        const firstPairS = parseInt(firstPairSplit[1]);
        const secondPairF = parseInt(secondPairSplit[0]);
        const secondPairS = parseInt(secondPairSplit[1]);
        if (firstPairF >= secondPairF && firstPairF <= secondPairS && firstPairS <= secondPairS && firstPairS >= secondPairF) {
            count++;
            return;
        }
        if (secondPairF >= firstPairF && secondPairS <= firstPairS && secondPairS <= firstPairS && secondPairS >= firstPairF) {
            count++;
        }
    });
    console.log(count);
}
exports.calculateOverlappingSections = calculateOverlappingSections;
calculateOverlappingSections(convertToCleaningArray(input));
//# sourceMappingURL=04.js.map