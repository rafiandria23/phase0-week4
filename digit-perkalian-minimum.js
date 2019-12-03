/**
 * HACKTIV8 Phase 0 - Logic Challenge - Digit Perkalian Minimum
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function digitPerkalianMinimum(angka) {
    let result = [];
    let temp = [];
    
    
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            temp.push(`${i}${angka/i}`);
        }
    }

    temp.sort((a, b) => {return a.length - b.length});
    result.push(temp[0].length);

    return Number(result);
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2