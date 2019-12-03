/**
 * HACKTIV8 Phase 0 - Logic Challenge - Mengurutkan Abjad
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function urutkanAbjad(str) {
    let temp = [];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        temp.push(str[i]);
    }

    temp.sort();

    for (let j = 0; j < temp.length; j++) {
        result += temp[j];
    }

    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'