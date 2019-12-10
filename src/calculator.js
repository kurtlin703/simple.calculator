function add() {
	let results = 0
	for (let i = 0; i <arguments.length; i++) {
		results += arguments[i];
		
	}
 return results
}



function multiply() {
	let results = 1;
	for (let i = 0; i <arguments.length; i++) {
		results *= arguments[i];
		

	}
 return results
}

module.exports = {
    add, multiply
}