import { TestBed } from '@angular/core/testing';

import { GeneradorNumerosService } from './generador-numeros.service';

describe('GeneradorNumerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorNumerosService = TestBed.get(GeneradorNumerosService);
    expect(service).toBeTruthy();
  });
});
