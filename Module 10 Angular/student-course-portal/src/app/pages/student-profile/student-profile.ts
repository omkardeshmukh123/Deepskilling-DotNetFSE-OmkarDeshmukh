import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../services/course';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  enrolledCourses$: Observable<Course[]>;

  constructor(public enrollmentService: EnrollmentService) {
    this.enrolledCourses$ = this.enrollmentService.getEnrolledCourses();
  }

}