import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { SVGItem } from 'src/app/core/models/svg.item';
import { SvgService } from 'src/app/core/services/svg.service';
import { GeneralService } from 'src/app/core/services/general.service';
import { ShapeToolbarComponent } from 'src/app/core/components/toolbar/shape-toolbar/shape-toolbar.component';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements AfterViewInit {

  selectedItem: SVGItem;
  svgWidth = '1440';
  svgHeight = '900';
  svgBackgroundColor = '#FF6138';
  @ViewChild('svg_container', { static: false }) svgContainer: any;
  @ViewChild(ShapeToolbarComponent, { static: false }) shapeToolbar: ShapeToolbarComponent;

  constructor(public svgService: SvgService, private generalService: GeneralService) { }

  ngAfterViewInit(): void {
    this.shapeToolbar.selectionChange.subscribe(data => {
      console.log(data);
    });

    this.svgService.createTestImages();
  }

  svgContainerSelection(event: MouseEvent) {
    if (this.shapeToolbar.selectedTool === 'rectangle') { // TODO: change to enum ??
      this.svgService.createRectangle(event.offsetX, event.offsetY);
      this.shapeToolbar.resetSelection();
    } else if (this.shapeToolbar.selectedTool === 'circle') {
      this.svgService.createCircle(event.offsetX, event.offsetY);
      this.shapeToolbar.resetSelection();
    }
  }
  shapeSelection(item: SVGItem) {
    this.selectedItem = item;
  }

  saveAsPng() {
    this.svgService.convertImagetoSVG(this.svgContainer.nativeElement);
  }

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete' && this.selectedItem) {
      this.generalService.showYesNoModalMessage().subscribe(data => {
        if (data === 'yes') {
          this.svgService.deleteItem(this.selectedItem);
          this.selectedItem = null;
        }
      });
    }
  }
}
