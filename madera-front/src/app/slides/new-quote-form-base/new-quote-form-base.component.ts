import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Customer } from '@entities/customer.entity';
import { Quote } from '@entities/quote.entity';
import { State } from '@entities/state.entity';
import { Step } from '@entities/step.entity';

@Component({
  selector: 'new-quote-form-base',
  templateUrl: './new-quote-form-base.component.html',
  styleUrls: ['./new-quote-form-base.component.scss']
})
export class NewQuoteFormBaseComponent implements OnInit {

  @Input() quote: Quote;

  @Output() changeSlide = new EventEmitter<boolean>();

  customers: Customer[];
  states: State[];
  steps: Step[];

  getCustomerFromId(id: number): Customer {
    let c: Customer;

    fetch(`//${environment.db.host}:${environment.db.port}/customer/${id}`).then(response => {
      response.json().then(customer => {
        c = customer;
      });
    });
    return c || null;
  }

  constructor() { }

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  ngOnInit() {
    fetch(`//${environment.db.host}:${environment.db.port}/customer`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.customers = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/state`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.states = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/step`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.steps = data;
      });
    });
  }

  onCustomerSelect(event) {
    this.quote.customer = this.getCustomerFromId(parseInt(event.target.value, 10));
  }

  onSubmit(event) {
    this.changeSlide.emit(true);
  }

}
