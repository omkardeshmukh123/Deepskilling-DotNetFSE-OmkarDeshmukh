import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { StudentProfile } from './pages/student-profile/student-profile';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'courses', component: CourseList },

  {
    path: 'enrollment',
    component: EnrollmentForm
  },

  {
    path: 'reactive',
    component: ReactiveEnrollmentForm
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: '**',
    component: NotFound
  }

];