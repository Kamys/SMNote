workspace();

let mouseX;
let mouseY;

$(document).mousemove(function (event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
});

function workspace() {
	let element;
	init();

	function init() {
		element = $('#workspace');
		window.addEventListener('paste', function (event) {
			event.preventDefault();
			const data = event.clipboardData.getData('text');
			let pastText = new VText(xssFilters.inHTMLData(data));
			pastText.getView().css({top: mouseY - 50, left: mouseX - 50, position:'absolute'});
			element.append(pastText.getView());
		});

		let pastText = new VText('Hello world it SMNote!!');
		element.append(pastText.getView());
	}
}
