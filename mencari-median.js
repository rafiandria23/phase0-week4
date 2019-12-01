/**
 * HACKTIV8 Phase 0 - Logic Challenge - Mencari Median
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function cariMedian(arr) {
    let result = [];
    let arrLeftHalf = arr.slice(0, arr.length / 2);
    let arrRightHalf = arr.slice(arr.length / 2);

    if (arr.length % 2 === 0) {
        let median = (arrLeftHalf[arrLeftHalf.length - 1] + arrRightHalf[0]) / 2;
        result.push(median);
    } else if (arr.length % 2 !== 0) {
        let median = arr[arrLeftHalf.length];
        result.push(median);
    }

    return Number(result);
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5