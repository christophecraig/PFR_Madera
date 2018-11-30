import { Component } from "./Component";

export class Provider {
    id: number
    businessName: string
    address: string
    businessContact: string
    paymentContact: string
    description?: string
    components: Component[]
}