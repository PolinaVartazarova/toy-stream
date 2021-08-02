const iconMenu = document.querySelector('.header-burger');
if (iconMenu){
	const menuBody = document.querySelector('.nav');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
