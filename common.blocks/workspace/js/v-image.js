let VImage = function (src) {
	let $vImage;
	init();

	function init() {
		$vImage = $('<div></div>');
		$vImage.draggable();
		$vImage.resizable({
			autoHide: true
		});
		let $image = $(`<img src=${src} />`);
		$vImage.append($image);
	}

	this.getView = function () {
		return $vImage;
	};
};