let idCount;

function generateId() {
	idCount++;
	return idCount;
}

function VObject() {
	/**
	 * @type {jQuery}
	 */
	let element;
	init();

	function init() {
		element = $(`<div id="Object${generateId()}" class="workspace__v-object"></div>`);
		element.draggable({
			start: focused,
			stop: focused
		});
		element.resizable({
			autoHide: false,
			start: focused,
			stop: focused
		});
	}

	function focused() {
		$(this).toggleClass('workspace__v-object_focused');
	}

	/**
	 * Add content in VObject
	 * @param {jQuery} content
	 */
	this.addContent = function (content) {
		element.append(content);
	};

	this.getElement = function () {
		return element;
	};
}
