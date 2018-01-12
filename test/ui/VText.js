module.exports = {
	'CanVTextDragAndDrop': function (client) {
		let elementSelector = '#Object1';

		client
			.url('http://127.0.0.1:8000/Index.html')
			.assert.cssClassPresent(elementSelector, 'ui-draggable')
			.moveToElement(elementSelector, 0, 0)
			.mouseButtonDown(0)
			.moveToElement('body', 300, 300)
			.mouseButtonUp(0);

		client.expect.element(elementSelector).to.have.css('left').which.equals('300px');
		client.expect.element(elementSelector).to.have.css('top').which.equals('300px');

		client.end();
	},
	'CanVTextResizable': function (client) {
		let elementSelector = '#Object1';
		let iconForResizableSelector = '.ui-icon-gripsmall-diagonal-se';

		client
			.url('http://127.0.0.1:8000/Index.html')
			.assert.cssClassPresent(elementSelector, 'ui-resizable')
			.moveToElement(iconForResizableSelector, 0, 0)
			.mouseButtonDown(0)
			.moveToElement('body', 200, 150)
			.mouseButtonUp(0);

		client.expect.element(elementSelector).to.have.css('height').which.equals('171px');
		client.expect.element(elementSelector).to.have.css('width').which.equals('221px');

		client.end();
	}

};