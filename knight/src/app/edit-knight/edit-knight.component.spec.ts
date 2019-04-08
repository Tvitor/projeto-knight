import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKnightComponent } from './edit-knight.component';

describe('EditKnightComponent', () => {
  let component: EditKnightComponent;
  let fixture: ComponentFixture<EditKnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
