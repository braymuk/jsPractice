function add () {
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum+= arguments[i];
	}
	return sum;
}

function subtract () {
	var value = arguments[0]-arguments[1];
	return value;
}

function sum (arr) {
		return arr.reduce(function(a,b){
		  return a + b
		}, 0);
	};


function multiply (arr) {
	var sum = arr[0];
	for(i=1;i<arr.length;i++) {
		sum *= arr[i];
	}
	return sum;
	
}

function power() {
	var base = arguments[0];
	var power = arguments[1];
	var one = 1;
	for(i=0;i<power;i++) {
		one*= base;
	}
	return one;
	
}

function factorial(num) {
	var one = 1;
	if (num===0) {
		return 1;
	} else {
		var number = num;
		for (i=1;i<num;i++) {
			number *= num-i;
		}
		return number;

	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}