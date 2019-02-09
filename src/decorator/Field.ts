import { getMetadataStorage } from "../tools";

export function Field() {
    return function (object: Object, propertyName: string) {
        getMetadataStorage().columns.push({
            target: object.constructor,
            name: propertyName
        });
    }
}
