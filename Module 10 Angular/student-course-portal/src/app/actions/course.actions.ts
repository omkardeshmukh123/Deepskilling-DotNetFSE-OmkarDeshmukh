import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CourseActions = createActionGroup({
  source: 'Course',
  events: {
    'Y Courses': emptyProps(),
    'Y Courses Success': props<{ data: unknown }>(),
    'Y Courses Failure': props<{ error: unknown }>(),
  },
});
