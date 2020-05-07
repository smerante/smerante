import { OnInit, Renderer2, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SMButtonComponent implements OnInit {
    private renderer;
    private host;
    type: 'secondary' | 'tertiary';
    constructor(renderer: Renderer2, host: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SMButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SMButtonComponent, "sm-button", never, { "type": "type"; }, {}, never, ["*"]>;
}
