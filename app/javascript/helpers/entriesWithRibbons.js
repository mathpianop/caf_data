
export default function entriesWithRibbons(entries, numOfJudges) {

    const determineMaxScoresPerCatagory = function(entry) {
        if (entry.category.name === "art" || entry.category.name === "photography") {
            return (numOfJudges === 3 ? [35, 42, 48] : [23, 28, 32])
        } else if (entry.category.name === "poetry" || entry.category.name === "writing") {
            return (numOfJudges === 3 ? [44, 53, 60] : [29, 34, 40])
        }
    }

    const determineRibbon = function(entry) {
        const maxScorePerCategory = determineMaxScoresPerCatagory(entry);
        if (entry.score <= maxScorePerCategory[0]) {
            return "bronze";
        } else if (entry.score <= maxScorePerCategory[1]) {
            return "silver";
        } else if (entry.score <= maxScorePerCategory[2]) {
            return "gold";
        }
    }
    

    const entriesCopy = [...entries];
    
    entriesCopy.forEach(entry => entry.ribbon = determineRibbon(entry));

    return entriesCopy
}