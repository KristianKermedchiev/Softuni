function signCheck(num1, num2, num3) {

    let num1isPositive;
    let num2isPositive;
    let num3isPositive;

    if (num1 + num1 > 0) {
        num1isPositive = true;
    } else if (num1 + num1 < 0) {
        num1isPositive = false;
    }
    if (num2 + num2 > 0) {
        num2isPositive = true;
    } else if (num2 + num2 < 0) {
        num2isPositive = false;
    }
    if (num3 + num3 > 0) {
        num3isPositive = true;
    } else if (num3 + num3 < 0) {
        num3isPositive = false;
    }

    if (num1isPositive === true && num2isPositive === true && num3isPositive === true) {
        console.log(`Positive`)
    } else if (num1isPositive === false && num2isPositive === false && num3isPositive === false) {
        console.log(`Negative`)
    } else if (num1isPositive === false && num2isPositive === false) {
        console.log(`Positive`)
    } else if (num1isPositive === false && num3isPositive === false) {
        console.log(`Positive`)
    } else if ((num2isPositive === false && num3isPositive === false)) {
        console.log(`Positive`)
    } else {
        console.log(`Negative`)
    }
}
signCheck( 5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);