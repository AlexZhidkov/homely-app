import { Item } from './item';

export interface Brick extends Item {
    course: '1' | '2';
    /** The number of bricks per sqm */
    bricksPerSqm: number;
    /** The number of bricks per pack */
    bricksPerPack: number;
}
