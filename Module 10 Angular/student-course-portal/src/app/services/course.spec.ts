import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [
        provideHttpClient(),
        CourseService
      ]

    });

    service = TestBed.inject(CourseService);

  });

  it('should create', () => {

    expect(service).toBeTruthy();

  });

});