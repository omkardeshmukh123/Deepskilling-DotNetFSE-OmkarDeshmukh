import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFilter',
  standalone: true
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses: any[], search: string): any[] {

    if (!search) {
      return courses;
    }

    return courses.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}