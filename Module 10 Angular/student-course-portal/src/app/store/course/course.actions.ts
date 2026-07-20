import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from '../../services/course';

export const CourseActions = createActionGroup({
  source: 'Course',
  events: {
    'Load Courses': emptyProps(),

    'Load Courses Success': props<{
      data: Course[];
    }>(),

    'Load Courses Failure': props<{
      error: string;
    }>()
  }
});