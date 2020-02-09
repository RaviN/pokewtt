import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trade } from '../model/trade';
import { Profile } from '../model/profile';
import { Move } from '../model/move';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.sass']
})
export class ExampleListComponent implements OnInit {
  profile: Observable<Profile>;

  constructor() {
  }

  ngOnInit() {
    this.profile = this.buildExample();
  }

  buildExample(): Observable<Profile> {
    const tempTrades = [];
    tempTrades.push(new Trade(130,
      'Gyarados',
      true,
      false,
      true,
      true,
      'male',
      false,
      1,
      40,
      true,
      new Move('water', 'waterfall'),
      [
        new Move('water', 'hydro pump'),
        new Move('dark', 'crunch')
      ],
      ''));
    tempTrades.push(new Trade(130,
      'Gyarados',
      true,
      false,
      true,
      false,
      'female',
      true,
      10,
      33.5,
      true,
      new Move('dragon', 'dragon breath'),
      [ new Move('dragon', 'outrage')],
      ''));
    tempTrades.push(new Trade(130, 'Gyarados', true, false, false, false, 'female', false, 1, 40, false, null, null, ''));
    return of(new Profile('RavinNoodles', 'instinct', tempTrades));
  }

}
