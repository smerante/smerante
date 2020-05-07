import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
    SMButtonComponent.ɵfac = function SMButtonComponent_Factory(t) { return new (t || SMButtonComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SMButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SMButtonComponent, selectors: [["sm-button"]], inputs: { type: "type" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sm-button"]], template: function SMButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SMButtonComponent;
}());
export { SMButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SMButtonComponent, [{
        type: Component,
        args: [{
                selector: 'sm-button',
                templateUrl: './button.component.html'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzbWVyYW50ZS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQzs7O0FBRWhGO0lBUUUsMkJBQW9CLFFBQW1CLEVBQVUsSUFBZ0I7UUFBN0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXRFLG9DQUFRLEdBQVI7UUFDSSxJQUFNLGFBQWEsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTZCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxnQkFBYyxJQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQztzRkFUVSxpQkFBaUI7MERBQWpCLGlCQUFpQjs7WUNOOUIsaUNBQTBCO1lBQUEsa0JBQVk7WUFBYSxpQkFBUzs7NEJEQTVEO0NBaUJDLEFBZkQsSUFlQztTQVhZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjthQUN2Qzs7a0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NtLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNNQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0eXBlOiAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9ICh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJ1dHRvbkVsZW1lbnQsIGBzbS1idXR0b24tLSR7dGhpcy50eXBlfWApO1xuICB9XG5cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJzbS1idXR0b25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9idXR0b24+Il19