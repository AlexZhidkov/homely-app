import { Validator } from './validator';

export interface FieldConfig {
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
    validations?: Validator[];
}
