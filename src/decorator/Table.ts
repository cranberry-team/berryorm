import { getMetadataStorage } from "../tools";

export interface ITableParams {
    name?: string;
}

export function Table(params?: ITableParams) {
    return function(target: Function) {
        const tableName = params && params.name ? params.name : target.name;
        getMetadataStorage().tables.push({
            target,
            name: tableName
        });
    }
}
