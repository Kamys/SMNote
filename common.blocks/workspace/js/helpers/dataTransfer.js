/**
 * Use for get data from clipboardData
 * @param clipboardData {DataTransfer}
 * @constructor
 */
let DataTransferHelper = function (clipboardData) {
	let items = clipboardData.items;

	this.getText = function () {
		return clipboardData.getData('text/plain');
	};

	this.getImage = function () {
		return items[1].getAsFile();
	};

	this.isText = function () {
		return items[0].type === 'text/plain';
	};

	this.isImage = function () {
		return items[0].type === 'text/html' && items[1].type === 'image/png';
	};
};