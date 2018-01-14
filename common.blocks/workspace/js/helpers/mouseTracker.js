let MouseTracker = function () {
	let mouseX;
	let mouseY;

	$(document).mousemove(function (event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	});

	this.getX = function () {
		return mouseX;
	};

	this.getY = function () {
		return mouseY;
	};
};