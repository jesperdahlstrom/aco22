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
const _01_1 = require("../src/01/01");
const fs = __importStar(require("fs"));
const file = fs.readFileSync('tests/testcases/01.txt', 'utf-8');
test('getSumArray should return an array with specific values', () => {
    const values = [
        46224,
        52289,
        68154
    ];
    expect((0, _01_1.getSumArray)(file)).toEqual(values);
});
test('getHighetsCalorieCount should return an integer', () => {
    expect((0, _01_1.getHighetsCalorieCount)(file)).toBe(68154);
});
test('getTopThreeSum should return sum of the top values in the testcase file', () => {
    expect((0, _01_1.getTopThreeSum)(file)).toBe(166667);
});
//# sourceMappingURL=01.test.js.map