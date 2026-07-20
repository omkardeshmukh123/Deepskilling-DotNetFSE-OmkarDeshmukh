import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EnrollmentService } from './enrollment';
import { CourseService } from './course';

describe('EnrollmentService', () => {

  let service: EnrollmentService;

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [

        EnrollmentService,

        {
          provide: CourseService,
          useValue: {
            getCourseById: () => of(null)
          }
        }

      ]

    });

    service = TestBed.inject(EnrollmentService);

  });

  it('should create', () => {

    expect(service).toBeTruthy();

  });

});