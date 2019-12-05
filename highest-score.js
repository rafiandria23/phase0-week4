/**
 * HACKTIV8 Phase 0 - Logic Challenge - Highest Score
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function highestScore(students) {
    // Code disini
    if (students.length === 0) {
        return {};
    }

    let foxes = [];
    let wolves = [];
    let tigers = [];

    let result = {};

    for (let i = 0; i < students.length; i++) {
        if (students[i].class === 'foxes') {
            foxes.push(students[i]);
        } else if (students[i].class === 'wolves') {
            wolves.push(students[i]);
        } else if (students[i].class === 'tigers') {
            tigers.push(students[i]);
        }
    }

    if (foxes.length === 1) {
        result.foxes = {
            name: foxes[0].name,
            score: foxes[0].score
        };
    }

    for (let j = 0; j < foxes.length - 1; j++) {
        if (foxes[j].score > foxes[j+1].score) {
            result.foxes = {
                name: foxes[j].name,
                score: foxes[j].score
            };
        }
    }

    if (wolves.length === 1) {
        result.wolves = {
            name: wolves[0].name,
            score: wolves[0].score
        };
    }

    for (let k = 0; k < wolves.length - 1; k++) {
        if (wolves[k].score > wolves[k+1].score) {
            result.wolves = {
                name: wolves[k].name,
                score: wolves[k].score
            };
        }
    }

    if (tigers.length === 1) {
        result.tigers = {
            name: tigers[0].name,
            score: tigers[0].score
        };
    }

    for (let l = 0; l < tigers.length - 1; l++) {
        if ((tigers[l].score > tigers[l + 1].score)) {
            result.tigers = {
                name: tigers[l].name,
                score: tigers[l].score
            };
        }
    }

    return result;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}