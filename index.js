window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

const drop = document.getElementById('trick');
drop.addEventListener('change', function() {
	const sel = this.options[this.selectedIndex];

	window.open('../ramen-nst.github.io/practice.html', '_self');
});

function load() {
	const element = document.getElementById('js');
	console.log(element);
	document.getElementById('js').innerHTML(drop);
}