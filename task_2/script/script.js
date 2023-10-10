function getFactorial(n) {
    if (isNaN(n)) {
        return 'not a number';
    }

    n = parseInt(n);

    if (n === 0) {
        return 1;
    }

    return n * getFactorial(n - 1);
}

function multiply(a) {
    var result = a;
    function inner(b) {
        if (b) {
            result *= b;
            return inner;
        } else {
            return result;
        }
    }
    return inner;
}




