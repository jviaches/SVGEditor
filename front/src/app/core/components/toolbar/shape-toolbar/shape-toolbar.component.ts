import { Component, AfterViewInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-shape-toolbar',
  templateUrl: './shape-toolbar.component.html',
  styleUrls: ['./shape-toolbar.component.scss']
})
export class ShapeToolbarComponent implements AfterViewInit {

  selectedTool: string;
  @Output() selectionChange = new EventEmitter();

  @ViewChild('rectangleTool', { static: false }) rectangleTool: MatButton;

  ngAfterViewInit(): void {
  }

  rectangleSelected() {
    if (this.selectedTool === 'rectangle') {
      this.selectedTool = null;
      this.rectangleTool.color = undefined;
      this.selectionChange.emit(undefined);
      return;
    }

    this.selectedTool = 'rectangle';
    this.rectangleTool.color = 'primary';
    this.selectionChange.emit('rectangle');
  }
}
