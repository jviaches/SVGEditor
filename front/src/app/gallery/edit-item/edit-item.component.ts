import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RectItem } from 'src/app/core/models/rectangle.item.model';
import { CircleItem } from 'src/app/core/models/circle.item.model';
import { SVGItem } from 'src/app/core/models/svg.item';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, AfterViewInit {

  allItems: SVGItem[] = [];

  constructor(public svgService: SvgService) { }

  ngOnInit(): void {
    this.createTestImages();
  }

  ngAfterViewInit(): void {
  }

  private createTestImages() {
    const rectItem = new RectItem();
    rectItem.id = '1';
    (rectItem as RectItem).x = '10';
    (rectItem as RectItem).y = '20';
    (rectItem as RectItem).width = '200';
    (rectItem as RectItem).height = '400';
    (rectItem as RectItem).fill = 'green';

    const rect = document.createElement('rect');
    rect.setAttribute('id', (rectItem as RectItem).id);
    rect.setAttribute('x', (rectItem as RectItem).x);
    rect.setAttribute('y', (rectItem as RectItem).y);
    rect.setAttribute('width', (rectItem as RectItem).width);
    rect.setAttribute('height', (rectItem as RectItem).height);
    rect.setAttribute('fill', (rectItem as RectItem).fill);

    this.allItems.push(rectItem);

    const circleItem = new CircleItem();
    circleItem.id = '2';
    (circleItem as CircleItem).cx = '200';
    (circleItem as CircleItem).cy = '400';
    (circleItem as CircleItem).r = '25';
    (circleItem as CircleItem).fill = 'yellow';

    const circle = document.createElement('circle');
    circle.setAttribute('id', (circleItem as CircleItem).id);
    circle.setAttribute('cx', (circleItem as CircleItem).cx);
    circle.setAttribute('cy', (circleItem as CircleItem).cy);
    circle.setAttribute('cy', (circleItem as CircleItem).r);
    circle.setAttribute('fill', (circleItem as CircleItem).fill);

    this.allItems.push(circleItem);
    // console.log('allItems: ' + JSON.stringify(this.allItems));
  }
}
