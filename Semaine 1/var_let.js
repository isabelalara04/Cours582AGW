	var banana = 'yellow';
	var apple = 'red';
	if (apple === 'red') {
		var banana = 'black';// la portée est globale
		let apple = 'green'; // la portée est à l'intérieur du bloc if
		console.log(banana); // black
		console.log(apple);  // green
	}
	console.log(banana); // black
	console.log(apple);  // red
