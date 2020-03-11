import { BaseEntity } from './base-entity';

export interface Brick extends BaseEntity {
    label: string;
    imageUrl?: string;
    description: string;
    supplier: string;
    course: number;
    price: number;
    value: any;
    tags?: string[];

}
