import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrickComponent } from './brick/brick.component';
import { BricksComponent } from './bricks/bricks.component';
import { AddendaSelectionComponent } from './client/addenda-selection/addenda-selection.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'client', component: AddendaSelectionComponent },
  { path: 'client/bricks', component: BricksComponent },
  { path: 'supplier', component: BricksComponent },
  { path: 'supplier/bricks/:id', component: BrickComponent },
  { path: 'supplier/bricks', component: BrickComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
