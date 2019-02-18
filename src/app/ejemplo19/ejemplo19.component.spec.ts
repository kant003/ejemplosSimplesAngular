import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo19Component } from './ejemplo19.component';
import { FormsModule } from '@angular/forms';

describe('Ejemplo19Component', () => {
  let component: Ejemplo19Component;
  let fixture: ComponentFixture<Ejemplo19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo19Component ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
