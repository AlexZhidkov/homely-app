import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderHomeComponent } from './builder/builder-home/builder-home.component';
import { AddendaSelectionComponent } from './client/addenda-selection/addenda-selection.component';
import { BrickSelectionComponent } from './client/brick-selection/brick-selection.component';
import { HomeComponent } from './home/home.component';
import { BrickComponent } from './supplier/brick/brick.component';
import { ColorbondComponent } from './supplier/colorbond/colorbond.component';
import { ItemsComponent } from './supplier/items/items.component';
import { SupplierHomeComponent } from './supplier/supplier-home/supplier-home.component';


const routes: Routes = [
  { path: 'client', component: AddendaSelectionComponent },
  { path: 'client/bricks', component: BrickSelectionComponent },
  { path: 'builder', component: BuilderHomeComponent },
  { path: 'supplier', component: SupplierHomeComponent },
  { path: 'supplier/items/:collection', component: ItemsComponent },
  { path: 'supplier/bricks', component: BrickComponent },
  { path: 'supplier/bricks/:id', component: BrickComponent },
  { path: 'supplier/colorbond', component: ColorbondComponent },
  { path: 'supplier/colorbond/:id', component: ColorbondComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
