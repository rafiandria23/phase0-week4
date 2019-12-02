/**
 * HACKTIV8 Phase 0 - Logic Challenge - Digit Perkalian Minimum
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function digitPerkalianMinimum(angka) {
    let result = [];
    let temp = [];
    let temp2 = [];

    for (let i = 1; i < angka; i++) {
        for (let j = i + 1; j < angka; j++) {
            if (i * j === angka) {
                temp.push(i);
                temp2.push(j);
            }
        }
    }

    return `${temp} ${temp2}`;
    
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2