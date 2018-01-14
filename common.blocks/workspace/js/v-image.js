let VImage = function (src) {
	let $vImage;
	init();

	function init() {
		$vImage = $('<div class="v-object v-image"></div>');
		$vImage.draggable();
		let $image = $(`<img class="v-image_image" src=${src} />`);
		$vImage.resizable({
			autoHide: true,
			alsoResize: $image
		});
		$vImage.append($image);
	}

	this.getView = function () {
		return $vImage;
	};
};