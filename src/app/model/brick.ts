import { Item } from './item';

export interface Brick extends Item {
    course: '1' | '2';
}
