const fibonacci = function(index) {
    console.log(index);

    if(index <= 0) {
        return "OOPS";
    }
    if(index === 1) {
        return 1;
    } else if (index === 2) {
        return 1;
    }

    return fibonacci(index-1) + fibonacci(index - 2);
}

module.exports = fibonacci
