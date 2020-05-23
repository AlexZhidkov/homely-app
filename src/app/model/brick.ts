import { Item } from './item';

export interface Brick extends Item {
    /** Single or two course size */
    course: '1' | '2';
    /** The number of bricks per sqm */
    bricksPerSqm: number;
    /** The number of bricks per pack */
    bricksPerPack: number;
}
