/**
 * HACKTIV8 Phase 0 - Logic Challenge - Naik Angkot
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    // User-defined funtion to get the fare of the trip
    const getFare = function (from, to) {
        let totalFare = 0;
        for (let j = 0; j < rute.length; j++) {
            if (from === rute[j]) {
                var startPoint = j;
            }
        }
        
        for (let i = startPoint; i < rute.length; i++) {
            if (to === rute[i]) {
                let deviation = i - startPoint;
                totalFare += (2000 * deviation);
            }
        }
        return totalFare;
    }

    // Main variable
    let result = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        
        let passengerDetails = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: getFare(arrPenumpang[i][1], arrPenumpang[i][2])
        };

        result.push(passengerDetails);
    }

    return result;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]