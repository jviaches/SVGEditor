import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SVGItem } from 'src/app/core/models/svg.item';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements AfterViewInit {

  selectedItem: SVGItem;
  @ViewChild('svg_container', { static: false }) svgContainer: any;

  constructor(public svgService: SvgService) { }

  ngAfterViewInit(): void {
    this.svgService.createTestImages();
  }

  shapeSelection(item: SVGItem) {
    this.selectedItem = item;
  }

  saveAsPng() {
    console.log(this.svgContainer.nativeElement);
    this.svgService.convertImagetoSVG(this.svgContainer.nativeElement);
  }
}
