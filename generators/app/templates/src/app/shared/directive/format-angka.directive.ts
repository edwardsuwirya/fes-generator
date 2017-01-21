import {Directive, ElementRef, HostListener, Input} from '@angular/core';

declare let accounting: any;

@Directive({
    selector: '[appFormatAngka]'
})
export class FormatAngkaDirective {
    @Input('appFormatAngka')
    val: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event) {
        event.target.value = accounting.formatNumber(this.val);
    }

}
