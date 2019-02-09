import MetadataStorage from "./MetadataStorage";

declare var global: any;

export function getMetadataStorage(): MetadataStorage {
    const globalStorage = global;
    if (!globalStorage.berryorm) {
        globalStorage.berryorm = new MetadataStorage();
    }

    return globalStorage.berryorm;
}
