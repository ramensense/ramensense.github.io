// OTHER HELPFUL FUNCTIONS
function dec_to_rom(num) {
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

function gcd(a, b) {
	if (b == 0) {
		return a;
	}
	return gcd(b, a % b);
}

function factorial(x) {
	if (x <= 1) {
		return 1;
	} else {
		return x * factorial(x-1);
	}
}

function btodec(x, b) {
	// base b to base 10
	x = x.toString();
    let pw = 0;
    let ans = 0;
    for (var i = x.length - 1; i >= 0; i--) {
        ans += Math.pow(b, pw) * (x[i] - '0');
        ++pw;
    }
    return ans;
}

function dectob(x, b) {
	// base 10 to base b
    let pw = 0;
    while (Math.pow(b, pw+1) <= x) {
        ++pw;
    }
    let ans = "";
    while (pw >= 0) {
        if ( !(x < Math.pow(b, pw) && ans.length == 0) ) {
            ans += Math.floor(x / Math.pow(b, pw)).toString();
            x %= Math.pow(b, pw);
        }
        --pw;
    }
    return ans;
}

function deg_to_rad(value) {
	let top = value, bottom = 180;
	let G = gcd(top, bottom);
	top /= G; bottom /= G;
	if (top == 1) {
		top = "";
	}
	return `\\dfrac{${top}\\pi}{${bottom}}`;
}



// PROBLEMS 1 - 20
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
		if (Math.random() <= 0.5) {
			eq = `\\( 1 + 3 + 5 + \\ldots + ${last} \\)`;
		} else {
			eq = `What is the sum of the first \\( ${(last+1)/2} \\) odd integers?`;
		}
		ans = (Math.pow((last + 1) / 2, 2)).toString();
	} else {
		let last = 2 * Math.floor(Math.random() * 15 + 6);
		if (Math.random() <= 0.5) {
			eq = `\\( 2 + 4 + 6 + \\ldots + ${last} \\)`;
		} else {
			eq = `What is the sum of the first \\( ${last/2} \\) even integers?`;
		}
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



// PROBLEMS 21 - 40
function abs() {
	// |val * mult + add| = res
	let randInt = Math.floor(Math.random() * 2);
	let val = Math.floor(Math.random() * 19 - 9);
	ans = val.toString();
	let mult = Math.floor(Math.random() * 4 + 2);
	if (randInt == 0) {
		// find smaller solution
		// aka make val * mult + add < 0
		let add = Math.floor(Math.random() * 199 - 99);
		while (val * mult + add > 0) {
			add = Math.floor(Math.random() * 199 - 99);
		}
		let res = Math.abs(val * mult + add);
		let add_upd = (add > 0 ? "+" : "") + add.toString();
		eq = `Find the smallest \\( x \\) such that \\( |${mult}x ${add}| = ${res} \\)`;
	} else {
		// find bigger solution
		// aka make val * mult + add > 0
		let add = Math.floor(Math.random() * 199 - 99);
		while (val * mult + add < 0) {
			add = Math.floor(Math.random() * 199 - 99);
		}
		let res = Math.abs(val * mult + add);
		let add_upd = (add > 0 ? "+" : "") + add.toString();
		eq = `Find the largest \\( x \\) such that \\( |${mult}x ${add_upd}| = ${res} \\)`;
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function base() {
	let randInt = Math.floor(Math.random() * 2);
	if (randInt == 0) {
		// base 10 to base B
		let B = Math.floor(Math.random() * 5 + 4); // [4, 8]
		let val = Math.floor(Math.random() * (B*B*B-B-1) + (B+1)); // [B + 1, B^3 - 1]
		eq = `Convert \\( ${val}_{10} \\) to base ${B}`
		let res = "", place = 2;
		while (val != 0) {
			if (!(val < Math.pow(B, place) && res.length == 0)) {
				res += Math.floor(val / Math.pow(B, place)).toString();
				val %= Math.pow(B, place);
			}
			--place;
		}
		ans = res;
	} else {
		// base B to base 10
		let B = Math.floor(Math.random() * 7 + 6); // [6, 12]
		let fst = Math.floor(Math.random() * 3 + 1);
		let sec = Math.floor(Math.random() * B);
		let tri = Math.floor(Math.random() * B);
		eq = `Convert \\( ${fst}${sec}${tri}_{${B}} \\) to base \\( 10 \\)`;
		ans = (fst * B * B + sec * B + tri).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function one_eq() {
	// literally just gonna be in the form ax + b = c
	let C = Math.floor(Math.random() * 199 - 99);
	let B = Math.floor(Math.random() * 199 - 99);
	B = (B > 0 ? "+" : "") + B.toString();
	let A = Math.floor(Math.random() * 9 + 2);
	eq = `Solve for \\( x \\) such that \\( ${A}x ${B} = ${C} \\) <br>[Use integers or fractions!]`;
	let top = C - B, bottom = A;
	if (top % bottom == 0) ans = (top / bottom).toString();
	else {
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function repeating() {
	let randInt = Math.floor(Math.random() * 5);
	if (randInt == 0) {
		// 0.abababab..., over 99
		let rep = Math.floor(Math.random() * 98 + 1);
		while (rep % 11 == 0) {
			rep = Math.floor(Math.random() * 98 + 1);
		}
		let top = rep, bottom = 99;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		rep = (rep < 10 ? "0" : "") + rep.toString();
		eq = `Convert to a fraction: \\( 0.${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else if (randInt == 1) {
		// 0.abbbb..., over 90
		let rep = Math.floor(Math.random() * 89 + 1);
		while (rep % 9 == 0 || rep % 10 == 0) {
			rep = Math.floor(Math.random() * 89 + 1);
		}
		let top = rep - Math.floor(rep / 10), bottom = 90;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 10);
		rep %= 10;
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else if (randInt == 2) {
		// 0.abcabcabc..., over 999
		let rep = Math.floor(Math.random() * 998 + 1);
		while (rep % 111 == 0) {
			rep = Math.floor(Math.random() * 998 + 1);
		}
		let top = rep, bottom = 999;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		rep = rep.toString();
		while(rep.length != 3) {
			rep = "0" + rep;
		}
		eq = `Convert to a fraction: \\( 0.${rep}${rep}${rep}\\ldots \\)`;

	} else if (randInt == 3) {
		// 0.abcbcbcbc..., over 990
		let rep = Math.floor(Math.random() * 989 + 1);
		while (rep % 9 == 0 || rep % 10 == 0 || rep % 11 == 0) {
			rep = Math.floor(Math.random() * 989 + 1);
		}
		let top = rep - Math.floor(rep / 100), bottom = 990;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 100);
		rep = (rep % 100).toString();
		while(rep.length != 2) {
			rep = "0" + rep;
		}
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;
	} else {
		// 0.abcccc..., over 900
		let rep = Math.floor(Math.random() * 899 + 1);
		while (rep % 9 == 0 || rep % 10 == 0) {
			rep = Math.floor(Math.random() * 899 + 1);
		}
		let top = rep - Math.floor(rep / 10), bottom = 900;
		let G = gcd(Math.abs(top), Math.abs(bottom));
		top /= G; bottom /= G;
		ans = top.toString() + "/" + bottom.toString();
		let fst = Math.floor(rep / 10);
		rep = (rep % 10).toString();
		eq = `Convert to a fraction: \\( 0.${fst}${rep}${rep}${rep}${rep}\\ldots \\)`;

	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function quadcub() {
	// ask for expansion of (ax + b)^2 or (ax + b)^3
	// sum/product of roots of quadratic/cubic
	// discriminant of quadratic
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		// a + b + c or a + b + c + d
		// or a - b + c or a - b + c - d
		let A = Math.floor(Math.random() * 4 + 2);
		let B = Math.floor(Math.random() * 4 + 2);
		let pw = Math.floor(Math.random() * 2 + 2);
		if (Math.floor(Math.random() * 2) == 0) {
			if (pw == 2) {
				eq = `\\( (${A}x + ${B})^2 = ax^2 + bx + c, a + b + c = \\)`;
				ans = Math.pow(A+B, 2).toString();
			} else {
				eq = `\\( (${A}x + ${B})^3 = ax^3 + bx^2 + cx + d, a + b + c + d = \\)`;
				ans = Math.pow(A+B, 3).toString();
			}
		} else {
			if (pw == 2) {
				eq = `\\( (${A}x + ${B})^2 = ax^2 + bx + c, a - b + c = \\)`;
				ans = Math.pow(A-B, 2).toString();
			} else {
				eq = `\\( (${A}x + ${B})^3 = ax^3 + bx^2 + cx + d, a - b + c - d = \\)`;
				ans = Math.pow(A-B, 3).toString();
			}
		}
	} else if (randInt == 1) {
		let A = Math.floor(Math.random() * 9 + 1);
		let B = Math.floor(Math.random() * 9 + 1);
		B = (Math.random() < 0.5 ? "-" : "+") + B.toString();
		let C = Math.floor(Math.random() * 9 + 1);
		C = (Math.random() < 0.5 ? "-" : "+") + C.toString();
		let D = Math.floor(Math.random() * 9 + 1);
		D = (Math.random() < 0.5 ? "-" : "+") + D.toString();
		let pw = Math.floor(Math.random() * 2 + 2);
		if (Math.floor(Math.random() * 2) == 0) {
			// sum of roots
			if (pw == 2) {
				eq = `What is the sum of the roots of \\( ${A}x^2 ${B}x ${C} \\)`;
				let top = -B, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			} else {
				eq = `What is the sum of the roots of \\( ${A}x^3 ${B}x^2 ${C}x ${D} \\)`;
				let top = -B, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			}
		} else {
			// product of roots
			if (pw == 2) {
				eq = `What is the product of the roots of \\( ${A}x^2 ${B}x ${C} \\)`;
				let top = C, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			} else {
				eq = `What is the product of the roots of \\( ${A}x^3 ${B}x^2 ${C}x ${D} \\)`;
				let top = -D, bottom = A;
				if (top % bottom == 0) ans = (top / bottom).toString();
				else {
					let G = gcd(Math.abs(top), Math.abs(bottom));
					top /= G; bottom /= G;
					if (bottom < 0) {
						top = -top;
						bottom = -bottom;
					}
					ans = top.toString() + "/" + bottom.toString();
				}
			}
		}
	} else {
		// discriminant of quadratic 
		let A = Math.floor(Math.random() * 9 + 1);
		let B = Math.floor(Math.random() * 9 + 1);
		B = (Math.random() < 0.5 ? "-" : "+") + B.toString();
		let C = Math.floor(Math.random() * 9 + 1);
		C = (Math.random() < 0.5 ? "-" : "+") + C.toString();
		eq = `What is the discriminant of \\( ${A}x^2 ${B}x ${C} \\)`;
		ans = (B*B-4*A*C).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}



// PROBLEMS 41-60
function coordgeo() {
	let randInt = Math.floor(Math.random() * 2);
	if (randInt == 0) {
		// given (w,x) and (y,z) find midpoint
		let W = Math.floor(Math.random() * 21 - 10);
		let X = Math.floor(Math.random() * 21 - 10);
		let Y = Math.floor(Math.random() * 21 - 10);
		let Z = Math.floor(Math.random() * 21 - 10);
		let rand2 = Math.floor(Math.random() * 3);
		if (rand2 == 0) {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (${Y}, ${Z}) \\) is \\( (a, b) \\), what is \\( a \\)`;
			let top = W+Y, bottom = 2;
			if (top % bottom == 0) ans = (top / bottom).toString();
			else {
				let G = gcd(Math.abs(top), Math.abs(bottom));
				top /= G; bottom /= G;
				if (bottom < 0) {
					top = -top;
					bottom = -bottom;
				}
				ans = top.toString() + "/" + bottom.toString();
			}
		} else if (rand2 == 1) {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (${Y}, ${Z}) \\) is \\( (a, b) \\), what is \\( b \\)`;
			let top = X+Z, bottom = 2;
			if (top % bottom == 0) ans = (top / bottom).toString();
			else {
				let G = gcd(Math.abs(top), Math.abs(bottom));
				top /= G; bottom /= G;
				if (bottom < 0) {
					top = -top;
					bottom = -bottom;
				}
				ans = top.toString() + "/" + bottom.toString();
			}
		} else {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (${Y}, ${Z}) \\) is \\( (a, b) \\), what is \\( a+b \\)`;
			let top = W+X+Y+Z, bottom = 2;
			if (top % bottom == 0) ans = (top / bottom).toString();
			else {
				let G = gcd(Math.abs(top), Math.abs(bottom));
				top /= G; bottom /= G;
				if (bottom < 0) {
					top = -top;
					bottom = -bottom;
				}
				ans = top.toString() + "/" + bottom.toString();
			}
		}
	} else {
		// given (w,x) and midpoint find (y,z)
		let W = Math.floor(Math.random() * 21 - 10);
		let X = Math.floor(Math.random() * 21 - 10);
		let MA = Math.floor(Math.random() * 21 - 10);
		let MB = Math.floor(Math.random() * 21 - 10);
		let rand2 = Math.floor(Math.random() * 3);
		if (rand2 == 0) {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (a,b) \\) is \\( (${MA}, ${MB}) \\), what is \\( a \\)`;
			ans = (2*MA-W).toString();
		} else if (rand2 == 1) {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (a,b) \\) is \\( (${MA}, ${MB}) \\), what is \\( b \\)`;
			ans = (2*MB-X).toString();
		} else {
			eq = `If the midpoint of \\( (${W}, ${X}) \\) and \\( (a,b) \\) is \\( (${MA}, ${MB}) \\), what is \\( a+b \\)`;
			ans = (2*(MA+MB)-(W+X)).toString();
		}
	}
	eq += `<br>[Only use integers or fractions to answer!]`
	prob.innerHTML = eq;
	problist.push(eq);
}

function complex() {
	// given (a+bi)(c+di) = y+zi, find y or z or y+z
	let A = Math.floor(Math.random() * 21 - 10);
	let B = Math.floor(Math.random() * 21 - 10);
	B = (B < 0 ? "" : "+") + B.toString();
	let C = Math.floor(Math.random() * 21 - 10);
	let D = Math.floor(Math.random() * 21 - 10);
	D = (D < 0 ? "" : "+") + D.toString();
	eq = `Given \\( (${A}${B}i)(${C}${D}i) = a + bi \\), what is `;
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		eq += `\\( a \\)`;
		ans = (A * C - parseInt(B) * parseInt(D)).toString();
	} else if (randInt == 1) {
		eq += `\\( b \\)`;
		ans = (A * parseInt(D) + parseInt(B) * C).toString();
	} else {
		eq += `\\( a+b \\)`;
		ans = ((A + parseInt(B)) * (C + parseInt(D)) - 2 * parseInt(B) * parseInt(D));
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function c_and_p() {
	// calculate nCr or nPr
	let N = Math.floor(Math.random() * 5 + 4);
	let R = Math.floor(Math.random() * N + 1);
	ans = factorial(N) / factorial(N-R);
	if (Math.random() < 0.5) {
		// nCr
		eq = `Calculate \\( _{${N}}C_{${R}} \\)`;
		ans = (ans / factorial(R)).toString();
	} else {
		// nPr
		eq = `Calculate \\( _{${N}}P_{${R}} \\)`;
		ans = ans.toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function basemath() {
	// should probably do all four operations,
	// just focusing on + - * for now
	let randInt = Math.floor(Math.random() * 3);
	let B = Math.floor(Math.random() * 4 + 5); // [5, 8]
	if (randInt == 0) {
		// +
		// make numbers between B^2 and B^3 - 1
		let X = Math.floor(Math.random() * (B*B*B-B*B) + B*B);
		let Y = Math.floor(Math.random() * (B*B*B-B*B) + B*B);
		ans = X + Y;
		X = dectob(X, B);
		Y = dectob(Y, B);
		ans = dectob(ans, B).toString();
		eq = `\\( ${X}_{${B}} + ${Y}_{${B}} = \\)`;
	} else if (randInt == 1) {
		// -
		// make numbers between B^2 and B^3 - 1
		let X = Math.floor(Math.random() * (B*B*B-B*B) + B*B);
		// avoid negative answers! thus Y must now be between B^2 and X-1 inclusive
		let Y = Math.floor(Math.random() * (X-B*B) + B*B);
		ans = X - Y;
		X = dectob(X, B);
		Y = dectob(Y, B);
		ans = dectob(ans, B).toString();
		eq = `\\( ${X}_{${B}} - ${Y}_{${B}} = \\)`;
	} else {
		// *
		// make X between B^2 and B^3 - 1
		let X = Math.floor(Math.random() * (B*B*B-B*B) + B*B);
		// make Y between 2 and 4
		let Y = Math.floor(Math.random() * 3 + 2);
		// but also make sure to try to test 11s trick in other bases
		if (Math.random() <= 0.25) {
			Y = B + 1;
		}
		ans = X * Y;
		X = dectob(X, B);
		Y = dectob(Y, B);
		ans = dectob(ans, B).toString();
		eq = `\\( ${X}_{${B}} \\times ${Y}_{${B}} = \\)`;
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function polynum() {
	// triangular, pentagonal, or hexagonal
	let randInt = Math.floor(Math.random() * 3);
	if (randInt == 0) {
		// triangular, [5, 20]
		let N = Math.floor(Math.random() * 16 + 5);
		eq = `If \\( N = ${N} \\), what is the \\( N \\)th triangular number?`;
		ans = (N * (N+1) / 2).toString();
	} else if (randInt == 1) {
		// pentagonal, [3, 10]
		let N = Math.floor(Math.random() * 8 + 3);
		eq = `If \\( N = ${N} \\), what is the \\( N \\)th pentagonal number?`;
		ans = (N * (3 * N - 1) / 2).toString();
	} else {
		// hexagonal, [3, 10]
		let N = Math.floor(Math.random() * 8 + 3);
		eq = `If \\( N = ${N} \\), what is the \\( N \\)th hexagonal number?`;
		ans = (N * (4 * N - 2) / 2).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}



// PROBLEMS 61 - 70

function remthm() {
	// ax^3 + bx^2 + cx + d divided by x-q has a remainder of what?
	// ans: aq^3 + bq^2 + cq + d
	let A = 1;
	let B = (Math.random() <= 0.5 ? "-" : "+") + Math.floor(Math.random() * 2 + 1).toString();
	let C = (Math.random() <= 0.5 ? "-" : "+") + Math.floor(Math.random() * 3 + 1).toString();
	let D = (Math.random() <= 0.5 ? "-" : "+") + Math.floor(Math.random() * 4 + 1).toString();
	let Q = (Math.random() <= 0.5 ? "-" : "+") + Math.floor(Math.random() * 3 + 1).toString();
	eq = `\\( ( ${A}x^3 ${B}x^2 ${C}x ${D} ) \\div ( x ${Q} ) \\) has a remainder of what?`;
	Q = -parseInt(Q);
	ans = (A * Math.pow(Q, 3) + parseInt(B) * Math.pow(Q, 2) + parseInt(C) * Q + parseInt(D)).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function trig() {
	// just rapid-fire ask sine and cosine of common angles
	let numbers = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
	let sines = [0, 1, 2, 3, 4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1]; // trust the process
	let cosines = [4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3];
	let idx = Math.floor(Math.random() * numbers.length);
	let value = numbers[idx], func = "", neg = true;
	if (Math.random() <= 0.5) {
		// sine
		func = "sin";
		neg &= (sines[idx] < 0);
		ans = Math.abs(sines[idx]).toString();
	} else {
		// cosine
		func = "cos";
		neg &= (cosines[idx] < 0);
		ans = Math.abs(cosines[idx]).toString();
	}
	if (Math.random() <= 0.5) {
		// degrees
		value = `${value}^{\\circ}`;
	} else {
		// radians
		// convert value / 180 to a fraction
		value = deg_to_rad(value);
	}
	eq = `If \\( \\${func} ${value} = \\dfrac{${neg ? "-" : ""}\\sqrt{K}}{2}, K = \\)`;
	prob.innerHTML = eq;
	problist.push(eq);
}

function matrix() {
	// just calculate determinant of 2x2 matrix
	// or find an unknown x in it given determinant
	let A = (Math.random() <= 0.5 ? -1 : 1) * Math.floor(Math.random() * 9 + 1).toString();
	let B = (Math.random() <= 0.5 ? -1 : 1) * Math.floor(Math.random() * 9 + 1).toString();
	let C = (Math.random() <= 0.5 ? -1 : 1) * Math.floor(Math.random() * 9 + 1).toString();
	let D = (Math.random() <= 0.5 ? -1 : 1) * Math.floor(Math.random() * 9 + 1).toString();
	let det = A * D - B * C;
	if (Math.random() <= 0.6) {
		// calculate determinant
		eq = `\\( \\det \\begin{bmatrix}${A} & ${B} \\\\${C} & ${D}\\end{bmatrix} = \\)`;
		ans = det.toString();
	} else {
		// calculate x
		let Q = Math.floor(Math.random() * 5 + 1); // x + Q, where Q is between 1 and 5
		// too lazy to do the negative case on this one
		let randInt = Math.floor(Math.random() * 4);
		if (randInt == 0) {
			ans = (A - Q).toString();
			A = `x + ${Q}`;
		} else if (randInt == 1) {
			ans = (B - Q).toString();
			B = `x + ${Q}`;
		} else if (randInt == 2) {
			ans = (C - Q).toString();
			C = `x + ${Q}`;
		} else {
			ans = (D - Q).toString();
			D = `x + ${Q}`;
		}
		eq = `If \\( \\det \\begin{bmatrix}${A} & ${B} \\\\${C} & ${D}\\end{bmatrix} = ${det}, x =\\)`;
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function polar() {
	// calcuate r for (x,y)
	// or calculate x or y for (r, theta)
	
	// for now, only doing the second case
	let R = 2 * Math.floor(Math.random() * 5 + 1); // even numbers in [2, 10]
	let numbers = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
	let sines = [0, 1, 2, 3, 4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1]; // trust the process
	let cosines = [4, 3, 2, 1, 0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3];
	let idx = -1, func = "";
	while (true) {
		idx = Math.floor(Math.random() * numbers.length);
		if (sines[idx] == 1 || sines[idx] == 4) {
			// basically ans will be R / 2 or R
			func = "sin";
			break;
		} else if (cosines[idx] == 1 || cosines[idx] == 4) {
			func = "cos";
			break;
		}
	}

	eq = `If the polar coordinate \\( (${R}, ${numbers[idx]}^{\\circ}) \\) is rewritten as \\( (x, y) \\), find `;
	if (func == "sin") {
		eq += `\\( y \\)`;
		ans = (R * Math.sqrt(sines[idx]) / 2).toString();
	} else {
		eq += `\\( x \\)`;
		ans = (R * Math.sqrt(cosines[idx]) / 2).toString();
	}

	prob.innerHTML = eq;
	problist.push(eq);
}



// PROBLEMS 71 - 80

function modmath() {
	// either test the idea of a number_B mod (B-1)_B
	// or just a regular modular arithmetic problem

	if (Math.random() <= 0.5) {
		// pick a random prime as the mod first
		// then pick the answer X
		// then do stuff
		let primes = [5, 7, 11, 13];
		let P = primes[Math.floor(Math.random() * 4)];
		let X = Math.floor(Math.random() * (P-1) + 1); // [1, P)
		let A = Math.floor(Math.random() * 4 + 2); // [2, 5]
		let V = Math.floor(Math.random() * 4 + 2); // [2, 5]
		let R = A * X + V;
		if (R >= P) {
			R %= P;
		} else {
			while (R <= P) {
				R += P;
			}
		}
		ans = X.toString();
		eq = `Find \\( x, 0 \\leq x \\leq ${P-1} \\), if \\( ${A}x + ${V} \\cong ${R} \\pmod{${P}} \\)`;
	} else {
		// pick base B
		let B = Math.floor(Math.random() * 5 + 5); // [5, 9]
		let val = "", len = Math.floor(Math.random() * 2 + 3);
		ans = 0;
		for (var i = 0; i < len; ++i) {
			let dig = Math.floor(Math.random() * (B-1) + 1); // [1, B)
			ans = (ans + dig) % (B-1);
			val += dig.toString();
		}
		ans = ans.toString();
		eq = `\\( ${val}_${B} \\div ${B-1}_${B} \\) has a remainder of:`;
	}
	prob.innerHTML = eq;
	problist.push(eq);
}
