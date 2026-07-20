import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { provideRouter } from '@angular/router';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';

import { courseFeatureKey, courseReducer } from './store/course/course.reducer';

import { CourseEffects } from './store/course/course.effects';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideClientHydration(withEventReplay()),

    provideHttpClient(),

    provideStore({
      [courseFeatureKey]: courseReducer
    }),

    provideEffects([
      CourseEffects
    ])

  ]
};