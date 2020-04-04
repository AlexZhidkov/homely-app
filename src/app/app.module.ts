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
import { environment } from '../environments/environment';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DynamicFormDefinitionComponent } from './admin/dynamic-form-definition/dynamic-form-definition.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderHomeComponent } from './builder/builder-home/builder-home.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { DynamicSelectionFormComponent } from './client/dynamic-selection-form/dynamic-selection-form.component';
import { BrickSelectionComponent } from './client/external/brick-selection/brick-selection.component';
import { ExternalSectionComponent } from './client/external/external-section/external-section.component';
import { RoofSelectionComponent } from './client/external/roof-selection/roof-selection.component';
import { SelectionCardComponent } from './client/selection-card/selection-card.component';
import { CardComponent } from './dynamic-components/card/card.component';
import { DynamicFieldDirective } from './dynamic-components/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-components/dynamic-form/dynamic-form.component';
import { RadioComponent } from './dynamic-components/radio/radio.component';
import { HomeComponent } from './home/home.component';
import { BrickComponent } from './supplier/brick/brick.component';
import { ColorbondComponent } from './supplier/colorbond/colorbond.component';
import { ItemComponent } from './supplier/item/item.component';
import { ItemsComponent } from './supplier/items/items.component';
import { SupplierHomeComponent } from './supplier/supplier-home/supplier-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    ExternalSectionComponent,
    ClientHomeComponent,
    RadioComponent,
    AdminHomeComponent,
    DynamicFormDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
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
    MatExpansionModule,
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
    MatRadioModule
  ],
  providers: [],
  entryComponents: [
    CardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
