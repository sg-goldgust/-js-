let solution = (budget, arr) => {

    let count = 0;
    let hasDiscount = true;

    arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    for (let i = 0; i < arr.length; i++) {
        let productCost = arr[i][0];
        let shipmentCost = arr[i][1];
        if (budget >= (productCost + shipmentCost)) {
            budget -= (productCost + shipmentCost);
            console.log(productCost, shipmentCost, budget);
            count++;
        } else if (budget >= ((productCost / 2) + shipmentCost) && hasDiscount) {
            budget -= (productCost / 2) + shipmentCost;
            hasDiscount = false;
            count++;
            break;
        } 

    }

    return count;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));