import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Brick } from 'src/app/model/brick';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-brick-selection',
  templateUrl: './brick-selection.component.html',
  styleUrls: ['./brick-selection.component.css']
})
export class BrickSelectionComponent implements OnInit {
  selectedBrickObservable: Observable<Brick>;
  selectedBrick: Brick;
  bricks: Brick[];
  selectedCourse = '1';
  selectedSupplier = 'All';
  showAllBricks = true;
  showSelectedBrick = false;
  addendaValue: any;
  field: FieldConfig;
  courseFilter: BehaviorSubject<string>;
  supplierFilter: BehaviorSubject<string>;

  suppliers: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  constructor(
    private addendaStore: AddendaStoreService,
    private firestore: FirestoreService<Brick>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
    this.courseFilter = new BehaviorSubject(this.selectedCourse);
    this.supplierFilter = new BehaviorSubject(this.selectedSupplier);

    const bricksObservable = combineLatest(
      this.courseFilter,
      this.supplierFilter
    ).pipe(
      switchMap(([course, supplier]) => {
        this.firestore.setCollection('bricks', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          query = query.where('course', '==', course);
          if (supplier !== 'All') { query = query.where('supplier', '==', supplier) };
          return query;
        });
        return this.firestore.list();
      }
      )
    );

    bricksObservable.subscribe(b => {
      this.bricks = b;
      this.bricks.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
    });

    this.addendaValue = this.addendaStore.getValue('brickwork', 'brick');
    if (this.addendaValue.id) {
      this.showAllBricks = false;
      this.selectedBrickObservable = this.firestore.get(this.addendaValue.id);
      this.selectedBrickObservable.subscribe(brick => {
        this.selectedBrick = brick;
        this.selectedBrick.totalCost = this.costCalculatorService.getTotalCost(this.field, brick);
        this.showSelectedBrick = true;
      });
    }
  }

  changeCourseFilter(course: string) {
    this.courseFilter.next(course);
  }

  changeSupplierFilter(supplier: string) {
    this.supplierFilter.next(supplier);
  }

  selectBrick(selectedBrick: Brick) {
    this.selectedBrick = selectedBrick;
    this.addendaStore.set('brickwork', 'brick', { id: selectedBrick.id, value: selectedBrick.value });
    this.showSelectedBrick = true;
    this.showAllBricks = false;
  }

  changeSelection() {
    this.showSelectedBrick = false;
    this.showAllBricks = true;
  }

  /*
    update(): void {
      this.bricksCollection.get().forEach(item => {
        return item.docs.map(m => {
          const data = m.data();
          return this.firestore.doc<Brick>(`bricks/${m.id}`).update({
            // tags: []
            // price: data.subtitle ? Number(data.subtitle.replace(/\D/g, '')) : 0
            // supplier: data.tags[0] ? data.tags[0] : '',
            // course: (data.tags.includes('Two Course') ? 2 : 1)
            // course: data.course.toString()
          });
        });
      });
    }
  */
}
