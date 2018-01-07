window.addEventListener('paste', function (event) {
	event.preventDefault();
	const data = event.clipboardData.getData('text');
	new VText(data);
});