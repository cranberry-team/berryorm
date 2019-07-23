export class ConnectionAlreadyExistsException extends Error {
    public constructor(name: string) {
        super();
        this.message = `Connection "${name}" already exists`;
    }
}
