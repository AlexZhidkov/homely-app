import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    public fieldService: FirestoreService<FieldConfig>,
  ) { }

  ngOnInit(): void {
    this.fieldService.setCollection(`dynamic-form/external/${this.step}`, ref => ref.orderBy('index'));
    this.fieldService.list().subscribe(f => this.fields = f);
  }

  add() {
    this.fields.push({

    });
  }

  save(field: FieldConfig) {
    this.fieldService.setCollection(`dynamic-form/external/${this.step}`);
    if (field.id) {
      delete field.id;
      this.fieldService.update(field.id, field);
    } else {
      this.fieldService.add(field);
    }
  }
}
