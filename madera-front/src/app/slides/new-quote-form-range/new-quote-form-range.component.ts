import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';
import { Range } from '../../models/Range';
import data from '../../db/data';
import { Model } from '../../models/Model';

@Component({
  selector: 'new-quote-form-range',
  templateUrl: './new-quote-form-range.component.html',
  styleUrls: ['./new-quote-form-range.component.scss']
})
export class NewQuoteFormRangeComponent implements OnInit {

  @Input() quote: Quote

  @Output() changeSlide = new EventEmitter<boolean>()

  ranges: Range[] = data.ranges

  selectedModel: Model

  getRangeFromId(id: number): Range {
    let r: Range
    this.ranges.forEach(range => {
      if (range.id === id) {
        r = range
      }
    })
    return r || null
  }

  getModelFromId(id: number): Model {
    let m: Model
    this.quote.range.models.forEach(model => {
      if (model.id === id) {
        m = model
      }
    })
    return m || null
  }

  constructor() { }

  ngOnInit() { }

  onRangeSelect(event) {
    this.quote.range = this.getRangeFromId(parseInt(event.target.value))
    let ok: boolean = false
    if (this.quote.range.models) {
      this.quote.range.models.forEach(model => {
        if (this.selectedModel === model) {
          ok = true
        }
      })
    }
    if (!ok) {
      this.selectedModel = null
      this.quote.modules = []
    }
  }

  onModelSelect(event) {
    if (parseInt(event.target.value)) {
      this.selectedModel = this.getModelFromId(parseInt(event.target.value))
      this.quote.modules = this.selectedModel.modules
    } else {
      this.selectedModel = null
      this.quote.modules = []
    }
  }

  onSubmit(event) {
    this.changeSlide.emit(true)
  }

}
