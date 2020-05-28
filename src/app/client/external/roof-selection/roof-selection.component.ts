import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { CostCalculatorService } from 'src/app/services/cost-calculator.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-roof-selection',
  templateUrl: './roof-selection.component.html',
  styleUrls: ['./roof-selection.component.css']
})
export class RoofSelectionComponent implements OnInit {
  @Input() markup: number;
  @Input() amountRequired: number;
  field: FieldConfig;

  selectedRoofType: string;

  showAllColours: boolean;
  selectedColour: Item;
  colours: Item[];

  showAllTiles: boolean;
  selectedTiles: Item;
  tiles: Item[];

  addenda: any;

  constructor(
    private addendaStore: AddendaStoreService,
    private colorService: FirestoreService<Item>,
    private colorbondService: FirestoreService<Item>,
    private tilesService: FirestoreService<Item>,
    private costCalculatorService: CostCalculatorService,
  ) { }

  ngOnInit(): void {
    this.addenda = this.addendaStore.getStep('roof');
    this.selectedRoofType = this.addenda.roofType ?? null;

    this.colorService.setCollection('colorbond');
    this.colorService.list().subscribe(c => {
      this.colours = c;
      this.colours.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
    });

    this.colorbondService.setCollection('colorbond');
    if (this.addenda.roofColour) {
      this.showAllColours = false;
      this.colorbondService.get(this.addenda.roofColour.id).subscribe(roofColour => {
        this.selectedColour = roofColour;
        this.selectedColour.totalCost = this.costCalculatorService.getTotalCost(this.field, roofColour);
      });
    } else {
      this.showAllColours = true;
    }

    this.tilesService.setCollection('roof_tiles');
    if (this.addenda.tiles) {
      this.showAllTiles = false;
      this.tilesService.get(this.addenda.tiles.id).subscribe(tiles => {
        this.selectedTiles = tiles;
        this.selectedTiles.totalCost = this.costCalculatorService.getTotalCost(this.field, tiles);
      });
    } else {
      this.showAllTiles = true;
      this.tilesService.list().subscribe(t => {
        this.tiles = t;
        this.tiles.forEach(i => i.totalCost = this.costCalculatorService.getTotalCost(this.field, i));
      });
    }
  }

  selectRoofType(type: string) {
    this.selectedRoofType = type;
    this.addendaStore.set('roof', 'roofType', type);
  }

  selectColour(selectedColour: Item) {
    this.selectedColour = selectedColour;
    this.addendaStore.set('roof', 'roofColour', { id: selectedColour.id, value: selectedColour.value });
    this.showAllColours = false;
  }

  selectTiles(selectedTiles: Item) {
    this.selectedTiles = selectedTiles;
    this.addendaStore.set('roof', 'tiles', { id: selectedTiles.id, value: selectedTiles.value });
    this.showAllTiles = false;
  }
}
