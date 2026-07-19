import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { CourseService, Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private courseService: CourseService) {}

  private enrolledCourseIds: number[] = [];

  enroll(id: number): void {
    if (!this.enrolledCourseIds.includes(id)) {
      this.enrolledCourseIds.push(id);
    }
  }

  unenroll(id: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(c => c !== id);
  }

  isEnrolled(id: number): boolean {
    return this.enrolledCourseIds.includes(id);
  }

  getEnrolledCourses(): Observable<Course[]> {

    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }

    return forkJoin(
      this.enrolledCourseIds.map(id =>
        this.courseService.getCourseById(id)
      )
    );

  }

}