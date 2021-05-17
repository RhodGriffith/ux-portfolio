(function () {
	var header = document.querySelector('.header');
	var icon = document.querySelector('.icon-container');
	icon.onclick = function () {
		header.classList.toggle('menu-open');
	}
}());