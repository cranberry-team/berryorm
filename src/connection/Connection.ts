import { Config as KnexConfig } from "knex";

export class Connection {
    readonly name: string;
    readonly config: KnexConfig;

    public constructor(name: string, config: KnexConfig) {
        this.name = name || "default";
        this.config = config;
    }
}
