import MetadataStorage from "../meta/MetadataStorage";
import ModelMeta from "../meta/ModelMeta";

export interface ITableParams {
    dbName?: string;
}

export function Table(params: ITableParams = {}) {
    return function(target: Function) {
        const tableName = params && params.dbName ? params.dbName : target.name;
        MetadataStorage.getStorage().tables.push(new ModelMeta(target, tableName, params.dbName));
    }
}
