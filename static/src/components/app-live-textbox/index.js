$rmod.def("/src/components/app-live-textbox/index", function(require, exports, module, __filename, __dirname) { var app = require('/src/app'/*'src/app'*/);

module.exports = require('/$/marko-widgets'/*'marko-widgets'*/).defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {

        };
    },
    getTemplateData: function(state, input) {
        return {

        };
    },
    init: function() {
        $('#new-name').keyup(function(event) {
            var name = $(this).val();
            app.setName(name);
        });
    }
});
});