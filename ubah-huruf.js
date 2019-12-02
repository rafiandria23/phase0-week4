/**
 * HACKTIV8 Phase 0 - Logic Challenge - Ubah Huruf
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function ubahHuruf(kata) {
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alphabetString.length; j++) {
            if (kata[i] === alphabetString[j]) {
                result += alphabetString[j + 1];
            }
        }
    }

    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu