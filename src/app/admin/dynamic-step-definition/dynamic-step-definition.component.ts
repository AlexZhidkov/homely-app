import { ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dynamic-step-definition',
  templateUrl: './dynamic-step-definition.component.html',
  styleUrls: ['./dynamic-step-definition.component.css']
})
export class DynamicStepDefinitionComponent implements OnInit {
  @Input() step: string;
  @Input() label: string;
  fields: FieldConfig[];
  readonly separatorKeysCodes: number[] = [ENTER];

  constructor(
    public fieldService: FirestoreService<FieldConfig>,
  ) { }

  ngOnInit(): void {
    this.fieldService.setCollection(`dynamic-form/external/${this.step}`, ref => ref.orderBy('index'));
    this.fieldService.list().subscribe(f => this.fields = f);
  }

  addOption(field: FieldConfig, event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      if (field.options) {
        field.options.push(value.trim());
      } else {
        field.options = [value.trim()];
      }
    }

    if (input) {
      input.value = '';
    }
  }

  removeOption(field: FieldConfig, value: string) {
    const index = field.options.indexOf(value);

    if (index >= 0) {
      field.options.splice(index, 1);
    }
  }

  add() {
    this.fields.push({});
  }

  save(field: FieldConfig) {
    this.fieldService.setCollection(`dynamic-form/external/${this.step}`);
    if (field.id) {
      const id = field.id;
      delete field.id;
      this.fieldService.update(id, field);
    } else {
      this.fieldService.add(field);
    }
  }
}
