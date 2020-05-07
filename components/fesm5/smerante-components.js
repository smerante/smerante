import { ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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
    SMButtonComponent.ɵfac = function SMButtonComponent_Factory(t) { return new (t || SMButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    SMButtonComponent.ɵcmp = ɵɵdefineComponent({ type: SMButtonComponent, selectors: [["sm-button"]], inputs: { type: "type" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sm-button"]], template: function SMButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SMButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SMButtonComponent, [{
        type: Component,
        args: [{
                selector: 'sm-button',
                templateUrl: './button.component.html'
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { type: [{
            type: Input
        }] }); })();

var components = [
    SMButtonComponent
];
var SMComponentsModule = /** @class */ (function () {
    function SMComponentsModule() {
    }
    SMComponentsModule.ɵmod = ɵɵdefineNgModule({ type: SMComponentsModule });
    SMComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function SMComponentsModule_Factory(t) { return new (t || SMComponentsModule)(); }, imports: [[]] });
    return SMComponentsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SMComponentsModule, { declarations: [SMButtonComponent], exports: [SMButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SMComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [components],
                imports: [],
                exports: [components]
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SMButtonComponent, SMComponentsModule };
//# sourceMappingURL=smerante-components.js.map
