import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { Quote } from '@entities/quote.entity';

@Component({
  selector: 'new-quote-form-summary',
  templateUrl: './new-quote-form-summary.component.html',
  styleUrls: ['./new-quote-form-summary.component.scss']
})
export class NewQuoteFormSummaryComponent implements OnInit {

  @Input() quote: Quote;

  @Output() changeSlide = new EventEmitter<boolean>();

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() { }

  getCost() {
    let cost = 0;
    this.quote.modules.forEach(module => {
      module.components.forEach(component => {
        cost += component.price;
      });
    });
    return cost;
  }

  getCostNow() {
    return this.getCost() * this.quote.step.completion / 100;
  }

  save() {
    console.log('submitting...');
    console.debug(this.quote);
    fetch(`//${environment.db.host}:${environment.db.port}/quote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.quote)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }

}
