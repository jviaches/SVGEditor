import { Component, AfterViewInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-shape-toolbar',
  templateUrl: './shape-toolbar.component.html',
  styleUrls: ['./shape-toolbar.component.scss']
})
export class ShapeToolbarComponent {

  selectedTool: string;
  @Output() selectionChange = new EventEmitter();

  @ViewChild('rectangleTool', { static: false }) rectangleTool: MatButton;
  @ViewChild('circleTool', { static: false }) circleTool: MatButton;

  rectangleSelected() {
    if (this.selectedTool === 'rectangle') {
      this.resetSelection();
      return;
    }

    this.selectedTool = 'rectangle';
    this.rectangleTool.color = 'primary';
    this.selectionChange.emit('rectangle');
  }

  circleSelected() {
    if (this.selectedTool === 'circle') {
      this.resetSelection();
      return;
    }

    this.selectedTool = 'circle';
    this.circleTool.color = 'primary';
    this.selectionChange.emit('circle');
  }

  resetSelection() {
    this.selectedTool = null;
    this.rectangleTool.color = undefined;
    this.circleTool.color = undefined;
    this.selectionChange.emit(undefined);
  }
}
