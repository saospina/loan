export function calculateTotal(amount, due) {
    
    let totalAmount;
    if (amount <= 1000) {
        totalAmount = amount * .25;
    } else if (amount > 100 && amount <= 5000) {
        totalAmount = amount * .20;
    } else if (amount > 5000 && amount <= 10000) {
        totalAmount = amount * .15;
    } else {
        totalAmount = amount * .10;
    }

    let totalDue = 0;
    switch (due) {
        case 3:
            totalDue = amount * 0.05;
            break;
        case 6:
            totalDue = amount * .10;
            break;
        case 12:
            totalDue = amount * .15;
            break;
        case 24:
            totalDue = amount * .20;
            break;
        default:
            break;
    }

    return totalDue + totalAmount + amount;
    


}