let workspace = new Workspace();


document.onpaste = function (event) {
	// use event.originalEvent.clipboard for newer chrome versions
	let dataTransfer = new DataTransferHelper(event.clipboardData);

	if(dataTransfer.isText()){
		console.log('This is text!!');
		workspace.addVText(dataTransfer.getText());
	}
	if(dataTransfer.isImage()){
		console.log('This is Image!!');
		workspace.addVImage(dataTransfer.getImage());
	}
};