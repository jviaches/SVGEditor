import { Directive, ElementRef, HostListener } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { SVGItem } from '../models/svg.item';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  private draggingElement: SVGElement;
  private svgContainer: any;

  private prevMouseScreenX: number;
  private prevMouseScreenY: number;

  private bounderElementLeftTop: any;
  private bounderElementRighTop: any;
  private bounderElementLeftBottom: any;
  private bounderElementRighBottom: any;

  constructor(private el: ElementRef, private svgService: SvgService) {
    this.el.nativeElement.setAttribute('draggable', true);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event): void {
    this.addSelection(event);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event): void {
    if (this.draggingElement) {
      const deltaX = event.screenX - this.prevMouseScreenX;
      const deltaY = event.screenY - this.prevMouseScreenY;
      this.prevMouseScreenX = event.screenX;
      this.prevMouseScreenY = event.screenY;

      const shape: SVGItem = this.svgService.editedIems.find(item => item.id === this.draggingElement.id);
      if (this.svgService.isRectangle(shape) || this.svgService.isCircle(shape)) {
        this.setPosition(this.draggingElement,
          {
            x: Number(shape.attributes[0].value) + deltaX,
            y: Number(shape.attributes[1].value) + deltaY
          });
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event): void {
    this.removeSelection();
    if (event.target.getAttribute('draggable')) {
      this.draggingElement = event.target;
      this.prevMouseScreenX = event.screenX;
      this.prevMouseScreenY = event.screenY;
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.draggingElement = null;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.draggingElement = null;
    this.removeSelection();
  }

  private setPosition(element: SVGElement, coord: { x, y }) {
    const shape: SVGItem = this.svgService.editedIems.find(item => item.id === element.id);

    if (this.svgService.isRectangle(shape)) {
      element.setAttribute('x', coord.x);
      element.setAttribute('y', coord.y);

      shape.attributes[0].value = coord.x;
      shape.attributes[1].value = coord.y;
    }
    else if (this.svgService.isCircle(shape)) {
      element.setAttribute('cx', coord.x);
      element.setAttribute('cy', coord.y);

      shape.attributes[0].value = coord.x;
      shape.attributes[1].value = coord.y;
    }
  }

  private addSelection(event) {
    this.svgContainer = document.getElementById('svg_container') as any;
    const bbox = event.target.getBBox();

    this.bounderElementLeftTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementLeftTop.setAttribute('cx', bbox.x);
    this.bounderElementLeftTop.setAttribute('cy', bbox.y);
    this.bounderElementLeftTop.setAttribute('r', '5');
    this.bounderElementLeftTop.setAttribute('fill', 'blue');

    this.svgContainer.appendChild(this.bounderElementLeftTop);

    this.bounderElementRighTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementRighTop.setAttribute('cx', bbox.width + bbox.x);
    this.bounderElementRighTop.setAttribute('cy', bbox.y);
    this.bounderElementRighTop.setAttribute('r', '5');
    this.bounderElementRighTop.setAttribute('fill', 'red');

    this.svgContainer.appendChild(this.bounderElementRighTop);

    this.bounderElementLeftBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementLeftBottom.setAttribute('cx', bbox.x);
    this.bounderElementLeftBottom.setAttribute('cy', bbox.y + bbox.height);
    this.bounderElementLeftBottom.setAttribute('r', '5');
    this.bounderElementLeftBottom.setAttribute('fill', 'yellow');

    this.svgContainer.appendChild(this.bounderElementLeftBottom);

    this.bounderElementRighBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementRighBottom.setAttribute('cx', bbox.x + bbox.width);
    this.bounderElementRighBottom.setAttribute('cy', bbox.y + bbox.height);
    this.bounderElementRighBottom.setAttribute('r', '5');
    this.bounderElementRighBottom.setAttribute('fill', 'green');

    this.svgContainer.appendChild(this.bounderElementRighBottom);
  }

  private removeSelection() {

    if (!this.svgContainer) {
      return;
    }

    if (this.svgContainer.contains(this.bounderElementLeftTop)) {
      this.svgContainer.removeChild(this.bounderElementLeftTop);
    }

    if (this.svgContainer.contains(this.bounderElementRighTop)) {
      this.svgContainer.removeChild(this.bounderElementRighTop);
    }

    if (this.svgContainer.contains(this.bounderElementLeftBottom)) {
      this.svgContainer.removeChild(this.bounderElementLeftBottom);
    }

    if (this.svgContainer.contains(this.bounderElementRighBottom)) {
      this.svgContainer.removeChild(this.bounderElementRighBottom);
    }
  }
}
