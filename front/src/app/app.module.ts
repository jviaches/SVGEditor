import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllItemsComponent } from './gallery/view-all-items/view-all-items.component';
import { ViewItemComponent } from './gallery/view-item/view-item.component';
import { EditItemComponent } from './gallery/edit-item/edit-item.component';
import { DragDirective } from './core/directives/drag.directive';
import { SvgService } from './core/services/svg.service';
import { DropDirective } from './core/directives/drop.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GeneralService } from './core/services/general.service';
import { ModalDialogComponent } from './core/components/modal-dialog/modal-dialog.component';
import { ModalYesNoDialogComponent } from './core/components/yesno-modal-dialog/yesno-modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllItemsComponent,
    ViewItemComponent,
    EditItemComponent,
    DragDirective,
    DropDirective,
    ModalDialogComponent,
    ModalYesNoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SvgService, GeneralService],
  bootstrap: [AppComponent],
  entryComponents: [ModalDialogComponent, ModalYesNoDialogComponent]
})
export class AppModule { }
