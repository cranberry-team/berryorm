import MetadataStorage from "./meta/MetadataStorage";
import ColumnMeta from "./meta/ColumnMeta";
import ModelMeta from "./meta/ModelMeta";

export class Objects {
    private _columns: any[];
    private _meta: any;

    constructor(target: Function) {
        const storage = MetadataStorage.getStorage();
        this._columns = storage.columns.filter((col: ColumnMeta) => col.target === target);
        this._meta = storage.tables.find((table: ModelMeta) => table.target === target);
    }

    filter() {
        return `SELECT ${this._columns.map(col => col.dbName).join(", ")} FROM ${this._meta.dbName}`
    }
}