import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightOtherStatsComponent } from './knight-other-stats.component';

describe('KnightOtherStatsComponent', () => {
  let component: KnightOtherStatsComponent;
  let fixture: ComponentFixture<KnightOtherStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightOtherStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightOtherStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
