import { Directive, ElementRef, HostListener } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { SVGItem } from '../models/svg.item';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  private cornerExpanderDelta = 5;
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
      if (this.svgService.isRectangle(shape) || this.svgService.isCircle(shape) || this.svgService.isText(shape)) {
        this.setPosition(this.draggingElement,
          {
            x: Number(shape.attributes[0].value) + deltaX,
            y: Number(shape.attributes[1].value) + deltaY
          });
      }

      else if (this.svgService.isLine(shape)) {
        this.setLinePosition(this.draggingElement,
          {
            x1: Number(shape.attributes[0].value) + deltaX,
            y1: Number(shape.attributes[1].value) + deltaY,
            x2: Number(shape.attributes[2].value) + deltaX,
            y2: Number(shape.attributes[3].value) + deltaY,

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
    else if (this.svgService.isText(shape)) {
      element.setAttribute('x', coord.x);
      element.setAttribute('y', coord.y);

      shape.attributes[0].value = coord.x;
      shape.attributes[1].value = coord.y;
    // } else if(element.innerHTML.startsWith("<div>"))
    // {
    //   element.setAttribute('x', coord.x);
    //   element.setAttribute('y', coord.y);

    //   shape.attributes[0].value = coord.x;
    //   shape.attributes[1].value = coord.y;
    }     
  }

  private setLinePosition(element: SVGElement, coord: { x1, y1, x2, y2 }) {
    const shape: SVGItem = this.svgService.editedIems.find(item => item.id === element.id);

    if (this.svgService.isLine(shape)) {
      element.setAttribute('x1', coord.x1);
      element.setAttribute('y1', coord.y1);
      element.setAttribute('x2', coord.x2);
      element.setAttribute('y2', coord.y2);


      shape.attributes[0].value = coord.x1;
      shape.attributes[1].value = coord.y1;
      shape.attributes[2].value = coord.x2;
      shape.attributes[3].value = coord.y2;
    }
  }

  private addSelection(event) {
    this.svgContainer = document.getElementById('svg_container') as any;
    const bbox = event.target.getBBox();

    this.bounderElementLeftTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementLeftTop.setAttribute('cx', bbox.x - this.cornerExpanderDelta);
    this.bounderElementLeftTop.setAttribute('cy', bbox.y - this.cornerExpanderDelta);
    this.bounderElementLeftTop.setAttribute('r', '5');
    this.bounderElementLeftTop.setAttribute('fill', 'blue');

    this.svgContainer.appendChild(this.bounderElementLeftTop);

    this.bounderElementRighTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementRighTop.setAttribute('cx', bbox.width + bbox.x + this.cornerExpanderDelta);
    this.bounderElementRighTop.setAttribute('cy', bbox.y - this.cornerExpanderDelta);
    this.bounderElementRighTop.setAttribute('r', '5');
    this.bounderElementRighTop.setAttribute('fill', 'red');

    this.svgContainer.appendChild(this.bounderElementRighTop);

    this.bounderElementLeftBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementLeftBottom.setAttribute('cx', bbox.x - this.cornerExpanderDelta);
    this.bounderElementLeftBottom.setAttribute('cy', bbox.y + bbox.height + this.cornerExpanderDelta);
    this.bounderElementLeftBottom.setAttribute('r', '5');
    this.bounderElementLeftBottom.setAttribute('fill', 'yellow');

    this.svgContainer.appendChild(this.bounderElementLeftBottom);

    this.bounderElementRighBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.bounderElementRighBottom.setAttribute('cx', bbox.x + bbox.width + this.cornerExpanderDelta);
    this.bounderElementRighBottom.setAttribute('cy', bbox.y + bbox.height + this.cornerExpanderDelta);
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
