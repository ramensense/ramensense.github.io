var pass = new URLSearchParams(window.location.search).get('pass');

const header = document.getElementById('heading');
const button = document.getElementById('trigger-replace');
const txt = document.getElementById('remove');
const prob = document.getElementById('problem');
const field = document.getElementById('user-input');
const list = document.getElementById('wrong');
var problist = [];
header.textContent = "Some info before you begin:";

let start, end, empty = true;

field.addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		submit();
	}
});

let prevInput = "";
field.addEventListener("input", function(event){
	if (empty) {
		empty = false;
		prevInput = field.value;
		return;
	}
	let seenDifferent = 0;
	let curInput = field.value;
	if(curInput.length != prevInput.length + 1){
		field.value = prevInput;
		return;
	}
	for(let i = 0; i < curInput.length; i++){
		if(curInput.charAt(i) !== prevInput.charAt(i-seenDifferent)){
			if(seenDifferent > 0){
				field.value = prevInput;
				return;
			}
			seenDifferent++;
		}
	}
	prevInput = curInput;
});

button.addEventListener('click', () => {
	txt.textContent='';
	button.style.display='none';
	field.style.display='block';

	start = performance.now();
	domath();
});

var iter = 0, right = 0;
var ans = "", low = 0, high = 0;
var missed = [];

function domath() {
	empty = true;
	field.value = '';
	header.textContent = `Problem ${(iter+1).toString()} of 10`;
	if (iter === 10) {
		end = performance.now();
		const time = (end - start) / 1000;
		const rate = time / 10;

		header.textContent = "Congratulations on finishing the test!";
		button.style.display='none';
		field.style.display='none';
		prob.style.display='none';
		list.style.display='block';

		txt.innerHTML = `Out of the 10 problems you attempted, you got a total of 
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
	if (pass == "fracseven") {
		if (seven()) {right+=1;}
		else {
			missed.push(`You answered <b>\\( ${out} \\)</b> on the question <b>${problist[problist.length-1]}</b>, 
			when the correct answer was in the range <b>\\( ${low} \\)</b> to <b>\\( ${high} \\)</b>`);
		}
	} else if (out === ans) {
		right += 1;
	} else {
		missed.push(`You answered <b>\\( ${out} \\)</b> on the question <b>${problist[problist.length-1]}</b>, 
			when the correct answer was <b>\\( ${ans} \\)</b>`);
	}

	iter += 1;
	domath();
}