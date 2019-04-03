import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from 'src/entities/provider.entity';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Provider])],
    providers: [ProviderService],
    controllers: [ProviderController],
})
export class ProviderModule { }
