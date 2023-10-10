


export interface IModelRepository{
    create(data: Object) : Promise<any>;
    update(id: any, update: Object);
    updatePush(id: any, addToSet: Object);
    updatePull(id: any, pull: Object);
    delete(id: any);
    findByField(query: object, populate?: string) : Promise<Object | null>;
    findById(id: any, populate?: string) : Promise<Object | null>;
}


