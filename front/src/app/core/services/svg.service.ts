import { Injectable } from '@angular/core';
import { SVGItem } from '../models/svg.item';
import { RectItem } from '../models/rectangle.item.model';
import { CircleItem } from '../models/circle.item.model';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  editedIems: SVGItem[] = [];

  constructor() {
  }

  getSVGPoint(event, element): SVGPoint {
    // get the mouse coordinates and set them to the SVG point
    const point = element.viewportElement.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;

    const CTM = element.viewportElement.getScreenCTM();
    const svgPoint = point.matrixTransform(CTM.inverse());

    return svgPoint;
  }

  isRectangle(item: SVGItem) {
    return item instanceof RectItem;
  }

  isCircle(item: SVGItem) {
    return item instanceof CircleItem;
  }

  createTestImages() {
    const rectItem = new RectItem();
    rectItem.id = '1';
    rectItem.attributes[0].value = '10';  // x
    rectItem.attributes[1].value = '20';  // y
    rectItem.attributes[2].value = '200'; // width
    rectItem.attributes[3].value = '400'; // height
    rectItem.attributes[4].value = 'green'; // fill

    const rect = document.createElement('rect');
    rect.setAttribute('id', rectItem.id);
    rect.setAttribute('x', rectItem.attributes[0].value);
    rect.setAttribute('y', rectItem.attributes[1].value);
    rect.setAttribute('width', rectItem.attributes[2].value);
    rect.setAttribute('height', rectItem.attributes[3].value);
    rect.setAttribute('fill', rectItem.attributes[4].value);

    this.editedIems.push(rectItem);

    const circleItem = new CircleItem();
    circleItem.id = '2';
    circleItem.attributes[0].value = '200'; // cx
    circleItem.attributes[1].value = '400'; // cy
    circleItem.attributes[2].value = '25'; // r
    circleItem.attributes[3].value = 'yellow'; // fill

    const circle = document.createElement('circle');
    circle.setAttribute('id', circleItem.id);
    circle.setAttribute('cx', circleItem.attributes[0].value);
    circle.setAttribute('cy', circleItem.attributes[1].value);
    circle.setAttribute('r', circleItem.attributes[2].value);
    circle.setAttribute('fill', circleItem.attributes[3].value);

    this.editedIems.push(circleItem);
  }

  convertImagetoSVG(svg: any) {
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgBlob = new Blob([preface, svg.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  deleteItem(selectedItem: SVGItem) {
        const itemIndex = this.editedIems.indexOf(selectedItem);
        this.editedIems.splice(itemIndex, 1);
  }
}
