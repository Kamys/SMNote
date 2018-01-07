$(function () {
    let idCount;

    function generateId() {
        idCount++;
        return idCount;
    }

    function VObject() {
        /**
         * @type {jQuery}
         */
        let element;
        init();

        function init() {
            element = $(`<div id="Object${generateId()}" class="workspace__v-object"></div>`);
            let workspace = $('#workspace');
            element.draggable({
                containment: workspace,
                start: focused,
                stop: focused
            });
            element.resizable({
                autoHide: false,
                containment: workspace,
                start: focused,
                stop: focused
            });
            workspace.append(element);
        }

        function focused() {
            $(this).toggleClass('workspace__v-object_focused');
        }

        this.getElement = function () {
            return element;
        };
    }
});