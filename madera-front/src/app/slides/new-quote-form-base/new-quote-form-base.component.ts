import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';
import { Customer } from '../../models/Customer';
import data from '../../db/data';

@Component({
  selector: 'new-quote-form-base',
  templateUrl: './new-quote-form-base.component.html',
  styleUrls: ['./new-quote-form-base.component.scss']
})
export class NewQuoteFormBaseComponent implements OnInit {

  @Input() quote: Quote

  @Output() changeSlide = new EventEmitter<boolean>()

  customers: Customer[] = data.customers

  getCustomerFromId(id: number): Customer {
    let c: Customer
    this.customers.forEach(customer => {
      if (customer.id === id) {
        c = customer
      }
    })
    return c || null
  }

  constructor() { }

  ngOnInit() { }

  onCustomerSelect(event) {
    this.quote.customer = this.getCustomerFromId(parseInt(event.target.value))
  }

  onSubmit(event) {
    this.changeSlide.emit(true)
  }

}
