import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditItemComponent } from './gallery/edit-item/edit-item.component';


const routes: Routes = [
  { path: '', component: EditItemComponent }, // TODO: change to corresponding path when dev is one on this component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
