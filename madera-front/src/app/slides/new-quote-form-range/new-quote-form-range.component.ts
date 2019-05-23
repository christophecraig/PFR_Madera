import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Quote } from '@entities/quote.entity';
import { Range } from '@entities/range.entity';
import { Model } from '@entities/model.entity';

@Component({
  selector: 'new-quote-form-range',
  templateUrl: './new-quote-form-range.component.html',
  styleUrls: ['./new-quote-form-range.component.scss']
})
export class NewQuoteFormRangeComponent implements OnInit {

  @Input() quote: Quote;

  @Output() changeSlide = new EventEmitter<boolean>();

  @Output() rangeChanged = new EventEmitter<Range>();

  ranges: Range[];

  selectedModel: Model;

  constructor() { }

  ngOnInit() {
    fetch(`//${environment.db.host}:${environment.db.port}/range`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.ranges = data;
      });
    });
  }

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  onRangeSelect(event) {
    this.quote.range = event.target.value;
    this.rangeChanged.emit(this.quote.range);
    let ok = false;
    if (this.quote.range.models) {
      this.quote.range.models.forEach(model => {
        if (this.selectedModel === model) {
          ok = true;
        }
      });
    }
    if (!ok) {
      this.selectedModel = null;
      this.quote.modules = [];
    }
  }

  onModelSelect(event) {
    console.debug(event);
    if (event.target.value) {
      this.selectedModel = event.target.value;
      console.debug(this.selectedModel);
      this.quote.modules = this.selectedModel.modules;
    } else {
      this.selectedModel = null;
      this.quote.modules = [];
    }
    console.debug(this.quote);
  }

  onSubmit(event) {
    this.changeSlide.emit(true);
  }

}
