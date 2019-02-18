import ColumnMeta from "./ColumnMeta";
import ModelMeta from "./ModelMeta";

declare var global: any;

/**
 * @todo Запилить общий мета-объект для таблицы с ее колонками
 * @todo возможно, запилить класс статикой со всем функционалом (get/set и тп)
 */
export default class MetadataStorage {
    public tables: ModelMeta[] = [];
    public columns: ColumnMeta[] = [];

    static getStorage() {
        const globalStorage = global;
        if (!globalStorage.berryorm) {
            globalStorage.berryorm = new MetadataStorage();
        }

        return globalStorage.berryorm;
    }
}
