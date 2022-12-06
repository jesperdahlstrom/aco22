import * as fs from 'fs';
const strategyGuide: string = fs.readFileSync('../../assets/02/strategyGuide.txt', 'utf-8');
let score: number = 0;
let outcomeScore: number = 0;

enum SelfChoices {
    ROCK = 'X',
    PAPER = 'Y',
    SCISSORS = 'Z'
}

enum ElfChoices {
    ROCK = 'A',
    PAPER = 'B',
    SCISSORS = 'C'
}

enum Outcome {
    LOSE = 'X',
    DRAW = 'Y',
    WIN = 'Z'
}

enum Win {
    C = 'X',
    A = 'Y',
    B = 'Z'
}

enum Lose {
    B = 'X',
    C = 'Y',
    A = 'Z'
};

enum ElfSelfTranslation {
    A = 'X',
    B = 'Y',
    C = 'Z'
}

export function getKeyByValue(choices: any, value: string) {
    const indexOf = Object.values(choices).indexOf(value);
    return Object.keys(choices)[indexOf];
  }

export function formatGameData(file: string){
    const strategyGuideArray: string[] = file.toString().split("\n");
    return strategyGuideArray.map((e) => e.replace(' ', ''))
}

export function formatOutcomeGameData(file: string){
    const strategyGuideArray: string[] = file.toString().split("\n");
    return strategyGuideArray.map((round) => round.split(' '))
}

export function calculateGameScore(rounds: string[]){

    rounds.forEach((game: string) => {
        
        switch(game){
            case ElfChoices.ROCK + SelfChoices.ROCK:
                score += (1 + 3)
                break;
            case ElfChoices.PAPER + SelfChoices.PAPER:
                score += (2 + 3)
                break;
            case ElfChoices.SCISSORS + SelfChoices.SCISSORS:
                score += (3 + 3)
                break;
            case ElfChoices.ROCK + SelfChoices.PAPER:
                score += (2 + 6)
                break;
            case ElfChoices.PAPER + SelfChoices.SCISSORS:
                score += (3 + 6)
                break;
            case ElfChoices.SCISSORS + SelfChoices.ROCK:
                score += (1 + 6)
                break;
            case ElfChoices.PAPER + SelfChoices.ROCK:
                score += 1
                break;
            case ElfChoices.SCISSORS + SelfChoices.PAPER:
                score += 2
                break;
            case ElfChoices.ROCK + SelfChoices.SCISSORS:
                score += 3
                break;
        }
    });
    return score
}

export function calculateActualOutcome(rounds: string[][]){
    rounds.forEach((round) => {
        const [ elfChoice, outcome] = round;
        switch(outcome){
            case Outcome.DRAW:
                calculateGameScore([`${elfChoice + ElfSelfTranslation[elfChoice as keyof typeof ElfSelfTranslation]}`])
                break;
            case Outcome.LOSE:
                calculateGameScore([`${elfChoice + Lose[elfChoice as keyof typeof Lose]}`])
                break;
            case Outcome.WIN:
                calculateGameScore([`${elfChoice + Win[elfChoice as keyof typeof Win]}`])
                break;
        }
    })
    return score
}

console.log(calculateGameScore(formatGameData(strategyGuide)));