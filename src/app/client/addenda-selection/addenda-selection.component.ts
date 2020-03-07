import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'firebase/firestore';

@Component({
  selector: 'app-addenda-selection',
  templateUrl: './addenda-selection.component.html',
  styleUrls: ['./addenda-selection.component.css']
})
export class AddendaSelectionComponent implements OnInit {
  concreteFormGroup: FormGroup;
  brickworkFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.concreteFormGroup = this.formBuilder.group({
    });
    this.brickworkFormGroup = this.formBuilder.group({
    });
  }

  submit(event: any) {
    debugger;
  }
}
