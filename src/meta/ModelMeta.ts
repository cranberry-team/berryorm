export default class ModelMeta {
    public target: Function;
    public dbName: string;
    public name: string;

    constructor(target: Function, name: string, dbName?: string) {
        this.target = target;
        this.name = name;
        this.dbName = dbName || name;
    }
}
