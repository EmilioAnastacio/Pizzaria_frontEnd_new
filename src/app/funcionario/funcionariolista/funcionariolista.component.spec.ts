import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariolistaComponent } from './funcionariolista.component';

describe('FuncionariolistaComponent', () => {
  let component: FuncionariolistaComponent;
  let fixture: ComponentFixture<FuncionariolistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariolistaComponent]
    });
    fixture = TestBed.createComponent(FuncionariolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
