import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDesignImageComponent } from './project-design-image.component';

describe('ProjectDesignImageComponent', () => {
  let component: ProjectDesignImageComponent;
  let fixture: ComponentFixture<ProjectDesignImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDesignImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDesignImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
