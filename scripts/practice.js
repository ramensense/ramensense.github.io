var pass = new URLSearchParams(window.location.search).get('pass')
console.log(pass);

/* list of possible 'pass' values...
MULTIPLICATION
- times11
- times101
- times111
- times25
*/

const header = document.getElementById('heading');
const button = document.getElementById('trigger-replace');
const txt = document.getElementById('remove');
const prob = document.getElementById('problem');
const field = document.getElementById('user-input');
const list = document.getElementById('wrong');
header.textContent = "Some info before you begin:";

let start, end;

field.addEventListener("keydown", function(event) {
	if (event.keyCode == 8 || event.keyCode == 46) {
		event.preventDefault();
	}
	if (event.keyCode == 13) {
		submit();
	}
});

button.addEventListener('click', () => {
	txt.textContent='';
	button.style.display='none';
	field.style.display='block';

	start = performance.now();
	domath();
});

var iter = 0, right = 0;
var ans = "";
var missed = [];

function domath() {
	field.value = '';
	header.textContent = `Problem ${(iter+1).toString()} of 20`;
	if (iter === 20) {
		end = performance.now();
		const time = (end - start) / 1000;
		const rate = time / 20;

		header.textContent = "Congratulations on finishing the test!";
		button.style.display='none';
		field.style.display='none';
		prob.style.display='none';
		list.style.display='block';

		txt.innerHTML = `Out of the 20 problems you attempted, you got a total of 
			<u>${right.toString()}</u> correct.<br>On average, you took 
			<u>${rate.toFixed(2)}</u> seconds per question.<br>Below are the 
			questions you missed.`;
		missed.forEach(function(e) {
			list.innerHTML += "<li>" + e + "</li>";
		})
		return;
	}

	if (pass.startsWith("times")) {
		console.log('times!!');
		let randInt;
		if (pass.substring(5) == "25") {
			randInt = 2 * Math.floor(Math.random() * 95 + 6);
		} else {
			randInt = Math.floor(Math.random() * 976 + 24);
		}
		prob.textContent = `${randInt} * ${pass.substring(5)} = ??`;
		ans = (randInt * parseInt(pass.substring(5))).toString();
		console.log(ans);
	}
}

function submit() {
	const out = field.value;
	console.log(out);
	if (out === ans) {
		right += 1;
	} else {
		missed.push(`You answered <b>${out}</b> on the question <b>${prob.textContent}</b>, 
			when the correct answer was <b>${ans}</b>`);
	}

	iter += 1;
	domath();
}