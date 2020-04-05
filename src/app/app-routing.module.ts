import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormDefinitionComponent } from './admin/dynamic-form-definition/dynamic-form-definition.component';
import { BuilderHomeComponent } from './builder/builder-home/builder-home.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { DynamicSelectionFormComponent } from './client/dynamic-selection-form/dynamic-selection-form.component';
import { ExternalSectionComponent } from './client/external/external-section/external-section.component';
import { HomeComponent } from './home/home.component';
import { BrickComponent } from './supplier/brick/brick.component';
import { ColorbondComponent } from './supplier/colorbond/colorbond.component';
import { ItemComponent } from './supplier/item/item.component';
import { ItemsComponent } from './supplier/items/items.component';
import { SupplierHomeComponent } from './supplier/supplier-home/supplier-home.component';


const routes: Routes = [
  { path: 'admin', component: ClientHomeComponent },
  { path: 'admin/external', component: DynamicFormDefinitionComponent },
  { path: 'client', component: ClientHomeComponent },
  { path: 'client/external', component: ExternalSectionComponent },
  { path: 'client/internal', component: DynamicSelectionFormComponent }, // ToDo experimental use only. Remove
  { path: 'builder', component: BuilderHomeComponent },
  { path: 'supplier', component: SupplierHomeComponent },
  { path: 'supplier/items/:collection', component: ItemsComponent },
  { path: 'supplier/bricks', component: BrickComponent },
  { path: 'supplier/bricks/:id', component: BrickComponent },
  { path: 'supplier/colorbond', component: ColorbondComponent },
  { path: 'supplier/colorbond/:id', component: ColorbondComponent },
  { path: 'supplier/item/:collection', component: ItemComponent },
  { path: 'supplier/item/:collection/:id', component: ItemComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
