import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { }

    async findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    async findOne(id: number): Promise<Customer> {
        return this.customerRepository.findOne(id);
    }

    async upsertOne(data: Customer): Promise<Customer> {
        let customer = new Customer();
        customer = this.customerRepository.merge(customer, data);
        return this.customerRepository.save(customer);
    }
}
