import * as fs from 'fs';
// const rucksackUnordered: string = fs.readFileSync('../../assets/03/rucksack.txt', 'utf-8');

    enum Priorities{
        a = 1,
        b = 2,
        c = 3,
        d = 4,
        e = 5,
        f = 6,
        g = 7,
        h = 8,
        i = 9,
        j = 10,
        k = 11,
        l = 12,
        m = 13,
        n = 14,
        o = 15,
        p = 16,
        q = 17,
        r = 18,
        s = 19,
        t = 20,
        u = 21,
        v = 22,
        w = 23,
        x = 24,
        y = 25,
        z = 26,
        A = 27,
        B = 28,
        C = 29,
        D = 30,
        E = 31,
        F = 32,
        G = 33,
        H = 34,
        I = 35,
        J = 36,
        K = 37,
        L = 38,
        M = 39,
        N = 40,
        O = 41,
        P = 42,
        Q = 43,
        R = 44,
        S = 45,
        T = 46,
        U = 47,
        V = 48,
        W = 49,
        X = 50,
        Y = 51,
        Z = 52
    };

export function splitRucksack(rucksackUnordered: string){
    const rucksackArray: string[] = rucksackUnordered.toString().split("\n");
    
    return rucksackArray.map((rucksack) => [
        rucksack.slice(0, rucksack.length / 2),
        rucksack.slice(rucksack.length / 2, rucksack.length)
    ])
}

export function inventoryRucksack(rucksack: string[][]){
    const sortedItems = new Map<string, number>();
    
    rucksack.forEach((rucksack) => {
        const [firstCompartment, secondCompartment] = rucksack;
            for(let i = 0; i < firstCompartment.length; i++){
                if(secondCompartment.includes(firstCompartment[i])){
                    sortedItems.set(firstCompartment.charAt(i), sortedItems.get(firstCompartment.charAt(i))! +1 || 1)
                    break;
                }
            }
     });

    return sortedItems;
}

export function calculatePriorities(sortedItem: Map<string, number>){
    let prioritizedSum: number = 0;
    for (const [key, value] of sortedItem) prioritizedSum += Priorities[key as keyof typeof Priorities] * value
    return prioritizedSum;
}

export function calculateBadgeSum(rucksackArray: string[]){
    let joinedRucksacks: string[][] = [];
    let tokenSum: number  = 0;
    
    while(rucksackArray.length) joinedRucksacks.push(rucksackArray.splice(0,3));

    joinedRucksacks.forEach((rucksacks) => {
        const firstRucksackArray = rucksacks[0].split('')         
        for(let i = 0; i < firstRucksackArray.length; i++){
            if(rucksacks[1].includes(firstRucksackArray[i]) && rucksacks[2].includes(firstRucksackArray[i])){
                tokenSum += Priorities[firstRucksackArray[i] as keyof typeof Priorities]
                break;
            }
        }
    });    
    
    return tokenSum
}


