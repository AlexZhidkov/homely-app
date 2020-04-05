import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-roof-selection',
  templateUrl: './roof-selection.component.html',
  styleUrls: ['./roof-selection.component.css']
})
export class RoofSelectionComponent implements OnInit {
  @Input() markup: number;
  @Input() amountRequired: number;

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
    private addendaStore: AddendaStoreService,
    private colorService: FirestoreService<Item>,
    private colorbondService: FirestoreService<Item>,
    private tilesService: FirestoreService<Item>,
    private faciaService: FirestoreService<Item>,
    private gutteringService: FirestoreService<Item>,
    private downpipesColourService: FirestoreService<Item>,
  ) { }

  ngOnInit(): void {
    this.addenda = this.addendaStore.get();

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
    this.addendaStore.set('roofColour', { id: selectedColour.id, value: selectedColour.value });
    this.showAllColours = false;
  }

  selectTiles(selectedTiles: Item) {
    this.selectedTiles = selectedTiles;
    this.addendaStore.set('tiles', { id: selectedTiles.id, value: selectedTiles.value });
    this.showAllTiles = false;
  }

  selectFacia(selectedFacia: Item) {
    this.selectedFacia = selectedFacia;
    this.addendaStore.set('facia', { id: selectedFacia.id, value: selectedFacia.value });
    this.showAllFacias = false;
  }

  selectGuttering(selectedGuttering: Item) {
    this.selectedGuttering = selectedGuttering;
    this.addendaStore.set('guttering', { id: selectedGuttering.id, value: selectedGuttering.value });
    this.showAllGuttering = false;
  }

  selectDownpipesColour(selectedDownpipesColour: Item) {
    this.selectedDownpipesColour = selectedDownpipesColour;
    this.addendaStore.set('downpipesColour', { id: selectedDownpipesColour.id, value: selectedDownpipesColour.value });
    this.showAllDownpipesColours = false;
  }

}
