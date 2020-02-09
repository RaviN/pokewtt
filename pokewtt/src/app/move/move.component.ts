import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../model/move';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.sass']
})
export class MoveComponent implements OnInit {
  @Input() move: Move;

  constructor() { }

  ngOnInit() {
  }

}
