import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';
import { Customer } from '../../models/Customer';
import data from '../../db/data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'new-quote-form-base',
  templateUrl: './new-quote-form-base.component.html',
  styleUrls: ['./new-quote-form-base.component.scss']
})
export class NewQuoteFormBaseComponent implements OnInit {

  @Input() quote: Quote

  @Output() changeSlide = new EventEmitter<boolean>()

  customers: Customer[]

  getCustomerFromId(id: number): Customer {
    let c: Customer

    fetch(`http://${environment.db.host}:${environment.db.port}/customers/${id}`).then(response => {
      response.json().then(customer => {
        c = customer
      })
    })
    return c || null
  }

  constructor() {
    fetch(`http://${environment.db.host}:${environment.db.port}/customers`).then(response => {
      response.json().then(data => {
        console.log(data)
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
