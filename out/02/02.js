"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateActualOutcome = exports.calculateGameScore = exports.formatOutcomeGameData = exports.formatGameData = void 0;
// const strategyGuide: string = fs.readFileSync('../../assets/02/strategyGuide.txt', 'utf-8');
var SelfChoices;
(function (SelfChoices) {
    SelfChoices["ROCK"] = "X";
    SelfChoices["PAPER"] = "Y";
    SelfChoices["SCISSORS"] = "Z";
})(SelfChoices || (SelfChoices = {}));
var ElfChoices;
(function (ElfChoices) {
    ElfChoices["ROCK"] = "A";
    ElfChoices["PAPER"] = "B";
    ElfChoices["SCISSORS"] = "C";
})(ElfChoices || (ElfChoices = {}));
var Outcome;
(function (Outcome) {
    Outcome["LOSE"] = "X";
    Outcome["DRAW"] = "Y";
    Outcome["WIN"] = "Z";
})(Outcome || (Outcome = {}));
var Win;
(function (Win) {
    Win["C"] = "X";
    Win["A"] = "Y";
    Win["B"] = "Z";
})(Win || (Win = {}));
var Lose;
(function (Lose) {
    Lose["B"] = "X";
    Lose["C"] = "Y";
    Lose["A"] = "Z";
})(Lose || (Lose = {}));
;
var ElfSelfTranslation;
(function (ElfSelfTranslation) {
    ElfSelfTranslation["A"] = "X";
    ElfSelfTranslation["B"] = "Y";
    ElfSelfTranslation["C"] = "Z";
})(ElfSelfTranslation || (ElfSelfTranslation = {}));
function formatGameData(file) {
    const strategyGuideArray = file.toString().split("\n");
    return strategyGuideArray.map((e) => e.replace(' ', ''));
}
exports.formatGameData = formatGameData;
function formatOutcomeGameData(file) {
    const strategyGuideArray = file.toString().split("\n");
    return strategyGuideArray.map((round) => round.split(' '));
}
exports.formatOutcomeGameData = formatOutcomeGameData;
function calculateGameScore(rounds) {
    let score = 0;
    rounds.forEach((game) => {
        switch (game) {
            case ElfChoices.ROCK + SelfChoices.ROCK:
                score += (1 + 3);
                break;
            case ElfChoices.PAPER + SelfChoices.PAPER:
                score += (2 + 3);
                break;
            case ElfChoices.SCISSORS + SelfChoices.SCISSORS:
                score += (3 + 3);
                break;
            case ElfChoices.ROCK + SelfChoices.PAPER:
                score += (2 + 6);
                break;
            case ElfChoices.PAPER + SelfChoices.SCISSORS:
                score += (3 + 6);
                break;
            case ElfChoices.SCISSORS + SelfChoices.ROCK:
                score += (1 + 6);
                break;
            case ElfChoices.PAPER + SelfChoices.ROCK:
                score += 1;
                break;
            case ElfChoices.SCISSORS + SelfChoices.PAPER:
                score += 2;
                break;
            case ElfChoices.ROCK + SelfChoices.SCISSORS:
                score += 3;
                break;
        }
    });
    return score;
}
exports.calculateGameScore = calculateGameScore;
function calculateActualOutcome(rounds) {
    let score = 0;
    rounds.forEach((round) => {
        const [elfChoice, outcome] = round;
        switch (outcome) {
            case Outcome.DRAW:
                score += calculateGameScore([`${elfChoice + ElfSelfTranslation[elfChoice]}`]);
                break;
            case Outcome.LOSE:
                score += calculateGameScore([`${elfChoice + Lose[elfChoice]}`]);
                break;
            case Outcome.WIN:
                score += calculateGameScore([`${elfChoice + Win[elfChoice]}`]);
                break;
        }
    });
    return score;
}
exports.calculateActualOutcome = calculateActualOutcome;
//# sourceMappingURL=02.js.map