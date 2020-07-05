import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  // private resizingElement: any;
  // private bounderElementLeftTop: any;
  // private bounderElementRighTop: any;
  // private bounderElementLeftBottom: any;
  // private bounderElementRighBottom: any;

  constructor() { }

  // @HostListener('mouseenter', ['$event'])
  // onMouseMove(event): void {
  //   this.resizingElement = document.getElementById('svg_container') as any;
  //   const bbox = event.target.getBBox();

  //   this.bounderElementLeftTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  //   this.bounderElementLeftTop.setAttribute('cx', bbox.x);
  //   this.bounderElementLeftTop.setAttribute('cy', bbox.y);
  //   this.bounderElementLeftTop.setAttribute('r', '5');
  //   this.bounderElementLeftTop.setAttribute('fill', 'blue');

  //   this.resizingElement.appendChild(this.bounderElementLeftTop);

  //   this.bounderElementRighTop = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  //   this.bounderElementRighTop.setAttribute('cx', bbox.width + bbox.x);
  //   this.bounderElementRighTop.setAttribute('cy', bbox.y);
  //   this.bounderElementRighTop.setAttribute('r', '5');
  //   this.bounderElementRighTop.setAttribute('fill', 'red');

  //   this.resizingElement.appendChild(this.bounderElementRighTop);

  //   this.bounderElementLeftBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  //   this.bounderElementLeftBottom.setAttribute('cx', bbox.x);
  //   this.bounderElementLeftBottom.setAttribute('cy', bbox.y + bbox.height);
  //   this.bounderElementLeftBottom.setAttribute('r', '5');
  //   this.bounderElementLeftBottom.setAttribute('fill', 'yellow');

  //   this.resizingElement.appendChild(this.bounderElementLeftBottom);

  //   this.bounderElementRighBottom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  //   this.bounderElementRighBottom.setAttribute('cx', bbox.x + bbox.width);
  //   this.bounderElementRighBottom.setAttribute('cy', bbox.y + bbox.height);
  //   this.bounderElementRighBottom.setAttribute('r', '5');
  //   this.bounderElementRighBottom.setAttribute('fill', 'green');

  //   this.resizingElement.appendChild(this.bounderElementRighBottom);
  // }

  // @HostListener('mouseout', ['$event'])
  // onMouseOut(event): void {
  //   if (this.resizingElement.contains(this.bounderElementLeftTop)) {
  //     this.resizingElement.removeChild(this.bounderElementLeftTop);
  //   }

  //   if (this.resizingElement.contains(this.bounderElementRighTop)) {
  //     this.resizingElement.removeChild(this.bounderElementRighTop);
  //   }

  //   if (this.resizingElement.contains(this.bounderElementLeftBottom)) {
  //     this.resizingElement.removeChild(this.bounderElementLeftBottom);
  //   }

  //   if (this.resizingElement.contains(this.bounderElementRighBottom)) {
  //     this.resizingElement.removeChild(this.bounderElementRighBottom);
  //   }
  // }
}
