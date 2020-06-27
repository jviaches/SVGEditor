import { Directive, HostListener } from '@angular/core';
import { SvgService } from '../services/svg.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  private draggingElement: any;

  constructor(private svgService: SvgService) {}

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const dropzone = event.target;
    const droppedElementId = event.dataTransfer.getData('text');
    const droppedElement = document.getElementById(droppedElementId) as any;

    dropzone.appendChild(droppedElement);

    droppedElement.setAttribute('draggable', true);

    const svgPoint = this.svgService.getSVGPoint(event, droppedElement);
    this.setPosition(droppedElement, { x: svgPoint.x, y: svgPoint.y  });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event): void {
    if (this.draggingElement) {
      const svgPoint = this.svgService.getSVGPoint(event, this.draggingElement);
      this.setPosition(this.draggingElement, { x: svgPoint.x, y: svgPoint.y  });
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    if (event.target.getAttribute('draggable')) {
      this.draggingElement = event.target;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event): void {
    this.draggingElement = null;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    this.draggingElement = null;
  }

  private setPosition(element: SVGElement, coord: { x, y }) {
    if (element instanceof SVGRectElement) {
      element.setAttribute('x', coord.x);
      element.setAttribute('y', coord.y);
    }
    else if (element instanceof SVGCircleElement) {
      element.setAttribute('cx', coord.x);
      element.setAttribute('cy', coord.y);
    }
  }
}
