import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo1Component } from './ejemplo1.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo1Component', () => {
  let component: Ejemplo1Component;
  let fixture: ComponentFixture<Ejemplo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo1Component ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
