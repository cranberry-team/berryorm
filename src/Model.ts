import { QueryInterface } from "./QueryInterface";
import MetadataStorage from "./meta/MetadataStorage";
import ColumnMeta from "./meta/ColumnMeta";

export default class Model {
    public objects: QueryInterface;

    private _columns: ColumnMeta[];
    private _meta: any;

    constructor() {
        this._columns = MetadataStorage.getStorage().columns.filter((col: ColumnMeta) => col.target === this.constructor);
        this._meta = MetadataStorage.getStorage().tables.find((table: any) => table.target === this.constructor);

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