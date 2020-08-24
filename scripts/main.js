let indexValue = 0;
function slideShow() {
	setTimeout(slideShow, 25000);
	let x;
	const img = document.querySelectorAll('img');
	for (x = 0; x < img.length; x++) {
		img[x].style.display = 'none';
	}
	indexValue++;
	if (indexValue > img.length) {
		indexValue = 1;
	}
	img[indexValue - 1].style.display = 'block';
}
slideShow();
