function VText(text) {
	/**
	 * Contain all element
	 */
	let $blockMain;
	let autoHideLabel = true;
	init();

	function createLabel() {
		let $label = $('<div style="width: 100%; height: 15px; background-color: #0b58a2"></div>');
		if (autoHideLabel) {
			$label.css('background-color', 'rgba(0, 125, 215, 0)');
			$blockMain.mousemove(function () {
				$label.css('background-color', '#0b58a2');

			});
			$blockMain.mouseout(function () {
				$label.css('background-color', 'rgba(0, 125, 215, 0)');
			});
		}
		return $label;
	}

	/**
	 * @returns {jQuery} Use for edit text.
	 */
	function createEditText() {
		return $(`<div class="workspace__v-text__edit-text" contenteditable="true">${text}</div>`);
	}

	function init() {
		$blockMain = $('<div class="v-text"></div>');
		let $label = createLabel();
		$blockMain.draggable({handle: $label});
		$blockMain.resizable({
			autoHide: true
		});

		$blockMain.append($label);
		$blockMain.append(createEditText());
	}

	//TODO: replace on getView
	this.getView = function () {
		return $blockMain;
	};
}
