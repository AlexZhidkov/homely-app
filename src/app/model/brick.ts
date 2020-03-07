import { BaseEntity } from './base-entity';

export interface Brick extends BaseEntity {
    label?: string;
    name?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    tags?: string[];
}
