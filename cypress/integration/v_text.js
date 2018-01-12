describe('My First Test', function() {
	it('Visits the Kitchen Sink', function() {
		cy.visit('http://127.0.0.1:8000/Index.html');

		cy.get('.v-text__edit-label')
			.trigger('mousedown', { which: 1 })
			.trigger('mousemove', { clientX: 200, clientY: 200 })
			.trigger('mouseup', {force: true});
	});
});