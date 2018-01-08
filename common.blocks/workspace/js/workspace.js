workspace();


function workspace() {
	let element;
	init();

	function init() {
		element = $('#workspace');
		window.addEventListener('paste', function (event) {
			event.preventDefault();
			const data = event.clipboardData.getData('text');
			let pastText = new VText(data);
			element.append(pastText.getView());
		});

		let pastText = new VText('Hello world it SMNote!!');
		element.append(pastText.getView());
	}
}
