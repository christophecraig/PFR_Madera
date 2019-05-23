import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { Provider } from '@entities/provider.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiUseTags('provider')
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

    @Delete(':id')
    deleteOne(@Param('id') id: number): Promise<DeleteResult> {
        return this.providerService.deleteOne(id);
    }
}
