import { Config as KnexConfig } from "knex";

import { Connection } from "./Connection";
import { ConnectionNotFoundException } from "../exception/ConnectionNotFoundException";
import { ConnectionAlreadyExistsException } from "../exception/ConnectionAlreadyExistsException";

export class ConnectionManager {
    public readonly connections: Connection[] = [];

    public get(name: string = "default"): Connection {
        const connection = this.connections.find(connection => connection.name === name);

        if (!connection) {
            throw new ConnectionNotFoundException(name);
        }

        return connection;
    }

    public has(name: string): boolean {
        return !!this.connections.find(connection => connection.name === name);
    }

    public add(name: string = "default", config: KnexConfig): Connection {
        if (this.has(name)) {
            throw new ConnectionAlreadyExistsException(name);
        }

        const connection = new Connection(name, config);
        this.connections.push(connection);
        return connection;
    }
}
