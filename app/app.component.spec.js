System.register(['./app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('app component', function () {
                it('returns correct name', function () {
                    var cpnt = new app_component_1.AppComponent();
                    var result = cpnt.pageTitle();
                    expect(result).toEqual("Music Store");
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map