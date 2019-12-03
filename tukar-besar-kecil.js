/**
 * HACKTIV8 Phase 0 - Logic Challenge - Tukar Besar Kecil
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function tukarBesarKecil(kalimat) {
    let temp = [];
    let result = '';

    for (let i = 0; i < kalimat.length; i++) {
        temp.push(kalimat[i]);
    }

    for (let j = 0; j < temp.length; j++) {
        if (temp[j] === temp[j].toUpperCase()) {
            result += temp[j].toLowerCase();
        } else if (temp[j] === temp[j].toLowerCase()) {
            result += temp[j].toUpperCase();
        }
    }

    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"