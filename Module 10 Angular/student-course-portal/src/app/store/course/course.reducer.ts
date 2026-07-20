import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './course.actions';
import { CourseState, initialState } from './course-state';
import { createReducer, on } from '@ngrx/store';

export const courseFeatureKey = 'course';

export const courseReducer = createReducer(

  initialState,

  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CourseActions.loadCoursesSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    courses: data
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);