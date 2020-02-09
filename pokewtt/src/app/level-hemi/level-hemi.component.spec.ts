import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelHemiComponent } from './level-hemi.component';

describe('LevelHemiComponent', () => {
  let component: LevelHemiComponent;
  let fixture: ComponentFixture<LevelHemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelHemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelHemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
