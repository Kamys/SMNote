workspace();

let mouseX;
let mouseY;

$(document).mousemove(function (event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
});


function workspace() {
	let $element;
	let viewList = [];
	init();

	function init() {
		$element = $('#workspace');

		window.addEventListener('paste', function (event) {
			event.preventDefault();
			const data = xssFilters.inHTMLData(event.clipboardData.getData('text'));

			let view = new VText(data).getView();
			view.css({top: mouseY - 50, left: mouseX - 50, position: 'absolute'});
			add(view);
		});

		add(new VText('Hello world it SMNote!!').getView());
	}

	function add(view) {
		viewList.push(view);
		$element.append(view);
		view.attr('id','VObject' + viewList.length);
	}
}