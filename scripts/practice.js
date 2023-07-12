var pass = new URLSearchParams(window.location.search).get('pass');

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
var problist = [];
header.textContent = "Some info before you begin:";

let start, end;

field.addEventListener("keydown", function(event) {
	if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 65) {
		// disable backspace + delete + a (for ctrl+a)
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
		});
		MathJax.Hub.Queue(['Typeset', MathJax.Hub, list]);
		return;
	}

	eval(pass + "();");
	MathJax.Hub.Queue(['Typeset', MathJax.Hub, prob]);
}

function submit() {
	const out = field.value;
	if (out === ans) {
		right += 1;
	} else {
		missed.push(`You answered <b>\\( ${out} \\)</b> on the question <b>${problist[problist.length-1]}</b>, 
			when the correct answer was <b>\\( ${ans} \\)</b>`);
	}

	iter += 1;
	domath();
}