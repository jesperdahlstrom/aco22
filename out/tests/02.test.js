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
const _02_1 = require("../src/02/02");
const fs = __importStar(require("fs"));
const strategyGuide = fs.readFileSync('tests/testcases/02.txt', 'utf-8');
test('formatGameData - should return an array of 2500 length', () => {
    expect((0, _02_1.formatGameData)(strategyGuide)).toHaveLength(2500);
});
test('calculateGameScore - should return 11906', () => {
    const formatedGameData = (0, _02_1.formatGameData)(strategyGuide);
    expect((0, _02_1.calculateGameScore)(formatedGameData)).toEqual(11906);
});
test('formatOutcomeGameData - should return an array of 2500 length', () => {
    expect((0, _02_1.formatOutcomeGameData)(strategyGuide)).toHaveLength(2500);
});
test('calculateActualOutcome - should return 11186', () => {
    const formattedGameData = (0, _02_1.formatOutcomeGameData)(strategyGuide);
    expect((0, _02_1.calculateActualOutcome)(formattedGameData)).toEqual(11186);
});
//# sourceMappingURL=02.test.js.map