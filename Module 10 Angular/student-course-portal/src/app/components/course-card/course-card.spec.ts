import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';

import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const enrollmentServiceMock = {
    enroll: vi.fn()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        {
          provide: EnrollmentService,
          useValue: enrollmentServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed'
    };

    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(title.textContent).toContain('DATA STRUCTURES');
  });

  it('should emit enrollRequested when button is clicked', () => {
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed'
    };

    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should call EnrollmentService.enroll()', () => {
    component.course = {
      id: 5,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'Passed'
    };

    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(enrollmentServiceMock.enroll).toHaveBeenCalledWith(5);
  });

  it('should call ngOnChanges', () => {
    const logSpy = vi.spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(
        null,
        {
          id: 1,
          name: 'Angular'
        },
        true
      )
    });

    expect(logSpy).toHaveBeenCalled();
  });
});