System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PanelComponent = (function () {
                function PanelComponent() {
                    this.showFooter = true;
                    this.backClicked = new core_1.EventEmitter();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PanelComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PanelComponent.prototype, "showFooter", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PanelComponent.prototype, "backClicked", void 0);
                PanelComponent = __decorate([
                    core_1.Component({
                        selector: 'panel',
                        templateUrl: 'app/shared/panel.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelComponent);
                return PanelComponent;
            }());
            exports_1("PanelComponent", PanelComponent);
        }
    }
});
//# sourceMappingURL=panel.component.js.map