function quickmaf() {
	let randInt = Math.floor(Math.random() * 4);
	if (randInt == 0) {
		/* e.g.
		randInt = Math.floor(Math.random() * 40 + 1);
		eq = `\\( ${randInt}^{2} \\)`;
		ans = (Math.pow(randInt, 2)).toString();
		*/
		let a = Math.floor(Math.random() * 9989 + 11);
		let b = Math.floor(Math.random() * 9989 + 11);
		eq = `\\( ${a} + ${b} \\)`;
		ans = (a + b).toString();
	} else if (randInt == 1) {
		let a = Math.floor(Math.random() * 989 + 11);
		let b = Math.floor(Math.random() * 989 + 11);
		eq = `\\( ${a} - ${b} \\)`;
		ans = (a - b).toString();
	} else if (randInt == 2) {
		// FOIL
		let a = Math.floor(Math.random() * 78 + 12);
		let b = Math.floor(Math.random() * 78 + 12);
		eq = `\\( ${a} \\times ${b} \\)`;
		ans = (a * b).toString();
	} else {
		let b = Math.floor(Math.random() * 7 + 3);
		let a = -1;
		while (a % b != 0) {
			a = Math.floor(Math.random() * 900 + 100);
		}
		eq = `\\( ${a} \\div ${b} \\)`;
		ans = (a / b).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function times11() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 11 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 11).toString();
	problist.push(eq);
}

function times101() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 101 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 101).toString();
	problist.push(eq);
}

function times111() {
	let randInt = Math.floor(Math.random() * 976 + 24);
	eq = `\\( ${randInt} \\times 111 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 111).toString();
	problist.push(eq);
}

function times25() {
	let randInt = 2 * Math.floor(Math.random() * 95 + 6);
	eq = `\\( ${randInt} \\times 25 \\)`;
	prob.innerHTML = eq;
	ans = (randInt * 25).toString();
	problist.push(eq);
}

function sqcube() {
	let randInt = Math.floor(Math.random() * 2);
	if (randInt == 0) {
		randInt = Math.floor(Math.random() * 40 + 1);
		eq = `\\( ${randInt}^{2} \\)`;
		ans = (Math.pow(randInt, 2)).toString();
	} else {
		randInt = Math.floor(Math.random() * 20 + 1);
		eq = `\\( ${randInt}^{3} \\)`;
		ans = (Math.pow(randInt, 3)).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function dec_to_rom (num) {
	// credit:
	// https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function roman() {
	// keep it between like 5 and 999
	let randInt = Math.floor(Math.random() * 995 + 5);
	ans = randInt.toString();
	eq = `\\( \\mathrm{${dec_to_rom(randInt)}} \\)`;
	prob.innerHTML = eq;
	problist.push(eq);
}

function gcdlcm() {
	// make the GCD an easy to calculate number, aka like 2-9
	// technically because of how this is implemented there's a good chance it can be not
	// but that's a later problem
	let gcd = Math.floor(Math.random() * 8 + 2);
	let a = -1, b = -1;
	while (a % gcd != 0) {
		a = Math.floor(Math.random() * 90 + 10);
	}
	while (b % gcd != 0) {
		b = Math.floor(Math.random() * 90 + 10);
	}

	if (Math.floor(Math.random() * 2) == 0) {
		eq = `\\( \\gcd(${a}, ${b}) \\)`;
		ans = gcd.toString();
	} else {
		eq = `\\( \\operatorname{lcm}(${a}, ${b}) \\)`;
		ans = (a * b / gcd).toString();
	}

	prob.innerHTML = eq;
	problist.push(eq);
}

function sum() {
	// sum of consecutive odd/even/natural numbers
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		let last = Math.floor(Math.random() * 21 + 5);
		eq = `\\( 1 + 2 + 3 + \\ldots + ${last} \\)`;
		ans = (last * (last+1) / 2).toString();
	} else if (randInt == 1) {
		let last = 1 + 2 * Math.floor(Math.random() * 36 + 4);
		eq = `\\( 1 + 3 + 5 + \\ldots + ${last} \\)`;
		ans = (Math.pow((last + 1) / 2, 2)).toString();
	} else {
		let last = 2 * Math.floor(Math.random() * 15 + 6);
		eq = `\\( 2 + 4 + 6 + \\ldots + ${last} \\)`;
		ans = (last * (last+2) / 4).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function remainder() {
	// any number 3 - 11, except for 7 and 10
	let randInt = -1;
	do {
		randInt = Math.floor(Math.random() * 9 + 3);
	} while (randInt == 7 || randInt == 10);
	let big = Math.floor(Math.random() * 8999 + 1001);
	eq = `\\( ${big} \\div ${randInt} \\) has a remainder of:`;
	ans = (big % randInt).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function div() {
	// make the number easy by putting it in the form 2^w * 3^x * 5^y * 7^z
	// w is [0, 4]
	// x is [0, 2]
	// y is [0, 2]
	// z is [0, 1]
	let W = Math.floor(Math.random() * 5);
	let X = Math.floor(Math.random() * 3);
	let Y = Math.floor(Math.random() * 3);
	let Z = Math.floor(Math.random() * 2);
	let prod = Math.pow(2, W) * Math.pow(3, X) * Math.pow(5, Y) * Math.pow(7, Z);
	eq = `\\( ${prod} \\) has how many divisors?`;
	ans = ((W+1)*(X+1)*(Y+1)*(Z+1)).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}



