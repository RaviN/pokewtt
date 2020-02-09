import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListItemComponent } from './trade-list-item.component';

describe('TradeListItemComponent', () => {
  let component: TradeListItemComponent;
  let fixture: ComponentFixture<TradeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
