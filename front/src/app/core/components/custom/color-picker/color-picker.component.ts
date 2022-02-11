import { Component, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements AfterViewInit, OnChanges{

  public hue: string;
  public color: string;

  @ViewChild(ColorPaletteComponent, { static: false }) colorPalette: ColorPaletteComponent;
  @Output() colorChange = new EventEmitter();

  ngAfterViewInit(): void {
    this.colorPalette.color.subscribe( data => {
      //console.log(data);
      this.color = data;
      this.colorChange.emit('color');
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);

    // if (changes.hue) {
    //   this.draw();
    //   const pos = this.selectedPosition;
    //   if (pos) {
    //     this.color.emit(this.getColorAtPosition(pos.x, pos.y));
    //   }
    // }
  }
}
