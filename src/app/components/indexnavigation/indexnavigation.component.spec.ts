import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexnavigationComponent } from './indexnavigation.component';

describe('IndexnavigationComponent', () => {
  let component: IndexnavigationComponent;
  let fixture: ComponentFixture<IndexnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
