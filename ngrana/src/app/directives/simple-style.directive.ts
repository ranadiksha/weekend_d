import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimpleStyle]',
})
export class SimpleStyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.textShadow = '2px 2px 3px red';
  }
}
