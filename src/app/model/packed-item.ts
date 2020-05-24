import { Item } from './item';

export interface PackedItem extends Item {
    /** The number of items per sqm */
    itemsPerSqm: number;
    /** The number of items per pack */
    itemsPerPack: number;
}
