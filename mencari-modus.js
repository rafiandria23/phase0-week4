/**
 * HACKTIV8 Phase 0 - Logic Challenge - Mencari Modus
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function cariModus(arr) {
    let modeStack = [];
    let result = [];


    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                modeStack.push(arr[i]);
            }
        }
    }

    if (modeStack.length === 0) {
        return -1;
    }

    result.push(modeStack[0]);

    for (let k = 0; k < modeStack.length; k++) {
        if ((modeStack[k] === modeStack[k+1]) && (modeStack.length === arr.length * 2)) {
            return -1;
        }
    }

    return Number(result);
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1