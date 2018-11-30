import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'new-quote-form-summary',
  templateUrl: './new-quote-form-summary.component.html',
  styleUrls: ['./new-quote-form-summary.component.scss']
})
export class NewQuoteFormSummaryComponent implements OnInit {

  @Input() quote: Quote

  @Output() changeSlide = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() { }

}
