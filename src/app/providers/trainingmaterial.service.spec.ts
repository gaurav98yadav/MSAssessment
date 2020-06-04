import { TestBed } from '@angular/core/testing';

import { TrainingmaterialService } from './trainingmaterial.service';

describe('TrainingmaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingmaterialService = TestBed.get(TrainingmaterialService);
    expect(service).toBeTruthy();
  });
});
