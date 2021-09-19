import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperItemComponent } from './swipper-item.component';

describe('SwipperItemComponent', () => {
  let component: SwipperItemComponent;
  let fixture: ComponentFixture<SwipperItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
