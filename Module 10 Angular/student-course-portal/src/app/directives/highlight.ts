import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  mouseEnter() {
    this.element.nativeElement.style.backgroundColor = '#fff8dc';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }

}