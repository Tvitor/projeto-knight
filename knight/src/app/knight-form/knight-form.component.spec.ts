import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightFormComponent } from './knight-form.component';

describe('KnightFormComponent', () => {
  let component: KnightFormComponent;
  let fixture: ComponentFixture<KnightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
