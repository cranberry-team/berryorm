export class ConnectionNotFoundException extends Error {
    public constructor(connectionName: string) {
        super();
        Object.setPrototypeOf(this, ConnectionNotFoundException.prototype);
        this.message = `Connection "${connectionName}" not found`;
    }
}
