import { Customer } from "./Customer";
import { Range } from "./Range";
import { Module } from "./Module";

export class Quote {
    id: number
    name: string
    reference: string
    customer: Customer
    date: Date
    range: Range
    modules: Module[]
}