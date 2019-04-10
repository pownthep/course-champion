import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChampionComponent } from './course-champion.component';

describe('CourseChampionComponent', () => {
  let component: CourseChampionComponent;
  let fixture: ComponentFixture<CourseChampionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChampionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
