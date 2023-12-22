function recip() {
	if (Math.random() < 0.5) {
		// do it with integers
		a = Math.floor(Math.random() * 11) + 3;
		b = Math.floor(Math.random() * 11) + 3;
		g = gcd(a, b);
		a /= g; b /= g;
		while (a == b || (b-a)*(b-a) >= a*b || gcd(a, b) != 1) {
			a = Math.floor(Math.random() * 11) + 3;
			b = Math.floor(Math.random() * 11) + 3;
			g = gcd(a, b);
			a /= g; b /= g;
		}
		eq = `\\( \\dfrac{${a}}{${b}} + \\dfrac{${b}}{${a}} \\) (answer as a mixed number like "3 4/5")`;
		num = (b-a)*(b-a);
		dem = a*b;
		g = gcd(num, dem);
		num /= g; dem /= g;
		ans = `2 ${num}/${dem}`;
	} else {
		// do it symbolically
		a = Math.floor(Math.random() * 12) + 1;
		b = Math.floor(Math.random() * 12) + 1;
		if (Math.random() < 0.5) {a = -a;}
		if (Math.random() < 0.5) {b = -b;}
		while (a == b) {
			a = Math.floor(Math.random() * 12) + 1;
			b = Math.floor(Math.random() * 12) + 1;
			if (Math.random() < 0.5) {a = -a;}
			if (Math.random() < 0.5) {b = -b;}
		}
		A = `(x ${a < 0 ? "" : "+"} ${a})`;
		B = `(x ${b < 0 ? "" : "+"} ${b})`;
		eq = `\\( \\dfrac{${A}}{${B}} + \\dfrac{${B}}{${A}} = 2 \\dfrac{B}{C} \\), solve for \\( B \\).`;
		ans = ((a-b)*(a-b)).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function binthm() {
	pwr = Math.floor(Math.random() * 4) + 5;
	x = Math.floor(Math.random() * 2) + 1;
	y = Math.floor(Math.random() * 2) + 1;
	n = Math.floor(Math.random() * (pwr-3)) + 2;
	eq = `What is the coefficient of the \\( x^${n} y^${pwr-n} \\) term in \\( (${x==1?"":"2"}x + ${y==1?"":"2"}y)^${pwr} \\)`;
	ans = Math.pow(x, n) * Math.pow(y, pwr-n) * ncr(pwr, n);
	ans = ans.toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function sqthree() {
	a = Math.floor(Math.random() * 9) + 1;
	b = Math.floor(Math.random() * 9) + 1;
	num = 100 * a + b;
	ans = (num * num).toString();
	eq = `\\( ${num}^2 = ?\\)`;
	prob.innerHTML = eq;
	problist.push(eq);
}

function diffcub() {
	if (Math.random() <= 0.6) {
		// b + 1 = a
		b = Math.floor(Math.random() * 11) + 6;
		a = b + 1;
		eq = `\\( ${a}^3 - ${b}^3 = \\)`;
		ans = (a*a*a-b*b*b).toString();
	} else {
		// a and b are just random
		// make small just bcz this is aids
		a = Math.floor(Math.random() * 7) + 4;
		b = Math.floor(Math.random() * 7) + 4;
		if (a <= b) {
			[a, b] = [b, a];
		}
		eq = `\\( (${a}^3 - ${b}^3) \\div (${a} - ${b}) = \\)`;
		ans = (a*a+a*b+b*b).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function triflip() {
	fst = Math.floor(Math.random() * 3) + 1;
	sec = Math.floor(Math.random() * 10) + 6;
	one = fst * (fst+1) / 2;
	two = (fst+1) * (fst+2) / 2;
	three = sec * (sec+1) / 2;
	eq = `\\( \\dfrac{1}{${one}} + \\dfrac{1}{${two}} + \\dots + \\dfrac{1}{${three}} = ? \\) (Must say as fraction like "3/5")`;
	num = 2 * (sec + 1 - fst);
	dem = fst * (sec + 1);
	g = gcd(num, dem);
	num /= g; dem /= g;
	ans = `${num}/${dem}`;
	prob.innerHTML = eq;
	problist.push(eq);
}

function equisquare() {
	a = 5 * Math.floor(Math.random() * 17) + 15;
	b = Math.floor(Math.random() * 4) + 1;
	if (Math.random() <= 0.5) {
		eq = `\\( ${a-b}^2 + ${a+b}^2 \\)`;
	} else {
		eq = `\\( ${a+b}^2 + ${a-b}^2 \\)`;
	}
	ans = (2*a*a+2*b*b).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function perimarea() {
	// the start and ending number have to be
	// - even
	// - equivalent mod 4 (at least to be an integer)
	fst = 2 * Math.floor(Math.random() * 15) + 10;
	sec = 2 * Math.floor(Math.random() * 15) + 10;
	while (fst >= sec || fst % 4 != sec % 4) {
		fst = 2 * Math.floor(Math.random() * 15) + 10;
		sec = 2 * Math.floor(Math.random() * 15) + 10;
	}
	eq = `If a square's perimeter is increased from \\(${fst}\\) to \\(${sec}\\), how much does the area increase?`;
	ans = ((sec-fst)*(sec+fst)/16).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function basemod() {
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
	prob.innerHTML = eq;
	problist.push(eq);
}

function unitconv() {
	if (Math.random() <= 0.5) {
		// rod
		v = Math.floor(Math.random() * 20) + 2;
		eq = `Convert \\( ${v} \\) rods to feet.`;
		ans = (16.5 * v).toString();
	} else {
		// fathom
		v = Math.floor(Math.random() * 20) + 2;
		eq = `Convert \\( ${v} \\) fathoms to feet.`;
		ans = (6 * v).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function fracexp() {
	num1 = Math.floor(Math.random() * 8) + 2;
	num2 = Math.floor(Math.random() * 8) + 2;
	dem1 = Math.floor(Math.random() * 8) + 2;
	dem2 = Math.floor(Math.random() * 8) + 2;
	g1 = gcd(num1, dem1); g2 = gcd(num2, dem2);
	num1 /= g1; dem1 /= g1; num2 /= g2; dem2 /= g2;
	while (dem1 <= 2 || dem2 <= 2 || (num1*dem2+num2*dem1)%(dem1*dem2)==0) {
		num1 = Math.floor(Math.random() * 8) + 2;
		num2 = Math.floor(Math.random() * 8) + 2;
		dem1 = Math.floor(Math.random() * 8) + 2;
		dem2 = Math.floor(Math.random() * 8) + 2;
		g1 = gcd(num1, dem1); g2 = gcd(num2, dem2);
		num1 /= g1; dem1 /= g1; num2 /= g2; dem2 /= g2;
	}

	num = (num1 * dem2 + num2 * dem1);
	dem = (dem1 * dem2);
	g = gcd(num, dem);
	num /= g; dem /= g;

	q = Math.random();
	eq = `If \\( \\sqrt[${dem1}]{a^${num1}} \\times \\sqrt[${dem2}]{a^${num2}} = \\sqrt[n]{a^k} \\) such that \\( \\gcd(n, k)=1 \\),
		what is \\( ${q<=0.5?'k':'n'} \\)?`;
	ans = (q <= 0.5 ? num : dem).toString();
	prob.innerHTML = eq;
	problist.push(eq);
}

function funcdiff() {
	A = Math.floor(Math.random() * 4) + 2;
	B = Math.floor(Math.random() * 4) + 2;
	C = Math.floor(Math.random() * 5) + 5;
	if (Math.random() <= 0.5) {
		eq = `If \\( f(x) = (${A}x + ${B})^{${C}} \\) and \\( f'(x) = A(Bx+${B})^C \\), calculate \\( A + B + C \\)`;
		ans = ((A+1) * (C+1) - 2).toString();
	} else {
		eq = `If \\( f(x) = (${A}x + ${B})^{${C}} \\) and \\( f''(x) = A(Bx+${B})^C \\), calculate \\( A + B + C \\)`;
		ans = ( A**2 * C * (C-1) + A + C - 2 ).toString();
	}
	prob.innerHTML = eq;
	problist.push(eq);
}

function circlediff() {
	// ok wait literally if r is such that it's not a Pythag triple
	// the answer like has to be zero right...
	r_vals = [5, 10, 13, 15, 20, 25];
	r = r_vals[Math.floor(Math.random() * 6)];
	x_vals = [];
	for (var i = 1; i < r; i++) {
		let v = Math.sqrt(r*r - i*i);
		if (Math.trunc(v) == v) {
			x_vals.push(i);
		}
	}
	x = x_vals[Math.floor(Math.random() * x_vals.length)];
	y = Math.trunc(Math.sqrt(r*r-x*x));
	if (Math.random() <= 0.5) {x = -x;}
	if (Math.random() <= 0.5) {y = -y;}

	if (Math.random() <= 0.33) {
		// slope
		eq = `The slope of the tangent line to \\( x^2 + y^2 = ${r*r} \\) at \\( (${x}, ${y}) \\) is... (fraction like "1/2")`;
		if ((x<0)==(y<0)) {
			x = Math.abs(x); y = Math.abs(y);
			g = gcd(x, y);
			x /= g; y /= g;
			ans = `-${x}/${y}`;
		} else {
			x = Math.abs(x); y = Math.abs(y);
			g = gcd(x, y);
			x /= g; y /= g;
			ans = `${x}/${y}`;
		}
	} else if (Math.random() <= 0.5) {
		// x-int
		eq = `The \\(x\\)-intercept of the tangent line to \\( x^2 + y^2 = ${r*r} \\) at \\( (${x}, ${y}) \\) is... (fraction like "1/2")`;
		if (x<0) {
			x = Math.abs(x);
			g = gcd(x, r*r);
			r = r*r/g; x /= g;
			if (x == 1) {ans = `-${r}`;}
			else {ans = `-${r}/${x}`;}
		} else {
			x = Math.abs(x);
			g = gcd(x, r*r);
			r = r*r/g; x /= g;
			if (x == 1) {ans = `${r}`;}
			else {ans = `${r}/${x}`;}
		}
	} else {
		// y-int
		eq = `The \\(y\\)-intercept of the tangent line to \\( x^2 + y^2 = ${r*r} \\) at \\( (${x}, ${y}) \\) is... (fraction like "1/2")`;
		if (y<0) {
			y = Math.abs(y);
			g = gcd(y, r*r);
			r = r*r/g; y /= g;
			if (y == 1) {ans = `-${r}`;}
			else {ans = `-${r}/${y}`;}
		} else {
			y = Math.abs(y);
			g = gcd(y, r*r);
			r = r*r/g; y /= g;
			if (y == 1) {ans = `${r}`;}
			else {ans = `${r}/${y}`;}
		}
	}

	prob.innerHTML = eq;
	problist.push(eq);
}

function fracseven() {
	a = [142857, 285714, 428571, 571428, 714285, 857142];
	mult1 = 7 * Math.floor(Math.random() * 12) + 14;
	mult1 = mult1 + (Math.random()<=0.5?-1:1) * Math.floor(Math.random() * 3);
	mult2 = a[Math.floor(Math.random() * 6)];
	eq = `\\( ${mult1} \\times ${mult2} = ?\\) (within \\(5\\)% of the answer)`;
	low = Math.ceil(0.95 * mult1 * mult2);
	high = Math.floor(1.05 * mult1 * mult2);
	prob.innerHTML = eq;
	problist.push(eq);
}

function seven() {
	if (low <= parseInt(field.value) && parseInt(field.value) <= high) {
		return true;
	} else {return false;}
}

