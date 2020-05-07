import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SMButtonComponent {
    constructor(renderer, host) {
        this.renderer = renderer;
        this.host = host;
    }
    ngOnInit() {
        const buttonElement = this.host.nativeElement.querySelector('button');
        this.renderer.addClass(buttonElement, `sm-button--${this.type}`);
    }
}
SMButtonComponent.ɵfac = function SMButtonComponent_Factory(t) { return new (t || SMButtonComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
SMButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SMButtonComponent, selectors: [["sm-button"]], inputs: { type: "type" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "sm-button"]], template: function SMButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SMButtonComponent, [{
        type: Component,
        args: [{
                selector: 'sm-button',
                templateUrl: './button.component.html'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzbWVyYW50ZS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQzs7O0FBTWhGLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsUUFBbUIsRUFBVSxJQUFnQjtRQUE3QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFdEUsUUFBUTtRQUNKLE1BQU0sYUFBYSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7a0ZBVFUsaUJBQWlCO3NEQUFqQixpQkFBaUI7O1FDTjlCLGlDQUEwQjtRQUFBLGtCQUFZO1FBQWEsaUJBQVM7O2tERE0vQyxpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUseUJBQXlCO2FBQ3ZDOztrQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc20tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU01CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHR5cGU6ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYnV0dG9uRWxlbWVudCwgYHNtLWJ1dHRvbi0tJHt0aGlzLnR5cGV9YCk7XG4gIH1cblxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cInNtLWJ1dHRvblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2J1dHRvbj4iXX0=