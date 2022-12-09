import * as fs from 'fs';
const rucksackUnordered: string = fs.readFileSync('tests/testcases/03.txt', 'utf-8');
import { calculateBadgeSum, calculatePriorities, inventoryRucksack, splitRucksack } from '../src/03/03'


test('splitRucksack - return length of split rucksack ', () => {
    expect(splitRucksack(rucksackUnordered)).toHaveLength(300)
})

test('inventoryRucksack - return a map of length 36', () => {
    const rucksackInventory = inventoryRucksack(splitRucksack(rucksackUnordered))
    expect(rucksackInventory.size).toEqual(36)
})

test('calculatePriorities - return sum och prioritized items', () => {
    const priorities = calculatePriorities(inventoryRucksack(splitRucksack(rucksackUnordered)));

    expect(priorities).toEqual(7766)

    
})
