import { getMetadataStorage } from "../tools";

/**
 * @todo понять, какие параметры для филда нужны (тип данных (посмотреть в knex), `name` для колонки, и т.п.)
 */
export function Field() {
    return function (object: Object, propertyName: string) {
        getMetadataStorage().columns.push({
            target: object.constructor,
            name: propertyName
        });
    }
}
