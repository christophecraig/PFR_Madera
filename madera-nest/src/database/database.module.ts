import { Module, Global, DynamicModule } from '@nestjs/common';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';
import { TypeOrmModule } from '@nestjs/typeorm';

function DatabaseOrmModule(): DynamicModule {
    const config = new EnvService().read();

    return TypeOrmModule.forRoot({
        type: config.TYPEORM_CONNECTION,
        host: config.TYPEORM_HOST,
        port: config.TYPEORM_PORT,
        username: config.TYPEORM_USERNAME,
        password: config.TYPEORM_PASSWORD,
        database: config.TYPEORM_DATABASE,

        entities: ['../**/*.entity.ts'],
        logging: config.TYPEORM_LOGGING,
        synchronize: config.TYPEORM_SYNCHRONIZE,
    });
}

@Global()
@Module({
    imports: [
        EnvModule,
        DatabaseOrmModule(),
    ],
})
export class DatabaseModule { }
