import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvData {
    // application
    APP_ENV: string;
    APP_DEBUG: boolean;

    // database
    TYPEORM_CONNECTION: 'mysql';
    TYPEORM_HOST?: string;
    TYPEORM_DATABASE: string;
    TYPEORM_PORT?: number;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;

    // params
    TYPEORM_LOGGING: boolean;
    TYPEORM_SYNCHRONIZE: boolean;
}

export class EnvService {
    private vars: EnvData;

    constructor() {
        const environment = process.env.NODE_ENV || 'development';
        const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));

        data.APP_ENV = environment;
        data.APP_DEBUG = data.APP_DEBUG === 'true' ? true : false;
        data.TYPEORM_PORT = parseInt(data.TYPEORM_PORT, 10);

        this.vars = data as EnvData;
    }

    read(): EnvData {
        return this.vars;
    }

    isDev(): boolean {
        return (this.vars.APP_ENV === 'development');
    }

    isProd(): boolean {
        return (this.vars.APP_ENV === 'production');
    }

    debug(): boolean {
        return this.vars.APP_DEBUG;
    }
}
