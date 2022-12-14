"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBadgeSum = exports.calculatePriorities = exports.inventoryRucksack = exports.splitRucksack = void 0;
// const rucksackUnordered: string = fs.readFileSync('../../assets/03/rucksack.txt', 'utf-8');
var Priorities;
(function (Priorities) {
    Priorities[Priorities["a"] = 1] = "a";
    Priorities[Priorities["b"] = 2] = "b";
    Priorities[Priorities["c"] = 3] = "c";
    Priorities[Priorities["d"] = 4] = "d";
    Priorities[Priorities["e"] = 5] = "e";
    Priorities[Priorities["f"] = 6] = "f";
    Priorities[Priorities["g"] = 7] = "g";
    Priorities[Priorities["h"] = 8] = "h";
    Priorities[Priorities["i"] = 9] = "i";
    Priorities[Priorities["j"] = 10] = "j";
    Priorities[Priorities["k"] = 11] = "k";
    Priorities[Priorities["l"] = 12] = "l";
    Priorities[Priorities["m"] = 13] = "m";
    Priorities[Priorities["n"] = 14] = "n";
    Priorities[Priorities["o"] = 15] = "o";
    Priorities[Priorities["p"] = 16] = "p";
    Priorities[Priorities["q"] = 17] = "q";
    Priorities[Priorities["r"] = 18] = "r";
    Priorities[Priorities["s"] = 19] = "s";
    Priorities[Priorities["t"] = 20] = "t";
    Priorities[Priorities["u"] = 21] = "u";
    Priorities[Priorities["v"] = 22] = "v";
    Priorities[Priorities["w"] = 23] = "w";
    Priorities[Priorities["x"] = 24] = "x";
    Priorities[Priorities["y"] = 25] = "y";
    Priorities[Priorities["z"] = 26] = "z";
    Priorities[Priorities["A"] = 27] = "A";
    Priorities[Priorities["B"] = 28] = "B";
    Priorities[Priorities["C"] = 29] = "C";
    Priorities[Priorities["D"] = 30] = "D";
    Priorities[Priorities["E"] = 31] = "E";
    Priorities[Priorities["F"] = 32] = "F";
    Priorities[Priorities["G"] = 33] = "G";
    Priorities[Priorities["H"] = 34] = "H";
    Priorities[Priorities["I"] = 35] = "I";
    Priorities[Priorities["J"] = 36] = "J";
    Priorities[Priorities["K"] = 37] = "K";
    Priorities[Priorities["L"] = 38] = "L";
    Priorities[Priorities["M"] = 39] = "M";
    Priorities[Priorities["N"] = 40] = "N";
    Priorities[Priorities["O"] = 41] = "O";
    Priorities[Priorities["P"] = 42] = "P";
    Priorities[Priorities["Q"] = 43] = "Q";
    Priorities[Priorities["R"] = 44] = "R";
    Priorities[Priorities["S"] = 45] = "S";
    Priorities[Priorities["T"] = 46] = "T";
    Priorities[Priorities["U"] = 47] = "U";
    Priorities[Priorities["V"] = 48] = "V";
    Priorities[Priorities["W"] = 49] = "W";
    Priorities[Priorities["X"] = 50] = "X";
    Priorities[Priorities["Y"] = 51] = "Y";
    Priorities[Priorities["Z"] = 52] = "Z";
})(Priorities || (Priorities = {}));
;
function splitRucksack(rucksackUnordered) {
    const rucksackArray = rucksackUnordered.toString().split("\n");
    return rucksackArray.map((rucksack) => [
        rucksack.slice(0, rucksack.length / 2),
        rucksack.slice(rucksack.length / 2, rucksack.length)
    ]);
}
exports.splitRucksack = splitRucksack;
function inventoryRucksack(rucksack) {
    const sortedItems = new Map();
    rucksack.forEach((rucksack) => {
        const [firstCompartment, secondCompartment] = rucksack;
        for (let i = 0; i < firstCompartment.length; i++) {
            if (secondCompartment.includes(firstCompartment[i])) {
                sortedItems.set(firstCompartment.charAt(i), sortedItems.get(firstCompartment.charAt(i)) + 1 || 1);
                break;
            }
        }
    });
    return sortedItems;
}
exports.inventoryRucksack = inventoryRucksack;
function calculatePriorities(sortedItem) {
    let prioritizedSum = 0;
    for (const [key, value] of sortedItem)
        prioritizedSum += Priorities[key] * value;
    return prioritizedSum;
}
exports.calculatePriorities = calculatePriorities;
function calculateBadgeSum(rucksackArray) {
    let joinedRucksacks = [];
    let tokenSum = 0;
    while (rucksackArray.length)
        joinedRucksacks.push(rucksackArray.splice(0, 3));
    joinedRucksacks.forEach((rucksacks) => {
        const firstRucksackArray = rucksacks[0].split('');
        for (let i = 0; i < firstRucksackArray.length; i++) {
            if (rucksacks[1].includes(firstRucksackArray[i]) && rucksacks[2].includes(firstRucksackArray[i])) {
                tokenSum += Priorities[firstRucksackArray[i]];
                break;
            }
        }
    });
    return tokenSum;
}
exports.calculateBadgeSum = calculateBadgeSum;
//# sourceMappingURL=03.js.map