import { calculateGameScore, formatGameData, formatOutcomeGameData, calculateActualOutcome } from '../src/02/02'
import * as fs from 'fs';
const strategyGuide: string = fs.readFileSync('tests/testcases/02.txt', 'utf-8');

test('formatGameData - should return an array of 2500 length', () => {
    expect(formatGameData(strategyGuide)).toHaveLength(2500);
})

test('calculateGameScore - should return 11906', () => {
    const formatedGameData = formatGameData(strategyGuide);
    expect(calculateGameScore(formatedGameData)).toEqual(11906);
})

test('formatOutcomeGameData - should return an array of 2500 length', () => {
    expect(formatOutcomeGameData(strategyGuide)).toHaveLength(2500);
})

test('calculateActualOutcome - should return 11186', () => {
    const formattedGameData = formatOutcomeGameData(strategyGuide);
    expect(calculateActualOutcome(formattedGameData)).toEqual(11186)
})

