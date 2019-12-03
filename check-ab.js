/**
 * HACKTIV8 Phase 0 - Logic Challenge - Check AB
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function checkAB(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            if (str[i+4] === 'b') {
                return true;
            } else {
                return false;
            }
        } else if (str[i] === 'b') {
            if (str[i + 4] === 'a') {
                return true;
            } else {
                return false;
            }
        }
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false