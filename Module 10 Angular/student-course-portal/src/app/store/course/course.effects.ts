import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CourseService } from '../../services/course';

import { CourseActions } from './course.actions';

import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CourseEffects {

  private actions$ = inject(Actions);

  private courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>

    this.actions$.pipe(

      ofType(CourseActions.loadCourses),

      mergeMap(() =>

        this.courseService.getCourses().pipe(

          map(data =>
            CourseActions.loadCoursesSuccess({ data })
          ),

          catchError(error =>
            of(
              CourseActions.loadCoursesFailure({
                error: error.message
              })
            )
          )

        )

      )

    )

  );

}