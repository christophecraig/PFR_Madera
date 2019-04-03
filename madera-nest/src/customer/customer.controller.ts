import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/entities/customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {

    }

    @Get()
    findAll(): Promise<Customer[]> {
        return this.customerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Customer> {
        return this.customerService.findOne(id);
    }

    @Post()
    upsertOne(@Body() data: Customer): Promise<Customer> {
        return this.customerService.upsertOne(data);
    }
}
