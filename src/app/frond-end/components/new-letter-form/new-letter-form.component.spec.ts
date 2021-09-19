import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLetterFormComponent } from './new-letter-form.component';

describe('NewLetterFormComponent', () => {
  let component: NewLetterFormComponent;
  let fixture: ComponentFixture<NewLetterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLetterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
