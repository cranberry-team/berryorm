import { getMetadataStorage } from "./tools";

export default class Model {
    private _columns: any[];
    private _meta: any;

    constructor() {
        this._columns = getMetadataStorage().columns.filter(col => col.target === this.constructor);
        this._meta = getMetadataStorage().tables.find(table => table.target === this.constructor);
    }

    public getColumns() {
        return this._columns;
    }

    public getMeta() {
        return this._meta;
    }
}