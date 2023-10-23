import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
})
export class ChangeBackgroundDirective implements OnInit {
  // BAD

  // constructor(elRef: ElementRef) {
  //   console.log(elRef);
  //   debugger;
  //   elRef.nativeElement.style.backgroundColor = 'red';
  // }

  // GOOD CODE

  // constructor(private renderer: Renderer2, private eleRef: ElementRef) {
  //   console.log(
  //     this.renderer.setStyle(
  //       this.eleRef.nativeElement,
  //       'backgroundColor',
  //       'blue'
  //     )
  //   );
  // }

  // constructor() {}
  // @HostBinding('style.backgroundColor') background: string = 'transparent';
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.background = 'yellow';
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.background = 'transparent';
  // }
  constructor() {}
  @Input('appChangeBackground') bgColor: string;

  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostListener('mouseenter') onMouseEnter() {
    this.background = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'transparent';
  }
  ngOnInit() {}
}
