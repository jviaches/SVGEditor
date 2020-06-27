import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('draggable', true);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const elementToBeDragged = event.target;
    event.dataTransfer.setData('text', elementToBeDragged.id);
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
  }
}
