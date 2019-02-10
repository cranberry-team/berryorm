import { getMetadataStorage } from "./tools";
import { QueryInterface } from "./QueryInterface";

export default class Model {
    public objects: QueryInterface;

    private _columns: any[];
    private _meta: any;

    constructor() {
        this._columns = getMetadataStorage().columns.filter(col => col.target === this.constructor);
        this._meta = getMetadataStorage().tables.find(table => table.target === this.constructor);

        // @todo подумать о месте и назначении этой штуки
        this.objects = new QueryInterface(this._columns, this._meta);
    }

    public getColumns() {
        return this._columns;
    }

    public getMeta() {
        return this._meta;
    }
}