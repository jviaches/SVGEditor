import { Injectable } from '@angular/core';
import { SVGItem } from '../models/svg.item';
import { RectItem } from '../models/rectangle.item.model';
import { CircleItem } from '../models/circle.item.model';
import { PathItem } from '../models/path.item.model';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  editedIems: SVGItem[] = [];

  constructor() {
  }

  isRectangle(item: SVGItem) {
    return item instanceof RectItem;
  }

  isPath(item: SVGItem) {
    return item instanceof PathItem;
  }

  isCircle(item: SVGItem) {
    return item instanceof CircleItem;
  }

  createTestImages() {
    const rectItem = new RectItem();
    rectItem.id = '1';
    rectItem.attributes[0].value = '10';  // x
    rectItem.attributes[1].value = '20';  // y
    rectItem.attributes[2].value = '500'; // width
    rectItem.attributes[3].value = '400'; // height
    rectItem.attributes[4].value = 'green'; // fill

    this.editedIems.push(rectItem);

    const circleItem = new CircleItem();
    circleItem.id = '2';
    circleItem.attributes[0].value = '200'; // cx
    circleItem.attributes[1].value = '400'; // cy
    circleItem.attributes[2].value = '25'; // r
    circleItem.attributes[3].value = 'yellow'; // fill

    this.editedIems.push(circleItem);

    const pathItem = new PathItem();
    pathItem.id = '3';
    pathItem.attributes[0].value = 'M150 0 L75 200 L225 200 Z'; // cx

    this.editedIems.push(pathItem);
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
