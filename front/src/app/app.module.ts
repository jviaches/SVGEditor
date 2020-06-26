import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllItemsComponent } from './gallery/view-all-items/view-all-items.component';
import { ViewItemComponent } from './gallery/view-item/view-item.component';
import { EditItemComponent } from './gallery/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllItemsComponent,
    ViewItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
