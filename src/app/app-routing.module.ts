import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddendaSelectionComponent } from './client/addenda-selection/addenda-selection.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'client', component: AddendaSelectionComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
