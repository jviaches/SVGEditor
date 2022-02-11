import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllItemsComponent } from './gallery/view-all-items/view-all-items.component';
import { ViewItemComponent } from './gallery/view-item/view-item.component';
import { EditItemComponent } from './gallery/edit-item/edit-item.component';
import { DragDirective } from './core/directives/drag.directive';
import { SvgService } from './core/services/svg.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GeneralService } from './core/services/general.service';
import { ModalDialogComponent } from './core/components/modal/modal-dialog/modal-dialog.component';
import { ModalYesNoDialogComponent } from './core/components/modal/yesno-modal-dialog/yesno-modal-dialog.component';
import { ResizeDirective } from './core/directives/resize.directive';
import { ShapeToolbarComponent } from './core/components/toolbar/shape-toolbar/shape-toolbar.component';
import { ColorSliderComponent } from './core/components/custom/color-slider/color-slider.component';
import { ColorPickerComponent } from './core/components/custom/color-picker/color-picker.component';
import { ColorPaletteComponent } from './core/components/custom/color-palette/color-palette.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllItemsComponent,
    ViewItemComponent,
    EditItemComponent,
    DragDirective,
    ResizeDirective,
    ShapeToolbarComponent,
    ColorSliderComponent,
    ColorPaletteComponent,
    ColorPickerComponent,
    ModalDialogComponent,
    ModalYesNoDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SvgService, GeneralService, HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent, ModalYesNoDialogComponent]
})
export class AppModule { }
