import ColumnMeta from "./ColumnMeta";
import ModelMeta from "./ModelMeta";

declare var global: any;

/**
 * @todo Возможно, замутить тут честный singleton чтобы было проще
 */
export default class MetadataStorage {
    public tables: ModelMeta[] = [];
    public columns: ColumnMeta[] = [];

    static getStorage(): MetadataStorage {
        const globalStorage = global;
        if (!globalStorage.berryorm) {
            globalStorage.berryorm = new MetadataStorage();
        }

        return globalStorage.berryorm;
    }
}
