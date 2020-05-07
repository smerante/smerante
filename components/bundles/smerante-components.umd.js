(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@smerante/components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.smerante = global.smerante || {}, global.smerante.components = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var _c0 = ["*"];
    var SMButtonComponent = /** @class */ (function () {
        function SMButtonComponent(renderer, host) {
            this.renderer = renderer;
            this.host = host;
        }
        SMButtonComponent.prototype.ngOnInit = function () {
            var buttonElement = this.host.nativeElement.querySelector('button');
            this.renderer.addClass(buttonElement, "sm-button--" + this.type);
        };
        SMButtonComponent.ɵfac = function SMButtonComponent_Factory(t) { return new (t || SMButtonComponent)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef)); };
        SMButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: SMButtonComponent, selectors: [["sm-button"]], inputs: { type: "type" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sm-button"]], template: function SMButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "button", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return SMButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SMButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: 'sm-button',
                    templateUrl: './button.component.html'
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { type: [{
                type: core.Input
            }] }); })();

    var components = [
        SMButtonComponent
    ];
    var SMComponentsModule = /** @class */ (function () {
        function SMComponentsModule() {
        }
        SMComponentsModule.ɵmod = core.ɵɵdefineNgModule({ type: SMComponentsModule });
        SMComponentsModule.ɵinj = core.ɵɵdefineInjector({ factory: function SMComponentsModule_Factory(t) { return new (t || SMComponentsModule)(); }, imports: [[]] });
        return SMComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(SMComponentsModule, { declarations: [SMButtonComponent], exports: [SMButtonComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SMComponentsModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [components],
                    imports: [],
                    exports: [components]
                }]
        }], null, null); })();

    exports.SMButtonComponent = SMButtonComponent;
    exports.SMComponentsModule = SMComponentsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smerante-components.umd.js.map
