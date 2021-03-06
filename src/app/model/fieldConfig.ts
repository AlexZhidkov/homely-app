import { BaseEntity } from './base-entity';
import { Validator } from './validator';

export interface FieldConfig extends BaseEntity {
    label?: string;
    index?: number;
    name?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type?: string;
    extras?: any;
    defaultValue?: any;
    value?: any;
    source?: string;
    markup?: number;
    quantity?: number;
    validations?: Validator[];
    tags?: string[];
}
