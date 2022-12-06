import { getSumArray, getHighetsCalorieCount, getTopThreeSum } from '../src/01/01'
import * as fs from 'fs';
const file: string = fs.readFileSync('tests/testcases/01.txt', 'utf-8');

describe('01', () => {


    test('getSumArray should return an array with specific values', () => {

        const values: number[] = [
            46224, 
            52289, 
            68154
        ];

        expect(getSumArray(file)).toEqual(values);
    })

    test('getHighetsCalorieCount should return an integer', () => {
        expect(getHighetsCalorieCount(file)).toBe(68154);
    })

    test('getTopThreeSum should return sum of the top values in the testcase file', () => {
        expect(getTopThreeSum(file)).toBe(166667);
    })


});



