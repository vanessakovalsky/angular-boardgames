import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
   }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = "green";
  }

}
