import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/model/item';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-roof-selection',
  templateUrl: './roof-selection.component.html',
  styleUrls: ['./roof-selection.component.css']
})
export class RoofSelectionComponent implements OnInit {
  @Input() onOpenEvent: Observable<void>;
  @Input() markup: number;
  @Input() amountRequired: number;
  private openEventSubscription: Subscription;

  selectedRoof: string;

  showAllColours: boolean;
  selectedColour: Item;
  colours: Item[];

  showAllTiles: boolean;
  selectedTiles: Item;
  tiles: Item[];

  showAllFacias: boolean;
  selectedFacia: Item;
  facias: Item[];

  showAllGuttering: boolean;
  selectedGuttering: Item;
  guttering: Item[];

  showAllDownpipesColours: boolean;
  selectedDownpipesColour: Item;
  downpipesColours: Item[];

  addenda: any;

  constructor(
    private colorService: FirestoreService<Item>,
    private colorbondService: FirestoreService<Item>,
    private tilesService: FirestoreService<Item>,
    private faciaService: FirestoreService<Item>,
    private gutteringService: FirestoreService<Item>,
    private downpipesColourService: FirestoreService<Item>,
  ) { }

  ngOnInit(): void {
    this.openEventSubscription = this.onOpenEvent.subscribe(() => this.setup());
  }

  setup() {
    this.addenda = JSON.parse(localStorage.getItem('addenda'));

    this.colorService.setCollection('colorbond');
    this.colorService.list().subscribe(c => this.colours = c);

    this.colorbondService.setCollection('colorbond');
    if (this.addenda.roofColour) {
      this.showAllColours = false;
      this.colorbondService.get(this.addenda.roofColour.id).subscribe(roofColour => {
        this.selectedColour = roofColour;
      });
    } else {
      this.showAllColours = true;
    }

    this.tilesService.setCollection('tiles');
    if (this.addenda.tiles) {
      this.showAllTiles = false;
      this.tilesService.get(this.addenda.tiles.id).subscribe(tiles => {
        this.selectedTiles = tiles;
      });
    } else {
      this.showAllTiles = true;
      this.tilesService.list().subscribe(t => this.tiles = t);
    }

    this.tilesService.setCollection('tiles');
    if (this.addenda.tiles) {
      this.showAllTiles = false;
      this.tilesService.get(this.addenda.tiles.id).subscribe(tiles => {
        this.selectedTiles = tiles;
      });
    } else {
      this.showAllTiles = true;
      this.tilesService.list().subscribe(t => this.tiles = t);
    }

    this.gutteringService.setCollection('guttering');
    if (this.addenda.guttering) {
      this.showAllGuttering = false;
      this.gutteringService.get(this.addenda.guttering.id).subscribe(guttering => {
        this.selectedGuttering = guttering;
      });
    } else {
      this.showAllGuttering = true;
      this.gutteringService.list().subscribe(g => this.guttering = g);
    }

    this.faciaService.setCollection('colorbond');
    if (this.addenda.facia) {
      this.showAllFacias = false;
      this.faciaService.get(this.addenda.facia.id).subscribe(facia => {
        this.selectedFacia = facia;
      });
    } else {
      this.showAllFacias = true;
    }

    this.downpipesColourService.setCollection('colorbond');
    if (this.addenda.downpipesColour) {
      this.showAllDownpipesColours = false;
      this.downpipesColourService.get(this.addenda.downpipesColour.id).subscribe(downpipesColour => {
        this.selectedDownpipesColour = downpipesColour;
      });
    } else {
      this.showAllDownpipesColours = true;
    }
  }

  selectColour(selectedColour: Item) {
    this.selectedColour = selectedColour;
    this.addenda.roofColour = { id: selectedColour.id, value: selectedColour.value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
    this.showAllColours = false;
  }

  selectTiles(selectedTiles: Item) {
    this.selectedTiles = selectedTiles;
    this.addenda.tiles = { id: selectedTiles.id, value: selectedTiles.value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
    this.showAllTiles = false;
  }

  selectFacia(selectedFacia: Item) {
    this.selectedFacia = selectedFacia;
    this.addenda.facia = { id: selectedFacia.id, value: selectedFacia.value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
    this.showAllFacias = false;
  }

  selectGuttering(selectedGuttering: Item) {
    this.selectedGuttering = selectedGuttering;
    this.addenda.guttering = { id: selectedGuttering.id, value: selectedGuttering.value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
    this.showAllGuttering = false;
  }

  selectDownpipesColour(selectedDownpipesColour: Item) {
    this.selectedColour = selectedDownpipesColour;
    this.addenda.downpipesColour = { id: selectedDownpipesColour.id, value: selectedDownpipesColour.value };
    localStorage.setItem('addenda', JSON.stringify(this.addenda));
    this.showAllDownpipesColours = false;
  }

}
