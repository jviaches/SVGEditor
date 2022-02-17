import { Injectable } from '@angular/core';
import { SVGItem } from '../models/svg.item';
import { RectItem } from '../models/rectangle.item.model';
import { CircleItem } from '../models/circle.item.model';
import { PathItem } from '../models/path.item.model';
import { TextItem } from '../models/text.item';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { LineItem } from '../models/line.item.model';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  editedIems: SVGItem[] = [];
  private lastGeneratedElementId = 0;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
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

  
  isText(item: SVGItem) {
    return item instanceof TextItem;
  }

  isLine(item: SVGItem) {
    return item instanceof LineItem;
  }


  generatedId(){
    return ++this.lastGeneratedElementId;
  }

  parseGalleryItem() {
    this.http.get('assets/gallery/user-responses/aaa.svg', { responseType: 'text' })
    .subscribe(logo => {
      var svgImageitem = this.sanitizer.bypassSecurityTrustHtml(logo);
      var a: SVGElement = svgImageitem as SVGElement;
      console.log(a);
    });
}
  

  createTestImages() {
    const baseCardItem = new RectItem();
    baseCardItem.id = this.generatedId().toString();
    baseCardItem.attributes[0].value = '10';  // x
    baseCardItem.attributes[1].value = '20';  // y
    baseCardItem.attributes[2].value = '600'; // width
    baseCardItem.attributes[3].value = '300'; // height
    baseCardItem.attributes[4].value = 'gray'; // fill

    this.editedIems.push(baseCardItem);

    const leftBarItemItem = new RectItem();
    leftBarItemItem.id = this.generatedId().toString();
    leftBarItemItem.attributes[0].value = '10';  // x
    leftBarItemItem.attributes[1].value = '20';  // y
    leftBarItemItem.attributes[2].value = '160'; // width
    leftBarItemItem.attributes[3].value = '300'; // height
    leftBarItemItem.attributes[4].value = 'white'; // fill

    this.editedIems.push(leftBarItemItem);

    const circleItem = new CircleItem();
    circleItem.id = this.generatedId().toString();
    circleItem.attributes[0].value = '170'; // cx
    circleItem.attributes[1].value = '150'; // cy
    circleItem.attributes[2].value = '60'; // r
    circleItem.attributes[3].value = 'yellow'; // fill

    this.editedIems.push(circleItem);

    const mainTextItem = new TextItem();
    mainTextItem.id = this.generatedId().toString();
    mainTextItem.attributes[0].value = '260'; // x
    mainTextItem.attributes[1].value = '50'; // y
    mainTextItem.attributes[2].value = 'small'; // class
    mainTextItem.attributes[3].value = 'Lorem ipsum dolorem faksdfzk jsdhfgamjks dfga kisdf ga slkjdfgh SMJDhf gSMJdfgj sdfg f Sdjgfjsdfgjsdfgk fjasdgfka ds fajsdgf aksdgf akdsf kasdgf kajs'; // class
    mainTextItem.attributes[4].value = "100";

    this.editedIems.push(mainTextItem);

    const nameTextItem = new TextItem();
    nameTextItem.id = this.generatedId().toString();
    nameTextItem.attributes[0].value = '260'; // x
    nameTextItem.attributes[1].value = '150'; // y
    nameTextItem.attributes[2].value = 'small'; // class
    nameTextItem.attributes[3].value = 'First Last name'; // text
    nameTextItem.attributes[4].value = "20";

    this.editedIems.push(nameTextItem);

    const positionTextItem = new TextItem();
    positionTextItem.id = this.generatedId().toString();
    positionTextItem.attributes[0].value = '260'; // x
    positionTextItem.attributes[1].value = '180'; // y
    positionTextItem.attributes[2].value = 'small'; // class
    positionTextItem.attributes[3].value = 'Company position'; // text
    positionTextItem.attributes[4].value = "20";

    this.editedIems.push(positionTextItem);

    // <text x="20" y="35" class="small">My</text>


    // const pathItem = new PathItem();
    // pathItem.id = '3';
    // pathItem.attributes[0].value = 'M150 0 L75 200 L225 200 Z'; // cx

    // this.editedIems.push(pathItem);
  }

  createRectangle(x: number, y: number) {
    const size = 100;
    const xCoord = x - (size / 2);
    const yCoord = y - (size / 2);

    const rectItem = new RectItem();
    rectItem.id = this.generatedId().toString();
    rectItem.attributes[0].value = xCoord.toString();  // x
    rectItem.attributes[1].value = yCoord.toString();  // y
    rectItem.attributes[2].value = '100'; // width
    rectItem.attributes[3].value = '100'; // height
    rectItem.attributes[4].value = 'rgba(58,185,164,1)'; // fill

    this.editedIems.push(rectItem);
  }

  createText(x: number, y: number) {
    const radius = 25;
    const xCoord = x - (radius / 2);
    const yCoord = y - (radius / 2);

    const textItem = new TextItem();
    textItem.id = this.generatedId().toString();
    textItem.attributes[0].value = xCoord.toString();  // x
    textItem.attributes[1].value = yCoord.toString();  // y
    textItem.attributes[2].value = 'small'; // class
    textItem.attributes[3].value = 'Lorem ipsum dolorem'; // class

    this.editedIems.push(textItem);
  }
    
  createCircle(x: number, y: number) {
    const radius = 25;
    const xCoord = x - (radius / 2);
    const yCoord = y - (radius / 2);

    const circleItem = new CircleItem();
    circleItem.id = this.generatedId().toString();
    circleItem.attributes[0].value = xCoord.toString(); // cx
    circleItem.attributes[1].value = yCoord.toString(); // cy
    circleItem.attributes[2].value = radius.toString(); // r
    circleItem.attributes[3].value = 'yellow'; // fill

    this.editedIems.push(circleItem);
  }

  createLine(x1: number, y1: number, x2: number, y2: number) {
    const lineItem = new LineItem();
    lineItem.id = this.generatedId().toString();
    lineItem.attributes[0].value = x1.toString(); // x1
    lineItem.attributes[1].value = y1.toString(); // y1
    lineItem.attributes[2].value = x2.toString(); // x2
    lineItem.attributes[3].value = y2.toString(); // y2
    lineItem.attributes[4].value = "blue"; // stroke

    this.editedIems.push(lineItem);
    console.log(lineItem);
    
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
