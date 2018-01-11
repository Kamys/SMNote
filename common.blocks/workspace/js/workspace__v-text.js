function VText(text) {
	let $element;
	let vObject;
	let autoHideLabel = true;
	init();

	function createLabel() {
		let $label = $('<div style="width: 100%; height: 15px; background-color: #0b58a2"></div>');
		if (autoHideLabel) {
			$label.css('background-color', 'rgba(0, 125, 215, 0)');
			vObject.getElement().mousemove(function () {
				$label.css('background-color', '#0b58a2');

			});
			vObject.getElement().mouseout(function () {
				$label.css('background-color', 'rgba(0, 125, 215, 0)');
			});
		}
		return $label;
	}

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
		let $label = createLabel();

		vObject.addContent($label);
		vObject.addContent($element);
	}

	this.getView = function () {
		return vObject.getElement();
	};
}
