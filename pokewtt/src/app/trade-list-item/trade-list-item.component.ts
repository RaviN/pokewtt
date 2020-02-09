import { Component, OnInit, Input } from '@angular/core';
import { Trade } from '../model/trade';

@Component({
  selector: 'app-trade-list-item',
  templateUrl: './trade-list-item.component.html',
  styleUrls: ['./trade-list-item.component.sass']
})
export class TradeListItemComponent implements OnInit {
  @Input() trade: Trade;
  shinyIcon = 'https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/static_assets/png/ic_shiny.png';

  constructor() { }

  ngOnInit() {
  }

  getGenderCode(trade): string {
    if (trade.gender === 'male') {
      return '9794';
    }
    if (trade.gender === 'female') {
      return '9792';
    }
    return '';
  }

}
