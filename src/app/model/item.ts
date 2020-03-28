import { BaseEntity } from './base-entity';

export interface Item extends BaseEntity {
    label: string;
    imageUrl?: string;
    colour?: string;
    description: string;
    supplier: string;
    price: number;
    value: any;
    tags?: string[];
}
