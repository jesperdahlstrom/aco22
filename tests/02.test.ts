import { calculateGameScore, formatGameData } from '../src/02/02'
import * as fs from 'fs';
const strategyGuide: string = fs.readFileSync('tests/testcases/02.txt', 'utf-8');



test('should return an array of 2500 length', () => {
    expect(formatGameData(strategyGuide)).toHaveLength(2500)
})

test('should return 11906', () => {
    const formatedGameData = formatGameData(strategyGuide);
    expect(calculateGameScore(formatedGameData)).toEqual(11906)
})

