module.exports = {
	'Drag and Drop': function (client) {
		client
			.url('http://127.0.0.1:8000/Index.html')
			.useCss()
			.moveToElement('#Object1', 0, 0)
			.mouseButtonDown(0)
			.moveToElement('body', 300, 300)
			.mouseButtonUp(0)
			.assert.containsText('#Object1', 'Hello world it SMNote!!')
			.pause(1000);

		client.expect.element('#Object1').to.be.visible;
		client.end();
	}
};