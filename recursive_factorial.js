function factorial(n) {
    if (typeof n === "number") {
        if (n === 0 || n === 1) {
            console.log("Factorial of 0 or 1 integer will always be 1 ");
            return 1;
        } else if (n > 1) {
            console.log(n + " is a grater number than 1");
            let result = n;
            // let inp = n;
            while (n > 1) {
                result = result * (n - 1);
                n = n - 1;
            }
            console.log('So the factorial of ' + n + ' is ' + result)
            return result;
        }
    } else {
        console.log(n + ' isn\'t  unknown / undefined');
    }
}
factorial(); //pass any number to the function. if you leave it blank you'll get 'undefined'