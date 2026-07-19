import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseFilterPipe } from '../../pipes/course-filter-pipe';
import { CourseService, Course } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    CourseFilterPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  searchTerm = '';

  selectedCourseId = 0;

  isLoading = true;

  errorMessage = '';

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        this.errorMessage = err.message;
      },

      complete: () => {
        this.isLoading = false;
      }

    });

  }

  onEnroll(id: number): void {
    this.selectedCourseId = id;
    alert(`Enrolled in Course ID: ${id}`);
  }

}