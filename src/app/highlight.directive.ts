import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) { }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        this.el.nativeElement.style.borderColor = color;
    }
}