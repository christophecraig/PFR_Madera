import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';
import { Range } from '../../models/Range';
import { Model } from '../../models/Model';
import { environment } from '../../../environments/environment';

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

  getRangeFromId(id: number): Range {
    let r: Range;
    this.ranges.forEach(range => {
      if (range.id === id) {
        r = range;
        this.rangeChanged.emit(r);
      }
    });
    return r || null;
  }

  getModelFromId(id: number): Model {
    let m: Model;
    this.quote.range.models.forEach(model => {
      if (model.id === id) {
        m = model;
      }
    });
    return m || null;
  }

  constructor() { }

  ngOnInit() {
    fetch(`//${environment.db.host}:${environment.db.port}/range`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.ranges = data;
      });
    });
  }

  onRangeSelect(event) {
    this.quote.range = this.getRangeFromId(parseInt(event.target.value, 10));
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
    if (parseInt(event.target.value, 10)) {
      this.selectedModel = this.getModelFromId(parseInt(event.target.value, 10));
      this.quote.modules = this.selectedModel.modules;
    } else {
      this.selectedModel = null;
      this.quote.modules = [];
    }
  }

  onSubmit(event) {
    this.changeSlide.emit(true);
  }

}
