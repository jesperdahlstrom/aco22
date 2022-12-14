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
const fs = __importStar(require("fs"));
const rucksackUnordered = fs.readFileSync('tests/testcases/03.txt', 'utf-8');
const _03_1 = require("../src/03/03");
test('splitRucksack - return length of split rucksack ', () => {
    expect((0, _03_1.splitRucksack)(rucksackUnordered)).toHaveLength(300);
});
test('inventoryRucksack - return a map of length 36', () => {
    const rucksackInventory = (0, _03_1.inventoryRucksack)((0, _03_1.splitRucksack)(rucksackUnordered));
    expect(rucksackInventory.size).toEqual(36);
});
test('calculatePriorities - return sum och prioritized items', () => {
    const priorities = (0, _03_1.calculatePriorities)((0, _03_1.inventoryRucksack)((0, _03_1.splitRucksack)(rucksackUnordered)));
    expect(priorities).toEqual(7766);
});
//# sourceMappingURL=03.test.js.map