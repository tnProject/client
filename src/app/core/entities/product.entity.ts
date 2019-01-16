import {BaseEntity} from './base.entity';

export class ProductEntity extends BaseEntity{
    id: number;
    name: string;
    price: number;
    description: string;
    imageLink: string;
    catagoriyId: number;
}