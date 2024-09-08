import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResumePageComponent } from './my-resume-page.component';

describe('MyResumePageComponent', () => {
  let component: MyResumePageComponent;
  let fixture: ComponentFixture<MyResumePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResumePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
