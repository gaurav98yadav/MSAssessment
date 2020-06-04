import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingmaterialComponent } from './trainingmaterial.component';

describe('TrainingmaterialComponent', () => {
  let component: TrainingmaterialComponent;
  let fixture: ComponentFixture<TrainingmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
