import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';
import { Customer } from '../../models/Customer';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'new-quote-form-base',
  templateUrl: './new-quote-form-base.component.html',
  styleUrls: ['./new-quote-form-base.component.scss']
})
export class NewQuoteFormBaseComponent implements OnInit {

  @Input() quote: Quote;

  @Output() changeSlide = new EventEmitter<boolean>();

  customers: Customer[];

  getCustomerFromId(id: number): Customer {
    let c: Customer;

    fetch(`//${environment.db.host}:${environment.db.port}/customer/${id}`).then(response => {
      response.json().then(customer => {
        c = customer;
      });
    });
    return c || null;
  }

  constructor() {
    fetch(`//${environment.db.host}:${environment.db.port}/customer`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.customers = data;
      });
    });
  }

  ngOnInit() { }

  onCustomerSelect(event) {
    this.quote.customer = this.getCustomerFromId(parseInt(event.target.value, 10));
  }

  onSubmit(event) {
    this.changeSlide.emit(true);
  }

}
