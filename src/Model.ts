import { Objects } from "./Objects";
import MetadataStorage from "./meta/MetadataStorage";
import ColumnMeta from "./meta/ColumnMeta";
import ModelMeta from "./meta/ModelMeta";

export default class Model {
    static get objects(): Objects {
        return new Objects(this);
    }
}
