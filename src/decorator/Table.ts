import MetadataStorage from "../meta/MetadataStorage";

export interface ITableParams {
    name?: string;
}

export function Table(params?: ITableParams) {
    return function(target: Function) {
        const tableName = params && params.name ? params.name : target.name;
        MetadataStorage.getStorage().tables.push({
            target,
            name: tableName
        });
    }
}
