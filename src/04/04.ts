import * as fs from 'fs';
const input: string = fs.readFileSync('../../../assets/04/04.txt', 'utf-8');


export function convertToCleaningArray(input: string): string[][]{
    const sectionArray: string[] = input.toString().split("\n");
    return sectionArray.map(pair => pair.split(","));
}


export function calculateOverlappingSections(cleaningArray: string[][]){

    let count: number = 0;

    
    
    cleaningArray.forEach((pair) => {
        
        const firstPair = pair[0].split(',');
        const secondPair = pair[1].split(',');
        
        let firstPairSplit = firstPair[0].split('-')
        let secondPairSplit = secondPair[0].split('-')

        const firstPairF = parseInt(firstPairSplit[0]);
        const firstPairS = parseInt(firstPairSplit[1]);
        const secondPairF = parseInt(secondPairSplit[0]);
        const secondPairS = parseInt(secondPairSplit[1]);        

        if(firstPairF >= secondPairF && firstPairF <= secondPairS && firstPairS <= secondPairS && firstPairS >= secondPairF){
            count++;
            return
        }

        if(secondPairF >= firstPairF && secondPairS <= firstPairS && secondPairS <= firstPairS && secondPairS >= firstPairF){
            count++;
        }

  
        
    });



    console.log(count);
    


}




calculateOverlappingSections(convertToCleaningArray(input))



