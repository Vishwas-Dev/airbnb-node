export interface AppError extends Error {
    statusCode: number;
}

export class internalServerError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 500;
        this.message = message;
        this.name = "internalServerError"
    }
}
export class badRequestError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 400;
        this.message = message;
        this.name = "badRequestHandler"
    }
}

export class NotFoundError implements AppError {
    statusCode: number;
    message: string;
    name: string;
    constructor(message: string) {
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError";
    }
}
export class NotImplemented implements AppError {
    statusCode: number;
    message: string;
    name: string;
    constructor(message: string) {
        this.statusCode = 501;
        this.message = message;
        this.name = "Not Implemented";
    }
}