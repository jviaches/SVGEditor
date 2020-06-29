import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SVGItem } from 'src/app/core/models/svg.item';
import { SvgService } from 'src/app/core/services/svg.service';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements AfterViewInit {

  selectedItem: SVGItem;
  svgWidth = '1440';
  svgHeight = '900';
  @ViewChild('svg_container', { static: false }) svgContainer: any;

  constructor(public svgService: SvgService, private generalService: GeneralService) { }

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

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete' && this.selectedItem) {
      this.generalService.showYesNoModalMessage().subscribe(data => {
        if (data === 'yes') {
          this.svgService.deleteItem(this.selectedItem);
        }
      });
    }
  }
}
