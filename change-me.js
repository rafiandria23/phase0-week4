/**
 * HACKTIV8 Phase 0 - Logic Challenge - Change Me!
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





function changeMe(arr) {
    function getAge(num) {
        if (num === undefined) {
            return 'Invalid Birth Year';
        }

        return 2019 - num;
    }


    for (let i = 0; i < arr.length; i++) {
        let result = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: getAge(arr[i][3])
        };

        console.log(result);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""