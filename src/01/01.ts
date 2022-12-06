import * as fs from 'fs';

// const file: string = fs.readFileSync('../../assets/01/input.txt', 'utf-8');

export function getSumArray(input: string): number[]{

    const inputAsArray = input.toString().split("\n");
    let sumArray: number[] = [];
    let count: number = 0;
    
    for(let i = 0; i < inputAsArray.length; i++){
        if(inputAsArray[i] === '') count++;
        sumArray[count] = (parseInt(inputAsArray[i]) + sumArray[count] || 0);
    }
    return sumArray;
}

export function getHighetsCalorieCount(input: string): number{
    return Math.max(...getSumArray(input));
}

export function getTopThreeSum(input: string): number{
    const sortedByDescCalories: number[] = getSumArray(input).sort((a, b) => b - a)
    return (sortedByDescCalories[0] + sortedByDescCalories[1] + sortedByDescCalories[2]);
}


// console.log(getHighetsCalorieCount(file));
// console.log(getTopThreeSum(file));