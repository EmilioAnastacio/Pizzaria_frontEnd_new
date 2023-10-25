import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecolistaComponent } from './enderecolista.component';

describe('EnderecolistaComponent', () => {
  let component: EnderecolistaComponent;
  let fixture: ComponentFixture<EnderecolistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecolistaComponent]
    });
    fixture = TestBed.createComponent(EnderecolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
