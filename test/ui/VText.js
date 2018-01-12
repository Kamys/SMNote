let elementSelector = '#VObject1';
var expect = require('chai').expect;
module.exports = {
	'CanVTextDragAndDrop': function (client) {
		client
			.url('http://127.0.0.1:8000/Index.html')
			.assert.cssClassPresent(elementSelector, 'ui-draggable')
			.moveToElement('.v-text__edit-label', 0, 0)
			.mouseButtonDown(0)
			.moveToElement('body', 300, 300)
			.mouseButtonUp(0);

		client.getLocation(elementSelector, function(result) {
			this.assert.equal(typeof result, 'object');
			this.assert.equal(result.status, 0);
			this.assert(result.value.x).to.be.true;
			this.assert.equal(result.value.y, 200);
		});

		client.end();
	},
	'CanVTextResizable': function (client) {
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