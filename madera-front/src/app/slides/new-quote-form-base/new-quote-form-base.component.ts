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

  customers: Customer[] = []

  getCustomerFromId(id: number): Customer {
    let c: Customer

    fetch('http://localhost:8080/customers/' + id).then(response => {
      response.json().then(customer => {
        c = customer
      })
    })
    return c || null
  }

  constructor() {
    fetch('http://localhost:8080/customers').then(response => {
      response.json().then(data => {
        this.customers = data
      })
    })
   }

  ngOnInit() { }

  onCustomerSelect(event) {
    this.quote.customer = this.getCustomerFromId(parseInt(event.target.value))
  }

  onSubmit(event) {
    this.changeSlide.emit(true)
  }

}
