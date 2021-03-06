import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../environments/environment';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DynamicFormDefinitionComponent } from './admin/dynamic-form-definition/dynamic-form-definition.component';
import { DynamicStepDefinitionComponent } from './admin/dynamic-step-definition/dynamic-step-definition.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderHomeComponent } from './builder/builder-home/builder-home.component';
import { HouseConfigComponent } from './builder/house-config/house-config.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { DynamicSelectionFormComponent } from './client/dynamic-selection-form/dynamic-selection-form.component';
import { BrickSelectionComponent } from './client/external/brick-selection/brick-selection.component';
import { GroundSlabSelectionComponent } from './client/external/ground-slab-selection/ground-slab-selection.component';
import { RenderSelectionComponent } from './client/external/render-selection/render-selection.component';
import { RoofSelectionComponent } from './client/external/roof-selection/roof-selection.component';
import { RoomWindowSelectionComponent } from './client/external/room-window-selection/room-window-selection.component';
import { TermiteControlSelectionComponent } from './client/external/termite-control-selection/termite-control-selection.component';
import { WindowsDoorsSelectionComponent } from './client/external/windows-doors-selection/windows-doors-selection.component';
import { SelectionCardComponent } from './client/selection-card/selection-card.component';
import { CardComponent } from './dynamic-components/card/card.component';
import { DynamicFieldDirective } from './dynamic-components/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-components/dynamic-form/dynamic-form.component';
import { RadioComponent } from './dynamic-components/radio/radio.component';
import { SelectComponent } from './dynamic-components/select/select.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrickComponent } from './supplier/brick/brick.component';
import { ColorbondComponent } from './supplier/colorbond/colorbond.component';
import { ItemComponent } from './supplier/item/item.component';
import { ItemsComponent } from './supplier/items/items.component';
import { PavingComponent } from './supplier/paving/paving.component';
import { SupplierHomeComponent } from './supplier/supplier-home/supplier-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    BrickComponent,
    DynamicSelectionFormComponent,
    BrickSelectionComponent,
    BuilderHomeComponent,
    SelectionCardComponent,
    RoofSelectionComponent,
    SupplierHomeComponent,
    ItemsComponent,
    ColorbondComponent,
    ItemComponent,
    ClientHomeComponent,
    RadioComponent,
    AdminHomeComponent,
    DynamicFormDefinitionComponent,
    DynamicStepDefinitionComponent,
    WindowsDoorsSelectionComponent,
    RoomWindowSelectionComponent,
    SelectComponent,
    HouseConfigComponent,
    GroundSlabSelectionComponent,
    RenderSelectionComponent,
    PavingComponent,
    TermiteControlSelectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, undefined, {
      toastMessageOnAuthSuccess: false,
      authGuardFallbackURL: '/login',
      authGuardLoggedInURL: '/'
    }),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatListModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatRadioModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatPasswordStrengthModule,
  ],
  providers: [],
  entryComponents: [
    CardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
