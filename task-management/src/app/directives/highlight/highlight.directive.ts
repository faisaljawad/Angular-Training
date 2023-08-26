import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight!: string; // Task priority

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const priority = this.appHighlight.toLowerCase();
    const color = priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'green';

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
