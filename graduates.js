/**
 * HACKTIV8 Phase 0 - Logic Challenge - Graduates
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function graduates(students) {
    // Code disini

    if (students === [] || students.length === 0) {
        return {};
    }

    let result = {};
    result.foxes = [];
    result.wolves = [];
    result.tigers = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score > 75) {
            if (students[i].class === 'foxes') {
                result.foxes.push({
                    name: students[i].name,
                    score: students[i].score
                });
            }
            else if (students[i].class === 'wolves') {
                result.wolves.push({
                    name: students[i].name,
                    score: students[i].score
                });
            }
            if (students[i].class === 'tigers') {
                result.tigers.push({
                    name: students[i].name,
                    score: students[i].score
                });
            }
        }
    }

    if (result.foxes.length === 0) {
        delete result.foxes;
    }
    if (result.wolves.length === 0) {
        delete result.wolves;
    }
    if (result.tigers.length === 0) {
        delete result.tigers;
    }

    return result;
}

console.log(graduates([{
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}