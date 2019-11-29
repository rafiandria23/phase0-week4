/**
 * HACKTIV8 Phase 0 - Logic Challenge - Faktor Persekutuan Terbesar
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





function fpb(angka1, angka2) {
    if (angka1 === 0 || angka2 === 0) {
        return 0;
    } else if (angka1 === angka2) {
        return angka1;
    } else if (angka1 > angka2) {
        return fpb(angka1 - angka2, angka2);
    } else if (angka1 < angka2) {
        return fpb(angka1, angka2 - angka1);
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1