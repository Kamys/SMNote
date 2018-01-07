function VText(text) {
    let element;
    init();

    function init() {
        element = $(`<p class="workspace__v-text workspace__v-text_noselect">${text}</p>`);
        let vObject = new VObject();
        let textArea;
        vObject.getElement().dblclick(function () {
            if (textArea) {
                return;
            }
            textArea = $('<textarea class="workspace__v-text workspace__v-text_noresize"></textarea>');
            textArea.val(element.text());
            element.hide();
            element.after(textArea);

            textArea.focus();
            textArea.on('blur', function () {
                if (!textArea) {
                    return;
                }
                element.text(textArea.val());
                element.show();
                textArea.remove();
                textArea = null;
            });
        });

        vObject.getElement().append(element);
    }
};
