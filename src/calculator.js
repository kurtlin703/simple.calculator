function add() {
	var sum = 0
	for (var i = 0; i <arguments.length; i++) {
		sum+= arguments[i];
		
	}
 return sum
}



function multiply() {
	var sum = 1;
	for (var i = 0; i <arguments.length; i++) {
		sum *= arguments[i];
		

	}
 return sum
ls}

module.exports = {
    add, multiply
}