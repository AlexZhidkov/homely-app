import { BaseEntity } from './base-entity';

export interface Item extends BaseEntity {
    label: string;
    imageUrl?: string;
    colour?: string;
    description: string;
    supplier: string;
    extras?: any;
    price: number;
    totalCost?: number;
    value: any;
    tags?: string[];
}
