import { ConnectionManager } from "../src/connection/ConnectionManager";
import { Config } from "knex";
import { Connection } from "../src/connection/Connection";

describe("Connection testing", () => {
    let connectionManager: ConnectionManager;
    const connectionMock: Config = {
        dialect: "someDialect",
    };

    beforeEach(() => {
        connectionManager = new ConnectionManager();
    });

    test("should add connection default connection", () => {
        connectionManager.add(undefined, connectionMock);
        expect(connectionManager.has("default")).toBeTruthy();
    });

    test("should add named connection", () => {
        connectionManager.add("myConnection", connectionMock);
        expect(connectionManager.has("myConnection")).toBeTruthy();
    });

    test("should be thrown when connection not found", () => {
        connectionManager.add("myConnection", connectionMock);
        expect(() => { connectionManager.get("asdasd") }).toThrowError(/asdasd/);
    });

    test("should be thrown when connection already exists", () => {
        connectionManager.add("myConnection", connectionMock);
        expect(() => { connectionManager.add("myConnection", connectionMock); }).toThrowError(/myConnection/);
    });

    test("should be thrown when connection not exists", () => {
        expect(() => { connectionManager.get("myConnection"); }).toThrowError(/myConnection/);
    });

    test("should return Connection instance", () => {
        connectionManager.add("myConnection", connectionMock);        
        expect(connectionManager.get("myConnection")).toBeInstanceOf(Connection);
    });
});
