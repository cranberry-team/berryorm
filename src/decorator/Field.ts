import ColumnMeta from "../meta/ColumnMeta";
import MetadataStorage from "../meta/MetadataStorage";

export interface IFieldParams {
    dbName?: string;
}

export function Field(params: IFieldParams = {}) {
    return function (object: Object, propertyName: string) {
        MetadataStorage.getStorage().columns.push(new ColumnMeta(object.constructor, propertyName, params.dbName));
    }
}
