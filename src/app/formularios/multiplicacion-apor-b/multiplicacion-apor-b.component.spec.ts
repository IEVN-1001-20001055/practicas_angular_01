import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionAporBComponent } from './multiplicacion-apor-b.component';

describe('MultiplicacionAporBComponent', () => {
  let component: MultiplicacionAporBComponent;
  let fixture: ComponentFixture<MultiplicacionAporBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionAporBComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionAporBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
