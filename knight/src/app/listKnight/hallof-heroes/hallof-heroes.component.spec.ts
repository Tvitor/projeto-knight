import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallofHeroesComponent } from './hallof-heroes.component';

describe('HallofHeroesComponent', () => {
  let component: HallofHeroesComponent;
  let fixture: ComponentFixture<HallofHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallofHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallofHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
