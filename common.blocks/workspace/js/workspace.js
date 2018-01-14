let mouseTracker = new MouseTracker();

let Workspace = function () {
	let $element;
	let viewList = [];
	init();

	function init() {
		$element = $('.workspace');
		addElement(new VText('Hello world it SMNote!!').getView());
	}

	function addElement(view) {
		viewList.push(view);
		$element.append(view);
		view.css({top: mouseTracker.getY() - 50, left: mouseTracker.getX() - 50, position: 'absolute'});
		view.attr('id', 'VObject' + viewList.length);
	}

	this.addVText = function (text) {
		const filteredText = xssFilters.inHTMLData(text);

		let view = new VText(filteredText).getView();
		addElement(view);
	};

	/**
	 *
	 * @param file {File}
	 * @constructor
	 */
	this.addVImage = function (file) {
		if (file !== null) {
			const reader = new FileReader();
			reader.onload = function (event) {
				let vImage = new VImage(event.target.result);
				addElement(vImage.getView());
			};
			reader.readAsDataURL(file);
		}
	};
};

