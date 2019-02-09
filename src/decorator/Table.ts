import { getMetadataStorage } from "../tools";

export function Table() {
    return function(target: Function) {
        getMetadataStorage().tables.push({
            target
        });
    }
}
