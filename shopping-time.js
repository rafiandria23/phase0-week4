/**
 * HACKTIV8 Phase 0 - Logic Challenge - Shopping Time!
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





function shoppingTime(memberId, money) {
    // Conditionals for unmet requirements
    if ((memberId === undefined)) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if ((memberId === '')) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if (money < 50000) {
        return 'Mohon maaf uang tidak cukup';
    }



    // SALE Items as an object
    // const sale = {
    //     'Sepatu Stacattu': 1500000,
    //     'Baju Zoro': 500000,
    //     'Baju H&N': 250000,
    //     'Sweater Uniklooh': 175000,
    //     'Casing Handphone': 50000
    // }

    const sale = [
        {
            merk: 'Sepatu Stacattu',
            harga: 1500000
        },
        {
            merk: 'Baju Zoro',
            harga: 500000
        },
        {
            merk: 'Baju H&N',
            harga: 250000
        },
        {
            merk: 'Sweater Uniklooh',
            harga: 175000
        },
        {
            merk: 'Casing Handphone',
            harga: 50000
        }
    ];



    // Items that can be bought acording to member's money
    let purchasedItems = [];



    // User-defined function for getting member's Money Change and Purchased Items
    function getDetails(money) {
        // let salePriceArray = Object.values(sale);
        // let saleItemArray = Object.keys(sale);

        for (let i = 0; i < sale.length; i++) {
            if (money >= sale[i].harga) {
                money -= sale[i].harga;
                purchasedItems.push(sale[i].merk);
            }
        }

        return money;
    }



    totalMoneyChange = getDetails(money);



    // Final Variable to be returned
    let buyerAccount = {
        memberId: memberId,
        money: money,
        listPurchased: purchasedItems,
        changeMoney: totalMoneyChange
    }



    return buyerAccount;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja