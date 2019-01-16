export class BaseEntity{
    id: number | string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id?: number|string){
        this.id = id;
    }
}