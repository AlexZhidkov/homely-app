import { NgModule } from '@angular/core';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard, UserComponent } from 'ngx-auth-firebaseui';
import { DynamicFormDefinitionComponent } from './admin/dynamic-form-definition/dynamic-form-definition.component';
import { BuilderHomeComponent } from './builder/builder-home/builder-home.component';
import { HouseConfigComponent } from './builder/house-config/house-config.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { DynamicSelectionFormComponent } from './client/dynamic-selection-form/dynamic-selection-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrickComponent } from './supplier/brick/brick.component';
import { ColorbondComponent } from './supplier/colorbond/colorbond.component';
import { ItemComponent } from './supplier/item/item.component';
import { ItemsComponent } from './supplier/items/items.component';
import { PavingComponent } from './supplier/paving/paving.component';
import { SupplierHomeComponent } from './supplier/supplier-home/supplier-home.component';

// https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [LoggedInGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      { path: 'profile', component: UserComponent },
      { path: 'admin/sections', component: ClientHomeComponent },
      { path: 'admin/section/:collection', component: DynamicFormDefinitionComponent },
      { path: 'client/:houseId/section/:collection', component: DynamicSelectionFormComponent },
      { path: 'client/:houseId', component: ClientHomeComponent },
      { path: 'builder', component: BuilderHomeComponent },
      { path: 'house/:houseId', component: HouseConfigComponent },
      { path: 'supplier', component: SupplierHomeComponent },
      { path: 'supplier/items/:collection', component: ItemsComponent },
      { path: 'supplier/item/Bricks', component: BrickComponent },
      { path: 'supplier/item/Bricks/:id', component: BrickComponent },
      { path: 'supplier/item/Paving', component: PavingComponent },
      { path: 'supplier/item/Paving/:id', component: PavingComponent },
      { path: 'supplier/item/Colorbond', component: ColorbondComponent },
      { path: 'supplier/item/Colorbond/:id', component: ColorbondComponent },
      { path: 'supplier/item/:collection', component: ItemComponent },
      { path: 'supplier/item/:collection/:id', component: ItemComponent },
      { path: '**', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
