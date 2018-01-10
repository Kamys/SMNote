function VText(text) {
	let $element;
	let vObject;
	init();

	function init() {
		$element = $(`<div class="workspace__v-text" contenteditable="true">${text}</div>`);

		vObject = new VObject();
		$element.click(function () {
			vObject.getElement().draggable({disabled: true});
			$element.focus();
		});
		$element.blur(function () {
			vObject.getElement().draggable({disabled: false});
		});
		let $label = $('<div style="width: 100%; height: 15px; background-color: #0b58a2"></div>');
		vObject.addContent($label);
		vObject.addContent($element);
	}

	this.getView = function () {
		return vObject.getElement();
	};
}
