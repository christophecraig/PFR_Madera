import { Component } from '@entities/component.entity';

export class Provider {
    id: number;

    businessName: string;

    address: string;

    businessContact: string;

    paymentContact: string;

    description: string;

    components: Component[];
}
