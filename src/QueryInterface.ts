/**
 * Наступил творческий кризис - так рано :/
 * @see ./Model.ts:14
 */
export class QueryInterface {
    private _columns: any[];
    private _meta: any;
    constructor(columns: any[], meta: any) {
        this._columns = columns;
        this._meta = meta;
    }

    filter() {
        return `SELECT ${this._columns.map(col => col.name).join(", ")} FROM ${this._meta.name}`
    }
}