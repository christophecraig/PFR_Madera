import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { Provider } from 'src/entities/provider.entity';

@Controller('provider')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {

    }

    @Get()
    findAll(): Promise<Provider[]> {
        return this.providerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Provider> {
        return this.providerService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Provider): Promise<Provider> {
        return this.providerService.upsertOne(data);
    }
}
