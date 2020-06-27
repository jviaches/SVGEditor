import { Injectable } from '@angular/core';
import { SVGItem } from '../models/svg.item';
import { RectItem } from '../models/rectangle.item.model';
import { CircleItem } from '../models/circle.item.model';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor() { }

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
}
