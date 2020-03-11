import { BaseEntity } from './base-entity';

export interface Brick extends BaseEntity {
    label: string;
    imageUrl?: string;
    description: string;
    supplier: string;
    course: '1' | '2';
    price: number;
    value: any;
    tags?: string[];

}
