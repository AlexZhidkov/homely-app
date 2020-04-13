import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  step: string;
  field: FieldConfig;
  group: FormGroup;

  constructor(
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.field.value = this.addendaStore.getValue(this.step, this.field.id);
  }

  change(value: string) {
    this.addendaStore.set(this.step, this.field.id, value);
  }
}
